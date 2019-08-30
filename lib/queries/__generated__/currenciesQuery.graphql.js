/**
 * @flow
 * @relayHash a108a0534de035ec15597fe1b6f94aa2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type currenciesQueryVariables = {||};
export type currenciesQueryResponse = {|
  +currencies: $ReadOnlyArray<{|
    +id: string,
    +name: string,
    +ticker: string,
  |}>
|};
export type currenciesQuery = {|
  variables: currenciesQueryVariables,
  response: currenciesQueryResponse,
|};
*/


/*
query currenciesQuery {
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
    "name": "currenciesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "currenciesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "currenciesQuery",
    "id": null,
    "text": "query currenciesQuery {\n  currencies {\n    id\n    name\n    ticker\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb9a69130931098c0d0e69cda0fc1362';
module.exports = node;
