const fs = require('fs/promises');
const path = require('path');
const appRoot = require('app-root-path');

const logsPath = path.join(appRoot.path, 'db', 'logs.json');

const updateStatus = async (status) => {
  const date = new Date();
  await fs.writeFile(logsPath, JSON.stringify({ status, date }, null, 2));
  const data = await fs.readFile(logsPath, 'utf8');
  return JSON.parse(data);
}

module.exports = {
  updateStatus
}
