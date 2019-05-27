import { PureComponent } from 'react'
import reactClickOutside from 'react-onclickoutside'
//

class ClickOutside extends PureComponent {
  handleClickOutside () {
    if (this.props.onClickOutside) {
      this.props.onClickOutside()
    }
  }
  render () {
    return this.props.children
  }
}

export default reactClickOutside(ClickOutside)
