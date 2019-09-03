/**
 * @flow
 * @relayHash 7743ef66bfbe51c49f03a77375d8e1fc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type paperQueryVariables = {|
  id: string
|};
export type paperQueryResponse = {|
  +paper: ?{|
    +id: string,
    +description: ?string,
    +excerpt: ?string,
    +title: string,
    +createAt: any,
  |}
|};
export type paperQuery = {|
  variables: paperQueryVariables,
  response: paperQueryResponse,
|};
*/


/*
query paperQuery(
  $id: ID!
) {
  paper(id: $id) {
    id
    description
    excerpt
    title
    createAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "paper",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Paper",
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
        "name": "description",
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
    "name": "paperQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "paperQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "paperQuery",
    "id": null,
    "text": "query paperQuery(\n  $id: ID!\n) {\n  paper(id: $id) {\n    id\n    description\n    excerpt\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b44d64919c908d2f5a0301998d2360bb';
module.exports = node;
