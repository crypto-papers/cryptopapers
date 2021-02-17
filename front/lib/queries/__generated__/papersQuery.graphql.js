/**
 * @flow
 * @relayHash 6d9f1da401d0e3ecb255619b8d793917
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type papersQueryVariables = {||};
export type papersQueryResponse = {|
  +papers: $ReadOnlyArray<{|
    +id: string,
    +description: ?string,
    +excerpt: ?string,
    +latestVersion: ?string,
    +prettyId: ?number,
    +subTitle: ?string,
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
    "text": "query papersQuery {\n  papers {\n    id\n    description\n    excerpt\n    latestVersion\n    prettyId\n    subTitle\n    title\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd07836ca85f4f82478a25837c576589b';
module.exports = node;
