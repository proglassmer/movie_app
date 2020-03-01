
import React from 'react'

// routes
import { Link } from '../routes'

// i18n
import { i18n, withTranslation } from '../../i18n'

class Footer extends React.Component {

	openMenu() {
	}

	render() {
		const { t, i18n } = this.props
		return (
			<div className="footer">
        <footer className="page-footer font-small blue py-4">
          <div className="container text-center text-md-left p-relative">
            <div className="row no-gutters">
              <div className="col-12 col-sm-2 col-md-2 mt-0 mt-md-3">
                <div className="footer-logo"></div>
              </div>
              {/* <hr className="clearfix w-100 d-md-none pb-3" /> */}
              <div className="col-12 col-sm-10 col-md-6 mb-md-0 mb-3">
                <ul className="list-unstyled d-flex footer-menu">
                  <li>
                    <Link route="package">
                      <a> {t('menu.insurance')} </a>
                    </Link>
                  </li>
                  <li>
                    <Link route="promotion">
                      <a> {t('menu.promotion')} </a>
                    </Link>
                  </li>
                  <li>
                    <Link route="root">
                      <a> {t('menu.about_us')} </a>
                    </Link>
                  </li>
                  <li>
                    <Link route="root">
                      <a> {t('menu.contact_us')} </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-8 col-md-3 mb-md-0 mb-3 contact-footer">
                <h5> ใบอนุญาตเลขที่ 1001002 </h5>
                <p> <span className="address-icon mr-1"></span> 65/44 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310 </p>
                <p className="align-items-center"> <span className="tel-icon mr-1"></span> 090-994-6559 </p>
                <p className="align-items-center"> <span className="email-icon mr-1"></span> info@autosmart.com </p>
              </div>
              <div className="col-12 col-sm-4 col-md-1 mb-md-0 mb-3 qr-img-box">
                {/* <img src="/images/qr.png" className="img-fluid qr-pic" /> */}
              </div>
            </div>
            <div className="footer-copyright text-center text-md-left py-3">2019 © Auto Smart Broker Solution. All Rights Reserved.</div>
          </div>
        </footer>
			</div>
		)
	}
}

export default withTranslation(['common'])(Footer)
