import Web3 from 'web3';


let web3;

// if we are in browser and using metamask 

if(typeof window !== "undefined")
{
    web3 = new Web3(window.web3.currentProvider); 

}
// if we are in server and we are not  using metamask 
else
{
    const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a40f08383f2044ecaf25ac5bf9a6b773'); 

    web3 = new Web3(provider);

}

export default web3;

//https://rinkeby.infura.io/v3/fcd6f7b51bd044adb25417faf10dd526