import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText } from 'reactstrap'

// routes
import { Router, Link } from '../routes'

// component
import DefaultModal from './modal/DefaultModal'

// i18n
import { i18n, withTranslation } from '../../i18n'
import Storage from '../../lib/Storage'

class Header extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		
		this.state = {
			isToggleModal: false,
			modalType: "",
			isSettingDropdown: false,
			isOpenMenu: false
		}
		this.toggleModal = this.toggleModal.bind(this)
		this.openModal = this.openModal.bind(this)
		this.switchModal = this.switchModal.bind(this)
		this.toggleSettingUser = this.toggleSettingUser.bind(this)
		this.openMenu = this.openMenu.bind(this)
		this.closeMenu = this.closeMenu.bind(this)
  }

	openMenu() {
		this.setState({
			isOpenMenu: !this.state.isOpenMenu,
    })
	}

	closeMenu() {
		this.setState({
			isOpenMenu: false,
    })
	}

	toggleModal() {
		this.setState({
			isToggleModal: !this.state.isToggleModal,
    })
	}

	switchModal(type) {
		this.setState({
			isToggleModal: false,
    }, () => {
			this.setState({
				isToggleModal: true,
				modalType: type
			})
		})
	}

	openModal(event) {
		const type = event.currentTarget.dataset.type;
		this.setState({
			isToggleModal: true,
			modalType: type
		})
	}

	toggleSettingUser() {
		this.setState({
			isSettingDropdown: !this.state.isSettingDropdown,
    })
	}

	clickLinkMenu(menu) {
		Router.pushRoute(menu)
	}

	logoutOnClick() {
		Storage.removeCookie("_token")
	}

	_renderAvatarUser() {
		return (
			<Dropdown className="setting-dropdowm" isOpen={this.state.isSettingDropdown} toggle={this.toggleSettingUser}>
				<DropdownToggle>
					<div className="avatar-icon"></div>
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem onClick={() => this.clickLinkMenu('setting_profile')}> ข้อมูลส่วนตัว </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('setting_insurance')}> กรมธรรม์ </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('root')}> ออร์เดอร์ </DropdownItem>
					<DropdownItem onClick={() => this.clickLinkMenu('root')}> ตั้งค่า </DropdownItem>
					<DropdownItem onClick={this.logoutOnClick}> ออกจากระบบ </DropdownItem>
				</DropdownMenu>
			</Dropdown>
		)
	}

	render() {
    const _token = Storage.getCookie('_token')
    const mock_auth = true
		const { t, i18n } = this.props
		const { isOpenMenu } = this.state
		return (
			<div className="header">
				<DefaultModal type={this.state.modalType} show={this.state.isToggleModal} handleClose={this.toggleModal}
					switchModal={this.switchModal}/>

				<nav className="container navbar navbar-expand-lg">
					<button className="navbar-toggler hamburger" type="button" onClick={this.openMenu}>
						<i className="fa fa-bars" aria-hidden="true"></i>
					</button>
					<Link route="root">
						<a> <div className="logo"></div></a>
					</Link>	
					<div className="top-menu">
						<Collapse isOpen={isOpenMenu} navbar>
							<ul className="left-menu align-items-center">
								<li className="nav-item active" onClick={this.closeMenu}>
									<Link route="package">
										<a> {t('menu.insurance')} </a>
									</Link>
								</li>
								<li className="nav-item" onClick={this.closeMenu}>
									<Link route="promotion">
										<a> {t('menu.promotion')} </a>
									</Link>
								</li>
								<li className="nav-item" onClick={this.closeMenu}>
									<Link route="news">
										<a> {t('menu.news')} </a>
									</Link>
								</li>
								<li className="nav-item" onClick={this.closeMenu}>
									<Link route="root">
										<a> {t('menu.about_us')} </a>
									</Link>
								</li>
								<li className="nav-item" onClick={this.closeMenu}>
									<Link route="root">
										<a> {t('menu.contact_us')} </a>
									</Link>
								</li>
							</ul>
						</Collapse>
						<ul className="right-menu align-items-center">
							<li className={(isOpenMenu) ? '' : 'd-none' } >
								<button className="white-btn">
									{t('menu.for_agent')}
								</button>
							</li>
							<li className="nav-item">
								{(mock_auth) ? 
									this._renderAvatarUser()
								: 
								<div role="button" data-type="login" onClick={this.openModal}>
									{t('menu.login')} 
								</div>
								}
							</li>
							<li className="nav-item call-center text-right">
								<span> {t('menu.call_center')} </span>
								<p className="m-0"> 02-2093303 </p>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
export default withTranslation(['common'])(Header)