import { getContext } from 'recompose'
import PropTypes from 'prop-types'

export default getContext({
  modalProvider: PropTypes.object.isRequired,
})
