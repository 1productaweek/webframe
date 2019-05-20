import React from 'react'
import PropTypes from 'prop-types'

let counter = 0
export const ModalContext = React.createContext(null)

class ModalProvider extends React.Component {
  state = {
    stack: [],
  }

  static childContextTypes = {
    client: PropTypes.object.isRequired,
  }

  // Add a modal to the stack
  push = async (Component, props) => {
    const id = counter++
    return new Promise((resolve, reject) => {
      this.setState(({ stack }) => ({
        stack: [...stack, {
          id,
          Component,
          props,
          resolve,
          reject: () => resolve(null),
        }],
      }))
    }).then((data) => {
      // HACK: we cannot run this immedietly, otherwise the reference may be lost,
      // especially when using hooks
      setTimeout(() => {
        this.removeModal(id)
      }, 0)
      return data
    })
  }

  // Remove the top modal from the stack
  pop = (resolveData) => {
    const { stack } = this.state
    stack[stack.length - 1].resolve(resolveData)
  }

  removeModal = (removeId) => {
    this.setState(({ stack }) => ({
      stack: stack.filter(({ id }) => id !== removeId),
    }))
  }

  getChildContext () {
    return {
      modalProvider: this,
    }
  }

  // Render the open modals
  render () {
    const { stack } = this.state
    const { children } = this.props
    const modals = stack.map(({ id, Component, resolve, reject, props }) => {
      return (
        <Component
          {...props}
          modalProvider={this}
          key={id}
          show
          isOpen
          onCancel={reject}
          onDone={resolve}
        />
      )
    })
    return (
      <ModalContext.Provider value={this}>
        { children }
        { modals }
      </ModalContext.Provider>
    )
  }
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
}

ModalProvider.childContextTypes = {
  modalProvider: PropTypes.object.isRequired,
}

export default ModalProvider
