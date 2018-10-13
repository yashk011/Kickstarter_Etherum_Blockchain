import React from 'react';
import {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign.js';
import  { Card , Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js';
import Contribute from '../../components/Contribute.js';
import {Link} from '../../routes.js';


class CampaignShow extends Component {

    static async getInitialProps(props) {

        const campaign = Campaign(props.query.address); // displays the address of the campaign instance we have deployed

        const summary = await campaign.methods.getSummary().call();
        console.log(summary);

        return {
            address : props.query.address,
            minimumContribution : summary[0],
            balance : summary[1],
            requestsCount : summary[2],
            approversCount : summary[3],
            manager :summary[4]
        };

    }

    renderCards() {

        const {
            balance, 
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [

            {
                header : manager ,
                meta : 'Address of Manager' ,
                description : 'The manager created this campaign and also create requests to withdraw money ',
                style: {overflowWrap: 'break-word'}
            }
            ,
            {
                header : minimumContribution ,
                meta : 'Minimum Contribution (Wei)' ,
                description : 'You must contribute this much minimum contribution to become a Contributor',
                style: {overflowWrap: 'break-word'}
            },
            {
                header : requestsCount ,
                meta : 'No. of Requests' ,
                description : 'Request count for given campaign , A request helps us to withdraw money from the contract',
                style: {overflowWrap: 'break-word'}
            },
            {
                header : approversCount ,
                meta : 'No of Approvals' ,
                description : 'Approval count gained till date , A majority count of approval approves the request ',
                style: {overflowWrap: 'break-word'}
            },
            {
                header :web3.utils.fromWei(balance , 'ether'),
                meta : 'Balance (ether) ' ,
                description : ' Balance left in the campaign to spend for request issued ',
                style: {overflowWrap: 'break-word'}
            }




        ];

        return <Card.Group items = {items} />;
    }


    render()
    {

        return (
            <Layout>
                
                <h1>Show Address</h1>
               
               <Grid>
                   <Grid.Row>
                            
                    <Grid.Column width= {10}>
                            
                            {this.renderCards()}
                           

                    </Grid.Column>

                    <Grid.Column width={6}>

                            <Contribute address = {this.props.address }> </Contribute>

                     </Grid.Column>



                   </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                        
                          <Link route ={ `/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>   
                            
                            
                        </Grid.Column>        
                         
                        
                    </Grid.Row> 

               </Grid>
               
            </Layout>
               
        

        );
    }
}
export default CampaignShow;
  