const fs = require('fs');
const path = require('path');

const BASE = process.cwd();

const [, , tenant, environment] = process.argv;

console.log({ tenant, environment });

if (!fs.existsSync(path.join(BASE, '/dist/apps/service/public'))) {
  throw Error('Apps must be built before running this script');
}
const config = {
  tenant,
  environment,
};

fs.writeFileSync(
  path.join(BASE, '/dist/apps/service/public/config.js'),
  `window._bitdrift = {
    config: ${JSON.stringify(config, null, 2)},
  };
  `
);
