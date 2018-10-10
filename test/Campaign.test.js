const ganache = require('ganache-cli');
const assert = require('assert');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaign;
let campaignAddress;


beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data : compiledFactory.bytecode})
        .send({from : accounts[0] , gas : '1000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0] , gas : '1000000'
    });    

    let address = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = address[0];

    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface), 
                campaignAddress);

});

//console.log(campaign.methods.manager().call());

describe('Campaigns ', () => {

    it('should verify Campaign and CampaignFactory are deployed' , () => {

        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('should have manager as the one who deploys the contract Campaign' , async () => {

        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);

    });

    it('allows people to contribute money to campaign ' , async () => {

        // marked accounts[1] as contributor
        await campaign.methods.contribute().send({

                value: '200',
                from : accounts[1]

        });

        const isContributor =  await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);

    });

    it('requires some minimum contribution' , async () => {

        try {
            await campaign.methods.contribute().send({
                value:'5',
                from: accounts[1]
            });

        }

        catch(err)
        {


        }


    });

    it('allows a manger to create requests' , async () => {

        await campaign.methods.createRequest('Buy batteries' , '100' , accounts[2]).send({

            from : accounts[0],
            gas: '1000000'

        });

        const request = await campaign.methods.requests(0).call();
        assert.equal(request.description , 'Buy batteries');


    });

    it('processes requests' , async() =>{

        await campaign.methods.contribute().send({
            from : accounts[0],
            value : web3.utils.toWei('10' , 'ether')
        });

        await campaign.methods.createRequest('A' , web3.utils.toWei('5' , 'ether' ) , accounts[1])
            .send({
                from : accounts[0],
                gas : 1000000
            });


        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas : '1000000'
        });  
        
        await campaign.methods.finalizeRequest(0).send({
            from : accounts[0],
            gas :'1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance , 'ether');
        balance = parseFloat(balance);

        console.log(balance);

        assert(balance > 103);

    });
});