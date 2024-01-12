const fs = require('fs');
const path = require('path');

const BASE = process.cwd();

const [, , tenant = 'none'] = process.argv;

if (!fs.existsSync(path.join(BASE, '/dist/config'))) {
  fs.mkdirSync(path.join(BASE, '/dist/config'), { recursive: true });
}
const config = {
  tenant,
};

fs.writeFileSync(
  path.join(BASE, '/dist/config/config.json'),
  JSON.stringify(config, null, 2)
);
