// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import Main from 'containers/Main';
import createGeoIPRoute from 'containers/GeoIP/route';

export function createRoutes(store) {
  const root = {
    path: '/',
    component: Main,
  };
  const geoip = createGeoIPRoute(store);

  return {
    childRoutes: [root, geoip],
  };
}
