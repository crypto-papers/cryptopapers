/**
 * @flow
 * @relayHash 7e0d6b620d3fc213476c8c6d85365888
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
    +subTitle: ?string,
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
    subTitle
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
        "name": "subTitle",
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
    "text": "query paperByPidQuery(\n  $prettyId: Int!\n) {\n  paperByPid(prettyId: $prettyId) {\n    id\n    description\n    excerpt\n    latestVersion\n    prettyId\n    subTitle\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bd787113110e27cbcf6c1c578cefeba';
module.exports = node;
