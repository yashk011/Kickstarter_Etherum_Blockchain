import React from  'react';
import factory from '../ethereum/factory';
import {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import {Link} from '../routes';

class CampaignIndex extends Component
{
    static async getInitialProps(){

        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return {campaigns};

    }

    /* async componentDidMount(){

        const campaigns = await factory.methods.getDeployedCampaigns().call();
        console.log(campaigns);

    } */
    
    renderCampaigns(){

        const items = this.props.campaigns.map(address => {
            return {
                description :
                <Link route = {`/campaigns/${address}`}>
                    <a>
                        View Campaign
                    </a> 
                </Link> ,
                fluid : true ,
                header : address
            };
        });

        return <Card.Group items = {items} />;
    }

    render()
    {
        return( 
        <Layout>

             <div> 
                <h3> Open Camapigns </h3>

                <Link route = '/campaigns/new'>
                    <a>
                        <Button floated = "right" content = "Create Campaign" icon ="plus" primary></Button>
                    </a>
                </Link>       

                {this.renderCampaigns()} 

              </div> 

        </Layout> );
           
    }

}

// Necessary to export from index file

export default CampaignIndex;

/*

//functional component 

export default ()=> {
    return <h1> This is the camapign list page !!</h1>
}

*/