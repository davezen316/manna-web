const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  reactStrictMode: true,
  i18n: {
    locales: [ 'en', 'en-MY', 'de' ],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'loudspeaker-one.com',
        defaultLocale: 'en',
        http: true,
      },
      {
        domain: 'loudspeaker-one.com',
        defaultLocale: 'en-MY',
        http: true,
      },
      {
        domain: 'loudspeaker-one.com',
        defaultLocale: 'de',
        http: true,
      }
    ]
  }
});