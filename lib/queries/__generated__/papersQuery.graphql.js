/**
 * @flow
 * @relayHash f711cd33e7a271cb459b2079e859c9c4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type papersQueryVariables = {||};
export type papersQueryResponse = {|
  +papers: $ReadOnlyArray<{|
    +id: string,
    +excerpt: ?string,
    +title: string,
    +createAt: any,
  |}>
|};
export type papersQuery = {|
  variables: papersQueryVariables,
  response: papersQueryResponse,
|};
*/


/*
query papersQuery {
  papers {
    id
    excerpt
    title
    createAt
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "excerpt",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
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
    "name": "papersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "papersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "papersQuery",
    "id": null,
    "text": "query papersQuery {\n  papers {\n    id\n    excerpt\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2728eef279629f5d865ee82e1466c0c4';
module.exports = node;
