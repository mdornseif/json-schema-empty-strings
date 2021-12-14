/*
 * json-schema-empty-strings.spec.ts
 *
 * Created by Dr. Maximillian Dornseif 2021-10-24 in huWaWi3 22.0.0
 * Copyright (c) 2021 Dr. Maximillian Dornseif
 */

import test from 'ava';
import { JSONSchema7 } from 'json-schema';

import { jsonEmptyStrings } from './json-schema-empty-strings';

const myschema: JSONSchema7 = {
  $id: 'https://huwawi3.hudora.de/schemata/H3Test',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Testdaten',
  type: 'object',
  required: ['s1'],
  properties: {
    s1: {
      title: 's1',
      type: 'string',
      default: 'foo',
    },
    s2: {
      title: 's2',
      type: 'string',
      default: '',
    },
    s3: {
      title: 's3',
      type: 'string',
    },
    sub: {
      type: 'object',
      required: ['s1'],
      properties: {
        s1: {
          title: 's1',
          type: 'string',
          default: 'bar',
        },
      },
    },
  },
};

test('handles num', (t) => {
  t.deepEqual(jsonEmptyStrings(myschema), {
    s1: '',
    s2: '',
    s3: '',
    sub: {
      s1: '',
    },
  });
});
