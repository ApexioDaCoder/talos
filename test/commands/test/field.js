const { Command, FieldPageMenu } = require('../../../src');

module.exports = new Command('field', [], 'Try out the field page menu.', {}, msg => {
  new FieldPageMenu(
    msg.channel,
    msg.author.id,
    30000,
    {
      data  : [
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
        { name: 'a', value: 'b' },
      ],
      trash : true,
      jump  : true,
      start : 1,
      embed : {
        footer : { text: 'Field Rock' },
      },
    },
    [
      '⬅️',
      '➡️',
    ],
  );
});
