![NPM License](https://img.shields.io/npm/l/json-schema-empty-strings)
[![NPM Version](https://img.shields.io/npm/v/json-schema-empty-strings)](https://www.npmjs.com/package/json-schema-empty-strings)
[![Last Commit](https://img.shields.io/github/last-commit/mdornseif/json-schema-empty-strings)](https://github.com/mdornseif/json-schema-empty-strings)

# json-schema-empty-strings

Generate empty strings for all [JSON-Schema](https://json-schema.org) string fields.

There are four different ways in Javsscript / Typescript to represent "no text":

- `""`
- `null`
- `undefined`
- absence of the corresponding property

In the context of JSON-Schema absence of the corresponding property is widely used to represent absence of strings. Sometimes you might not want that.

For a given schema `jsonEmptyStrings()` generates an object containing empty strings for all properties of `type: string`.

The output can easily [merged](https://www.npmjs.com/package/lodash.merge) with your existing data to get empty strings instead of missing properties.

```js
import { jsonEmptyStrings } from 'json-schema-empty-strings';
import merge from 'lodash.merge';

const finalData = merge({}, jsonEmptyStrings(schema), inputData);
```

Iy you have `null` or `undefined` values in your data [deep-clean](https://www.npmjs.com/package/clean-deep) them before merging:

```js
import { jsonEmptyStrings } from 'json-schema-empty-strings'
import merge from 'lodash.merge'
import cleanDeep from 'clean-deep'

const finalData = merge({}, jsonEmptyStrings(schema), cleanDeep(inputData, {
    emptyArrays: false,
    emptyObjects: false,
    emptyStrings: false,
  })
```

# See also:

- [json-schema-empty](https://www.npmjs.com/package/json-schema-empty)
