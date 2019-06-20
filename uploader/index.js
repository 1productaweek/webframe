const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { Storage } = require('@google-cloud/storage')

const storage = new Storage({
  keyFilename: 'webframe.service-account.json',
})
const bucketName = 'webframe-screens'

async function upload () {
	const dirPath = path.resolve(__dirname, './screens')
	const products = fs.readdirSync(dirPath).filter(path => path.charAt(0) !== '.')
	asyncMap(products, uploadDir)
}

async function uploadDir (product) {
	const dirPath = path.resolve(__dirname, './screens', product)
	const screens = fs.readdirSync(dirPath).filter(path => path.charAt(0) !== '.')
	console.log(`-- ${product} --`)
	const promises = screens.map(async (screen) => {
		return uploadFile(product, screen, path.resolve(dirPath, screen))
	})
	return Promise.all(promises)
}

async function uploadFile (product, screen, filename) {
	let categories = screen.split('.')[0].split('-')
	if (categories[0] === product) categories = categories.slice(1)

	const contents = fs.readFileSync(filename)

	const shasum = crypto.createHash('sha1')
	shasum.update(contents)
	const sha = shasum.digest('hex')

	const name = `${product}-${sha}`
	const metadata = {
  	metadata: {
  		categories: categories.join(','),
    	product,
  	},
    cacheControl: 'public, max-age=14400',
  }

	const [exists] = await storage.bucket(bucketName).file(name).exists()

	if (exists) {
		console.log('Existing cache', name)
		return storage.bucket(bucketName).file(name).setMetadata(metadata)
	}

	console.log('Uploading file', name)

	return storage.bucket(bucketName).upload(filename, {
    gzip: true,
    destination: name,
    metadata,
  })
}

async function asyncMap (items, fn) {
	const out = []
	for (var i = items.length - 1; i >= 0; i--) {
		out.push(await fn(items[i], i))
	}
	return out
}

upload()