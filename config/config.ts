import { defineConfig } from 'rcv';
import { proxy } from './proxy';


// const packageJson = require('../package.json');


// const { ModuleFederationPlugin } = require('webpack').container;
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


const { REACT_APP_ENV, NODE_ENV } = process.env;


// process.env.REACT_APP_ENV

export default defineConfig({
  base: '/m/scm',


  // antd: {},

  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: false,
  // },


  // proxy: proxy[REACT_APP_ENV || 'dev'],


  define: {
    API_URL: 'YMSL_SPRING_GATEWAY_UNQIC',
    OAUTH2_URL: 'YMSL_OAUTH2_CENTER_UNQIC/auth',
    PRI_K: '大的配置文件',
    REACT_APP_ENV: '1214',
  },
 
});
