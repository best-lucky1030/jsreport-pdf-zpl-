// main.js
reporter.documentStore.registerComplexType('htmlToText', {
  wordWrap: { type: 'Edm.Number' }
})

const templateType = reporter.documentStore.model.entityTypes['TemplateType']
templateType.htmlToText = { type: 'jsreport.htmlToText' }
