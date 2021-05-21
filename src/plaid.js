import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const CLIENT_ID = '60a82f4b2dd19f0010a1abd3'; 
const SECRET = '71f314bc1441658ce639e6e260ee0a';


const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': CLIENT_ID,
      'PLAID-SECRET': SECRET,
      'Plaid-Version': '2020-09-14',
    },
  },
});

const client = new PlaidApi(configuration);
console.log("client =", client);