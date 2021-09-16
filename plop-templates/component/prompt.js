const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate vue component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'component name please',
    validate: notEmpty('name')
  }],
  actions: data => {
    const name = '{{properCase name}}';
    const actions = [{
      type: 'add',
      path: `packages/${name}/src/index.vue`,
      templateFile: 'plop-templates/component/src/index.hbs',
      data: {
        name: name
      }
    },
    {
      type: 'add',
      path: `packages/${name}/index.js`,
      templateFile: 'plop-templates/component/index.hbs',
      data: {
        name: name
      }
    }];

    return actions;
  }
};
