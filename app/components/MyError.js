import React from 'react'

// i18n
import { withTranslation } from '../../i18n'

// routes
import { Link } from '../routes'

class MyError extends React.Component {
	render401() {
		const { t, error } = this.props
		return (
			<div className="m-t-50 m-b-50">
				<h1 className="text-center">{t('errors.sorry')}</h1>
				<h3 className="text-center">{t('errors.message_401')}</h3>
				<Link route="root">
					<a className="btn btn-red w-200px margin-auto d-block">{t('back_home')}</a>
				</Link>
			</div>
		)
	}

	renderErrors() {
		const { error } = this.props
		return (
			<React.Fragment>
				<h1 className="text-center">Error {error.status}</h1>
				<h3 className="text-center">{error.message}</h3>
			</React.Fragment>
		)
	}

	render() {
		const { error } = this.props
		return (
			<div className="container">
        Error
				{/* {error.status == 401 ? (
					this.render401()
				) : (
					this.renderErrors()
				)} */}
			</div>
		)
	}
}

export default withTranslation(['common'])(MyError)