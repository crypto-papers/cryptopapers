// @flow

import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = (operation, variables) => {
  return fetch('http://localhost:4000/query', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
};

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
