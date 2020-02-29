  
import React from 'react'

// redux
import { Provider } from 'react-redux'
import withRedux from "next-redux-wrapper"
import store from '../app/store'

// next.js
import NextApp, { Container } from 'next/app'
import Head from 'next/head'

// i18n
import { appWithTranslation } from '../i18n'

// components
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'
import MyError from '../app/components/MyError'

// main css
import "react-datepicker/dist/react-datepicker.css";
import '../styles/app.scss'
class MyApp extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Head>
          <title>Movie App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel="shortcut icon" href="/images/logo-header.png" />
        </Head>
        <Header />
        <div className="wrapper-content">
          {pageProps.error && pageProps.error.status ? (
            <MyError error={pageProps.error} />
          ) : (
            <Component {...pageProps} />
          )}
        </div>
        <Footer />
      </Provider>
    )
  }
}

export default withRedux(store)(appWithTranslation(MyApp))