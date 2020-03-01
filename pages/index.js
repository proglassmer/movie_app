import React from 'react'
import compose from 'recompose/compose'
// redux
import { connect } from 'react-redux'
// i18n
import { withTranslation } from '../i18n'

import BannerSlider from './../app/components/BannerSlider'

class Index extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
	}

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		const { t } = this.props
		return (
			<div className="home-page" style={{minHeight: "500px"}} >
				<BannerSlider />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
  }
}
export default compose(withTranslation('common'), connect(mapStateToProps, {}))(Index)