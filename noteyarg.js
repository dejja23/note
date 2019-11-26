const yargs = require('yargs');
const func = require('./func');

yargs.command({
  command: 'add',
  describe: 'Adding a note',
  builder: {
    title: {
      describe: 'the damm title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'the damm body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    func.add(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'the damm title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    func.remove(argv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'the damm title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    func.read(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Reading all notes',
  handler: () => {
    func.list();
  }
});

yargs.parse();
