const functions = require('firebase-functions');

var API_KEY = functions.config().mailgun.key;
var DOMAIN = 'hi.1productaweek.com';
var mailgun = require('mailgun-js')({ apiKey: API_KEY, domain: DOMAIN });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendEmailFeedback = functions.firestore.document('/feedback/{pushId}')
    .onCreate(async (snapshot, context) => {
      const val = snapshot.data();
      if (!val) {
        return true
      }

      const { email, feedback } = val

      const data = {
        from: email,
        to: 'Calum <calum@1productaweek.com>',
        subject: 'Webframe Feedback!',
        text: feedback,
      };

      await mailgun.messages().send(data).catch((err) => console.error(err))

      // Grab the current value of what was written to the Realtime Database.
      // console.log('Email', context.params.pushId, val);
      return true
    });