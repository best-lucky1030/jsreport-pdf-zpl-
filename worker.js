//worker.js
const convert = require('html-to-text')

module.exports = (reporter, definition) => {
  reporter.extensionsManager.recipes.push({
    name: 'html-to-text',
    execute: (request, response) => {
      response.content = Buffer.from(convert.htmlToText(response.content.toString(), request.template.htmlToText || {}))
      response.meta.contentType = 'text/plain'
      response.meta.fileExtension = 'txt'
    }
  })
}
