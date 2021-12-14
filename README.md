# json-schema-empty-strings

Generate empty strings for all [JSON-Schema](https://json-schema.org) string fields.

There are many four different ways in Javsscript / Typescript to represent "no text":

- `""`
- `null`
- `undefined`
- absence of the corrosponding property

In the context of JSON-Schema absence of the corrosponding property is widely used to represent absence of strings. Sometimes you might not want that.

For a given schema `jsonEmptyStrings()` generates an object containing empty strings for all properties `type: string`.

The output can easily [merged](https://www.npmjs.com/package/lodash.merge) with your existing data to get empty strings for instead of missing properties.

```js
import { jsonEmptyStrings } from 'json-schema-empty--strings';
import merge from 'lodash.merge';

const finalData = merge({}, jsonEmptyStrings(schema), inputData);
```

Iy you have `null` or `undefined` values in your data [deep-clean](https://www.npmjs.com/package/clean-deep) them before merging:

```js
import { jsonEmptyStrings } from 'json-schema-empty--strings'
import merge from 'lodash.merge'
import cleanDeep from 'clean-deep'

const finalData = merge({}, jsonEmptyStrings(schema), cleanDeep(inputData, {
    emptyArrays: false,
    emptyObjects: false,
    emptyStrings: false,
  })
```
