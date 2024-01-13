const fs = require('fs');
const path = require('path');

const BASE = process.cwd();

const [, , tenant = 'none'] = process.argv;

if (!fs.existsSync(path.join(BASE, '/dist/apps/service/public'))) {
  fs.mkdirSync(path.join(BASE, '/dist/apps/service/public'), {
    recursive: true,
  });
}
const config = {
  tenant,
};

fs.writeFileSync(
  path.join(BASE, '/dist/apps/service/public/config.js'),
  `window._bitdrift = {
    config: ${JSON.stringify(config, null, 2)},
  };
  `
);
