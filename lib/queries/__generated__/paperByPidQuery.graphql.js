/**
 * @flow
 * @relayHash f8528a66dceab07a3c364c311c2ac090
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type paperByPidQueryVariables = {|
  prettyId: number
|};
export type paperByPidQueryResponse = {|
  +paperByPid: ?{|
    +id: string,
    +description: ?string,
    +excerpt: ?string,
    +latestVersion: ?string,
    +prettyId: ?number,
    +title: string,
    +createAt: any,
  |}
|};
export type paperByPidQuery = {|
  variables: paperByPidQueryVariables,
  response: paperByPidQueryResponse,
|};
*/


/*
query paperByPidQuery(
  $prettyId: Int!
) {
  paperByPid(prettyId: $prettyId) {
    id
    description
    excerpt
    latestVersion
    prettyId
    title
    createAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "prettyId",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "paperByPid",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "prettyId",
        "variableName": "prettyId"
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
        "name": "latestVersion",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "prettyId",
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
    "name": "paperByPidQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "paperByPidQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "paperByPidQuery",
    "id": null,
    "text": "query paperByPidQuery(\n  $prettyId: Int!\n) {\n  paperByPid(prettyId: $prettyId) {\n    id\n    description\n    excerpt\n    latestVersion\n    prettyId\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be5d0e20bc5452cc5453c09ea0b72a77';
module.exports = node;
