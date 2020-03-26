// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/hero',
          component: './hero',
        },
        {
          path: '/item',
          component: './item',
        },
        {
          path: '/summoner',
          component: './summoner',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'hero',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
    "proxy": {
      "/api": {
          "target": "https://pvp.qq.com/web201605/js/",
          "changeOrigin": true,
          "pathRewrite": {"^/api": ""}
      }
    }
};
