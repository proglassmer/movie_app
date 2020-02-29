import React from 'react'
import { withTranslation } from './../i18n'

class Error extends React.Component {
	static async getInitialProps({ store }) {
	  return { namespacesRequired: ['common'] }
  }
  
	constructor(props) {
		super(props)
  }
  
  render() {
    return (<p> error page </p>)
  }

}

export default withTranslation('common')(Error)