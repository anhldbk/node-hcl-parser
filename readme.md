# HCL Parser

*A better HCL parser for Javascript applications*

## Overview

This parser is transpiled from [hashicorp/hcl](https://github.com/hashicorp/hcl) using [GopherJS](https://github.com/gopherjs/gopherjs).

## Installation

```sh
npm install hcl-parser
```

## Usage

```js
import {parse} from "hcl-parser"

const input = `
  allow {
    user = "admin"
  }

  deny {
    user = "anonymous"
  }
`

const [data, err] = parse(input);

if(err == null){
  // data is the JSON object you want
} else {
  // handle error
}
```

## Development

In case you may want to reproduce this library

### Build

The associated code can be found here [anhldbk/hcl-parser](https://github.com/anhldbk/hcl-parser)

To build the parser:

```sh
# Install GopherJS first
go get -u github.com/gopherjs/gopherjs

# Build JS package
gopherjs build github.com/anhldbk/hcl-parser -o lib/parser.js -m
```

### Test

```sh
npm test
```

