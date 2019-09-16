/**
 * @flow
 * @relayHash 889b8a737c5ab77138ec4f3781a71722
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
    +latestVersion: ?string,
    +prettyId: ?number,
    +subTitle: ?string,
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
    "text": "query paperQuery(\n  $id: ID!\n) {\n  paper(id: $id) {\n    id\n    description\n    excerpt\n    latestVersion\n    prettyId\n    subTitle\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b161a529c07a7b1dce0d3d727ea939f';
module.exports = node;
