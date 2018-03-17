const webpack=require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'web-arch后台管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1 ,maximum-scale=1.0, user-scalable=no' },
      { httpequiv: 'content-type', content: 'text/html;charset=UTF-8' },
      { name: 'description', content: '' },
      { name: 'author', content: '' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/font-awesome/css/font-awesome.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/jquery-metrojs/MetroJs.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/shape-hover/css/demo.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/shape-hover/css/component.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/owl-carousel/owl.carousel.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/owl-carousel/owl.theme.css' },
      { rel: 'stylesheet', type: 'text/css',media:'screen', href: '/pace/pace-theme-flash.css' },
      { rel: 'stylesheet', type: 'text/css',media:'screen', href: '/jquery-slider/css/jquery.sidr.light.css' },
      { rel: 'stylesheet', type: 'text/css',media:'screen', href: '/jquery-ricksaw-chart/css/rickshaw.css' },
      { rel: 'stylesheet', type: 'text/css',media:'screen', href: '/Mapplic/mapplic/mapplic.css' },
      { rel: 'stylesheet', type: 'text/css',media:'screen', href: '/pace/pace-theme-flash.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/bootstrapv3/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/bootstrapv3/css/bootstrap-theme.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', type: 'text/css', href: '/animate.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/jquery-scrollbar/jquery.scrollbar.css' }
    ],
    css:['bootstrap/dist/css/bootstrap.min.css'],
    script: [
      {src: 'https://code.jquery.com/jquery-3.1.1.min.js'},
      {src: '/pace/pace.min.js'},
      {src: '/jquery/jquery-1.11.3.min.js'},
      {src: '/bootstrapv3/js/bootstrap.min.js'},
      {src: '/jquery-block-ui/jqueryblockui.min.js'},
      {src: '/jquery-unveil/jquery.unveil.min.js'},
      {src: '/jquery-scrollbar/jquery.scrollbar.min.js'},
      {src: '/jquery-numberAnimate/jquery.animateNumbers.js'},
      {src: '/jquery-validation/js/jquery.validate.min.js'},
      {src: '/bootstrap-select2/select2.min.js'},
      {src: '/webarch.js'},
      {src: '/chat.js'},
      {src: '/rem.js'},
      {src: '/remdemo.js'},
      {src: '/jquery-ui/jquery-ui-1.10.1.custom.min.js'},
      {src: '/jquery-ricksaw-chart/js/raphael-min.js'},
      {src: '/jquery-ricksaw-chart/js/d3.v2.js'},
      {src: '/jquery-ricksaw-chart/js/rickshaw.min.js'},
      {src: '/jquery-sparkline/jquery-sparkline.js'},
      {src: '/skycons/skycons.js'},
      {src: '/owl-carousel/owl.carousel.min.js'},
      {src: '/owl-carousel/owl.carousel.min.js'},
      {src: '/owl-carousel/owl.carousel.min.js'},
      {src: '/owl-carousel/owl.carousel.min.js'},
      // {src: 'http://maps.google.com/maps/api/js?sensor=true'},
      {src: '/jquery-gmap/gmaps.js'},
      {src: '/Mapplic/js/jquery.easing.js'},
      {src: '/Mapplic/js/jquery.mousewheel.js'},
      {src: '/Mapplic/js/hammer.js'},
      {src: '/Mapplic/mapplic/mapplic.js'},
      {src: '/jquery-flot/jquery.flot.js'},
      {src: '/jquery-metrojs/MetroJs.min.js'},
      {src: '/dashboard_v2.js'},
      {src: '/jquery.scrollTo.min.js'},
      {src: '/jquery.nicescroll.js'},
      {src: '/jquery.sparkline.js'},
      {src: '/jquery-easy-pie-chart/jquery.easy-pie-chart.js'},
      {src: '/owl.carousel.js'},
      {src: '/jquery.customSelect.min.js'},
      {src: '/common-scripts.js'},
      {src: '/sparkline-chart.js'},
      {src: '/easy-pie-chart.js'}
    ]
  },

  plugins: [{src:'~plugins/element-ui'},// element-ui.js文件地址
            {src:'~plugins/jquery-scrollbar', ssr: false},
            {src:'~plugins/swiper', ssr: false},
            {src:'~plugins/jquery'}], // jquery文件地址
  modules: [
    // npm install @nuxtjs/proxy -D
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy']
  ],
  proxy: [
    [
      '/api',
      {
        target: 'http://192.168.1.3:3100/', // api主机
        changeOrigin:true,
        pathRewrite: { '^/api' : '/' }
      }
    ],
    [
      '/douban',
      {
        target:'https://api.douban.com/v2/',
        changeOrigin:true,
        pathRewrite:{'^/douban':'/'}
      }
  ]

  // }
// }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#589DF6' },
  /*
  ** Build configuration
  */
  build: {
    cache: true,
    vendor:['axios','jquery','bootstrap'],
    plugins:[
      new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery',
        'window.jQuery':'jquery'
      })
    ],
    extend(config,ctx){
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/cyc.scss'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
