/**
 * @flow
 * @relayHash 0e278f3ff42ce74932e82cab95ef5019
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fileQueryVariables = {|
  id: string
|};
export type fileQueryResponse = {|
  +file: ?{|
    +id: string,
    +coverImage: ?string,
    +filename: string,
    +latest: ?boolean,
    +pageNum: ?number,
    +pubDate: ?any,
    +source: ?string,
    +version: ?string,
    +createAt: any,
  |}
|};
export type fileQuery = {|
  variables: fileQueryVariables,
  response: fileQueryResponse,
|};
*/


/*
query fileQuery(
  $id: ID!
) {
  file(id: $id) {
    id
    coverImage
    filename
    latest
    pageNum
    pubDate
    source
    version
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
    "name": "file",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "File",
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
        "name": "coverImage",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "filename",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "latest",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "pageNum",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "pubDate",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "source",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "version",
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
    "name": "fileQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "fileQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "fileQuery",
    "id": null,
    "text": "query fileQuery(\n  $id: ID!\n) {\n  file(id: $id) {\n    id\n    coverImage\n    filename\n    latest\n    pageNum\n    pubDate\n    source\n    version\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87fd05498e8ed32ff4c5cccd9c62d4d1';
module.exports = node;
