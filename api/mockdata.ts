const mockPost = {
  id: '1',
  added: new Date(),
  author: 'Hingle McCringleberry',
  description:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  downloadUrl: 'https://cryptopapers.info/assets/pdf/verge.pdf',
  excerpt:
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  image: { url: 'https://cryptopapers.info/assets/covers/verge.png' },
  pubDate: {
    day: 20,
    month: 'January',
    year: 2014,
  },
  title: 'Verge Black Paper',
};

const mockPost1 = {
  id: '2',
  added: new Date(),
  author: 'Nicolas van Saberhagen',
  description:
    'CryptoNote is a privacy-centric protocol that serves as the basis of several cryptocurrencies, most notably Monero. The paper begins by outlining some of the drawbacks inherent in Bitcoin, namely the traceability of transactions, the proof-of-work function, a predetermined emission rate, hardcoded constants, and bulky scripts. It presents the CryptoNote protocol as a way to address many of these shortcomings.',
  downloadUrl: 'https://cryptopapers.info/assets/pdf/cryptonote.pdf',
  image: { url: 'https://cryptopapers.info/assets/covers/cryptonote.png' },
  pubDate: {
    day: 17,
    month: 'October',
    year: 2013,
  },
  title: 'CryptoNote v2.0',
};

const mockPost2 = {
  id: '3',
  added: new Date(),
  description:
    'This paper introduces Stox, "an open source, Ethereum based platform for prediction markets." It starts with an overview of prediction markets and their challenges. It then goes on to describe the Stox token (a Bancor ERC20 smart token), ecosystem (a global decentralized network), platform (where users can create and participate in prediction events), and app. The authors also provide a competitive analysis, roadmap, details on the token issuance, a list of team members, and an enumeration of some risk and technical considerations.',
  downloadUrl: 'https://cryptopapers.info/assets/pdf/stox.pdf',
  image: { url: 'https://cryptopapers.info/assets/covers/stox.png' },
  title: 'Stox Platform for Prediction Markets',
};

const mockPostMissingData = {
  id: '4',
  added: new Date(),
  downloadUrl: 'https://cryptopapers.info/assets/pdf/verge.pdf',
  title: 'Ghost Protocol',
};

const papers = [mockPost, mockPostMissingData, mockPost1, mockPost2];

module.exports = {
  db: { papers },
};
