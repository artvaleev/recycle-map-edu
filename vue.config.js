module.exports = {
  pwa: {
    name: 'Kazan Recycling Points',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    },
    themeColor: '#FAFAFA',
    iconPaths: {
      faviconSVG: null,
      favicon32: null,
      favicon16: null,
      appleTouchIcon: '/images/icons-192.png',
      maskIcon: null,
      msTileImage: null
    }
  }
}