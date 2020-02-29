import React from 'react'
import compose from 'recompose/compose'

// redux
import { connect } from 'react-redux'

//action
// import { login } from './../../actions/AuthenticationAction'

// components
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

// i18n
import { withTranslation } from '../../../i18n'

class DefaultModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      login_email: "",
      login_password: "",
    }

    this.toggleSwitchModal = this.toggleSwitchModal.bind(this)
    this.loginSubmitClick = this.loginSubmitClick.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  toggleSwitchModal(event) {
		const type = event.currentTarget.dataset.type;
    this.props.switchModal(type)
  }

  handleChangeInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState((state) => {
      state[name] = value
      return state
    })
  }

  _componentOtherLogin() {
    return (
      <React.Fragment>
        <div className="mb-2">
          <button className="fb-btn"> Log in with Facebook </button>
        </div>
        <div>
          <button className="border-white-btn"> Log in with Facebook </button>
        </div>
      </React.Fragment>
    )
  }

  _renderLogin() {
    const { t, handleClose, authenticate } = this.props
    const { login_email, login_password } = this.state
    return (
      <React.Fragment>
        <div className="modal-header">
          <h2 className="font-bold text-center w-100"> {t('default.sign_in')} </h2>
          <div className="close-icon" onClick={handleClose}>  </div>
        </div>
        <ModalBody>
          <div className="row">
            <div className="col-12 col-md-6 text-center py-4 px-3 right-border">
              {this._componentOtherLogin()}
            </div>
            
            <div className="col-12 col-md-6 px-4">
              <div className="form-group row">
                <label className="col-md-3 col-form-label"> {t('default.email')} </label>
                <div className="col-md-9">
                  <input type="text" name="login_email" value={login_email} onChange={this.handleChangeInput} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label"> {t('default.password')} </label>
                <div className="col-md-9">
                  <input type="password" name="login_password" value={login_password} onChange={this.handleChangeInput} />
                  <div className="text-right">
                    <a onClick={this.toggleSwitchModal} data-type="forgot_password" className="font-small color-black pointer"> {t('modal.notice_forgot_password')} </a>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <div className="offset-3 col-md-9">
                  {(authenticate.statusCode == 401) && 
                    <span> {t('error_message.wrong_username')} </span>
                  }
                  <button className="w-100 main-btn" onClick={this.loginSubmitClick}> {t('default.submit_login')} </button>
                  <p className="font-small">
                    {t('modal.want_to_signup')}
                    <a onClick={this.toggleSwitchModal} data-type="register" className="font-small color-black pointer"> {t('default.register')} </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </React.Fragment>
    )
  }

  loginSubmitClick() {
    const { handleClose } = this.props
    const request = {
      email: this.state.login_email,
      password: this.state.login_password
    }
    // this.props.login(request).then((res) => {
    //   if(this.props.authenticate.statusCode == 200) {
    //     this.props.handleClose()
    //   }
    // })
  }

  _renderRegister() {
    const { t, handleClose } = this.props
    return (
      <React.Fragment>
        <div className="modal-header">
          <h2 className="font-bold text-center w-100"> {t('modal.register')} </h2>
          <div className="close-icon" onClick={handleClose}>  </div>
        </div>
        <ModalBody>
          <div className="row">
            <div className="col-12 col-md-6 text-center py-4 px-3 right-border">
              {this._componentOtherLogin()}
            </div>
            <div className="col-12 col-md-6 px-4">
              <div className="form-group row">
                <label className="col-md-3 col-form-label"> {t('default.email')} </label>
                <div className="col-md-9">
                  <input type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label"> {t('default.password')} </label>
                <div className="col-md-9">
                  <input type="password" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3 col-form-label"> {t('modal.confirm_password')} </label>
                <div className="col-md-9">
                  <input type="password" />
                  <span className="font-small"> {t('modal.notice_password')} </span>
                </div>
              </div>
              <div className="row text-center">
                <div className="offset-3 col-md-9">
                  <button className="w-100 main-btn"> {t('default.submit_login')} </button>
                  <p className="font-small">
                    {t('modal.already_signup')}
                    <a onClick={this.toggleSwitchModal} data-type="login" className="font-small color-black pointer"> {t('modal.login')} </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </React.Fragment>
    )
  }

  _renderForgotPassword() {
    const { t, handleClose } = this.props
    return (
      <React.Fragment>
        <div className="my-modal-header my-4 text-center">
          <h2 className="font-bold text-center w-100"> {t('modal.forgot_password')} </h2>
          <p> {t('modal.send_email_text')} </p>
          <div className="close-icon" onClick={handleClose}>  </div>
        </div>
        <ModalBody>
          <div className="form-group row">
            <label className="col-md-3 col-form-label"> {t('default.email')} </label>
            <div className="col-md-9">
              <input type="text" />
            </div>
          </div>
          <div className="row text-center">
            <div className="offset-3 col-md-9">
              <button className="w-100 main-btn"> {t('modal.confirm_submit')} </button>
            </div>
          </div>
        </ModalBody>
      </React.Fragment>
    )
  }

  renderContent() {
    const { type } = this.props
    if( type == "login" ) {
      return this._renderLogin()
    } else if ( type == "register" ) {
      return this._renderRegister()
    } else if (type == "forgot_password") {
      return this._renderForgotPassword()
    }
  }

  render() {
    const { t, handleClose, show, type} = this.props
    return (
      <Modal isOpen={show} toggle={handleClose} className={"my-modal " + type} >
        {this.renderContent()}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticate: state.authenticate
  }
}

const mapDispatchToProps = {
  // login
}

export default compose(withTranslation(['common']), connect(mapStateToProps, mapDispatchToProps))(DefaultModal)