# Automerge CLI

Utilities for working with [Automerge](https://github.com/automerge/automerge) files/objects.

## Installation

    $ npm i -g automerge-cli

## Usage

To pretty-print the contents of a file `foo.automerge`:

    $ automerge-cli foo.automerge

To get JavaScript file:

    $ automerge-cli foo.automerge > foo.js

To get regular JSON:

    $ automerge-cli --json foo.automerge

To create a JSON file:

    $ automerge-cli --json foo.automerge > foo.json

To get [JSON5](https://json5.org):

    $ automerge-cli --json5 foo.automerge

To get a JSON5 file:

    $ automerge-cli --json5 foo.automerge > foo.json5

