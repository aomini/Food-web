module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a Page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: '../templates/Page.tsx.hbs'
      }
    ]
  })
}
