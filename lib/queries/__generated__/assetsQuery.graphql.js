/**
 * @flow
 * @relayHash 91d82a9f9951078fb0c2453b920a2099
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type assetsQueryVariables = {||};
export type assetsQueryResponse = {|
  +currencies: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +ticker: string,
  |}>
|};
export type assetsQuery = {|
  variables: assetsQueryVariables,
  response: assetsQueryResponse,
|};
*/


/*
query assetsQuery {
  currencies {
    id
    name
    ticker
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "currencies",
    "storageKey": null,
    "args": null,
    "concreteType": "Currency",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ticker",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "assetsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "assetsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "assetsQuery",
    "id": null,
    "text": "query assetsQuery {\n  currencies {\n    id\n    name\n    ticker\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '05a5603f7c149f1ef0ac22694362509c';
module.exports = node;
