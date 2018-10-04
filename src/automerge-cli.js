#!/usr/bin/env node

'use strict'

const options = require('command-line-args')([
  { name: 'json', type: Boolean, defaultValue: false },
  { name: 'json5', type: Boolean, defaultValue: false },
  { name: 'files', type: String, multiple: true, defaultOption: true },
])

if(!options.files || !options.files.length) {
  const usage = require('command-line-usage')([
    {
      header: 'Automerge CLI',
      content: 'Tools for working with Automerge objects/files.',
    },
    {
      header: 'Usage',
      content: 'automerge-cli [OPTIONS] file...',
    },
    {
      header: 'Options',
      optionList: [
        {
          name: 'json',
          description: 'Formats output as JSON.',
        },
        {
          name: 'json5',
          description: 'Formats output as JSON5.',
        },
      ],
    },
  ])
  console.log(usage)
  process.exit(1)
}

const Automerge = require('automerge')
const fs = require('fs')
const jsome = require('jsome')
const JSON5 = require('json5')

options.files.forEach(fname => {
  let data = undefined, obj = undefined
  try {
    data = fs.readFileSync(fname, 'utf-8')
  } catch(err) {
    return console.log('Error: could not read file: ' + fname)
  }
  try {
    obj = Automerge.load(data)
  } catch(err) {
    return console.log('Error: Automerge could not load file: ' + fname)
  }
  if(options.json5) console.log(JSON5.stringify(obj, null, 2))
  else if(options.json) console.log(JSON.stringify(obj, null, 2))
  else jsome(obj)
})


