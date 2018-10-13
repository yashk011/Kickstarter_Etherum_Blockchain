const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const provider = new HDWalletProvider(

  'coral stamp practice wrist salad crisp skate shaft until involve pistol vote',
  'https://rinkeby.infura.io/v3/a40f08383f2044ecaf25ac5bf9a6b773'

);

const web3 = new Web3(provider);

const deploy  = async () => {

  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account : ' , accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) // create a new module of eth in web3 && create an instance of Contract and iniarlize with a
  .deploy({data : '0x' + compiledFactory.bytecode }) 
  .send({ from: accounts[0] , gas: '1000000' }); // no neeedt to specify the gas 

  console.log('Contract deployed to ' , result.options.address);

};

deploy();



/*
Nitin  · 2 months ago 
I have performed following steps to resolve the issue. This solution was mentioned in other post



1. UnhandledPromiseRejectionWarning: Error: The contract code couldn't be stored, please check your gas limit.

When you deploy the contract, it appears and failed. this is because your gas. Large gas doesn't resolve this issue.

// error codeconst result = await new web3.eth.Contract( JSON.parse(interface)) .deploy({ data: bytecode }) .send({   from: accounts[0],   gas: '2000000'});
// resolved codeconst result = await new web3.eth.Contract( JSON.parse(interface)) .deploy({ data: bytecode }) .send({ from: accounts[0] }); // remove 'gas'
But, when you test with ganache provider, the gas key should be specified.

Reference: https://hanezu.github.io/posts/Gas-Limit-Error-when-deploy-Truffle-project-on-Private-Network.html

2. UnhandledPromiseRejectionWarning: Error: invalid argument 0: json:  cannot unmarshal hex string without 0x prefix into Go struct field  CallArgs.data of type hexutil.Bytes

This also happened similar as first one. When you deploy your code in the ganache local test network, its fine.

But when you deploy other remote test network like rinkeby or ropsten, you should put the '0x' as prefix in bytecode of ABI.

// error codeconst lottery = await new web3.eth.Contract(JSON.parse(interface)) .deploy({ data: bytecode }) .send({ from: accounts[0], gas: '1000000' });
// resolved codeconst lottery = await new web3.eth.Contract(JSON.parse(interface)) .deploy({ data: '0x' + bytecode }) .send({ from: 


*/

