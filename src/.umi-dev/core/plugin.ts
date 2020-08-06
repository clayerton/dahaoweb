// @ts-nocheck
import { Plugin } from '/Users/liuhaoyu/Desktop/space/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/Users/liuhaoyu/Desktop/space/node_modules/umi-plugin-antd-icon-config/lib/app.js'),
  path: '/Users/liuhaoyu/Desktop/space/node_modules/umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/Users/liuhaoyu/Desktop/space/src/.umi-dev/plugin-dva/runtime.tsx'),
  path: '/Users/liuhaoyu/Desktop/space/src/.umi-dev/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/Users/liuhaoyu/Desktop/space/src/.umi-dev/plugin-locale/runtime.tsx'),
  path: '/Users/liuhaoyu/Desktop/space/src/.umi-dev/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
