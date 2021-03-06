if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import { injectAsyncReducer } from 'store';


export default function createRoutes(store) {
  return {
    path: 'geoip',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        injectAsyncReducer(store, 'geoip', require('./reducer').default);

        cb(null, require('./GeoIP').default);
      });
    },
  };
}
