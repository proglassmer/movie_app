const NextI18Next = require('next-i18next').default
// const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    th: 'th',
  },
  all: {
    en: 'en',
    th: 'th',
  },
}

module.exports = new NextI18Next({
	defaultLanguage: 'th',
  otherLanguages: ['en'],
  localePath: typeof window === "undefined" ? "public/locales" : "locales"
})
