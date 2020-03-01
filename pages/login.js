import React from 'react'
import { withTranslation } from './../i18n'

//component
import LoginBox from './../app/components/LoginBox'
import RegisterBox from './../app/components/RegisterBox'

class Login extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
  }
  
	constructor(props) {
		super(props)
  }
  
  render() {
    return (
      <div className="login-page">
        <div className="box-center">
          <div className="box-center-menu">
            <div className="row">
              <div className="col-sm-12 col-md-4"><a href="#" className="link-animation link-active"><b>เข้าสุ่ระบบ</b></a></div>
              <div className="col-sm-12 col-md-5"><a href="register.html" className="link-animation"><b>สมัครสมาชิก</b></a></div>
            </div>
          </div>
          <div className="box-center-form">
            <p>ชื่อผู้ใช้</p>
            <input type="text" name="username" />
            <p>รหัสผ่าน</p>
            <input type="password" name="password" />
            <button type="button" >เข้าสู่ระบบ</button>
          </div>
        </div>
      </div>
    )
  }

}

export default withTranslation('common')(Login)