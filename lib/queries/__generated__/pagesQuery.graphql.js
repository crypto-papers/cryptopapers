/**
 * @flow
 * @relayHash 671f13c918040885b7945a72fd429044
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pagesQueryVariables = {||};
export type pagesQueryResponse = {|
  +papers: $ReadOnlyArray<{|
    +id: string
  |}>
|};
export type pagesQuery = {|
  variables: pagesQueryVariables,
  response: pagesQueryResponse,
|};
*/


/*
query pagesQuery {
  papers {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "papers",
    "storageKey": null,
    "args": null,
    "concreteType": "Paper",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "pagesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "pagesQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "pagesQuery",
    "id": null,
    "text": "query pagesQuery {\n  papers {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fd4f4c424b99009c28761df284f9d9e2';
module.exports = node;
