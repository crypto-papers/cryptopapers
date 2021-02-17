/**
 * @flow
 * @relayHash 4f515f13269e40f42a5d7f59b612e8df
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type featureLatestQueryVariables = {||};
export type featureLatestQueryResponse = {|
  +featureLatest: ?{|
    +id: string,
    +paper: string,
    +promoted: ?boolean,
    +sponsor: ?string,
    +createAt: any,
  |}
|};
export type featureLatestQuery = {|
  variables: featureLatestQueryVariables,
  response: featureLatestQueryResponse,
|};
*/


/*
query featureLatestQuery {
  featureLatest {
    id
    paper
    promoted
    sponsor
    createAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "featureLatest",
    "storageKey": null,
    "args": null,
    "concreteType": "Feature",
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
        "name": "paper",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "promoted",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "sponsor",
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
    "name": "featureLatestQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "featureLatestQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "featureLatestQuery",
    "id": null,
    "text": "query featureLatestQuery {\n  featureLatest {\n    id\n    paper\n    promoted\n    sponsor\n    createAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd50748301e3e65065aaa15ccb8cf735b';
module.exports = node;
