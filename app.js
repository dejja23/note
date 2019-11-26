const func = require('./func');

// process.argv
const command = process.argv[2];
const title = process.argv[3];
const body = process.argv[4];

switch (command) {
  case 'add':
    func.add(title, body);
    break;
  case 'read':
    func.read(title);
    break;
  case 'list':
    func.list();
    break;
  case 'remove':
    func.remove(title);
    break;
  default:
    console.log('Invalid Command');
    break;
}
