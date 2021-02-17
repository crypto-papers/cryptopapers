/**
 * @flow
 * @relayHash 3077a0bac9efab69d7e33ca771c62e55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type assetByTickerQueryVariables = {|
  ticker: string
|};
export type assetByTickerQueryResponse = {|
  +assetByTicker: ?{|
    +id: string,
    +logo: ?string,
    +name: string,
    +ticker: string,
    +createAt: any,
  |}
|};
export type assetByTickerQuery = {|
  variables: assetByTickerQueryVariables,
  response: assetByTickerQueryResponse,
|};
*/


/*
query assetByTickerQuery(
  $ticker: String!
) {
  assetByTicker(ticker: $ticker) {
    id
    logo
    name
    ticker
    createAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "ticker",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "assetByTicker",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ticker",
        "variableName": "ticker"
      }
    ],
    "concreteType": "Asset",
    "plural": false,
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
        "name": "logo",
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
    "name": "assetByTickerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "assetByTickerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "assetByTickerQuery",
    "id": null,
    "text": "query assetByTickerQuery(\n  $ticker: String!\n) {\n  assetByTicker(ticker: $ticker) {\n    id\n    logo\n    name\n    ticker\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '564f47ef3f4bfbfc9c1ccdc043d9c19e';
module.exports = node;
