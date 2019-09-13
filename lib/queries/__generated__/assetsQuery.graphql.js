/**
 * @flow
 * @relayHash bf24128a2491d81d65c840e680db7fe8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type assetsQueryVariables = {||};
export type assetsQueryResponse = {|
  +assets: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +ticker: string,
    +createAt: any,
  |}>
|};
export type assetsQuery = {|
  variables: assetsQueryVariables,
  response: assetsQueryResponse,
|};
*/


/*
query assetsQuery {
  assets {
    id
    name
    ticker
    createAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "assets",
    "storageKey": null,
    "args": null,
    "concreteType": "Asset",
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "createAt",
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
    "text": "query assetsQuery {\n  assets {\n    id\n    name\n    ticker\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '81e94334e4f8c39ea4c40d027ce2fad8';
module.exports = node;
