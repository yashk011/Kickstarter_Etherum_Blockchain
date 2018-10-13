import React,{Component} from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes.js';
import {Button , Table} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';



class RequestIndex extends Component {


    static async getInitialProps(props) {

        const {address} =  props.query;


        const campaign = Campaign(address);

        const requestCount = await campaign.methods.getRequestsCount().call();

        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((elements , index) => {
                return campaign.methods.requests(index).call()
            })
        );            
        
        console.log(requests);

        return {address , requests , requestCount  , approversCount};

        console.log(approversCount);
    }

    renderRows() {

       return this.props.requests.map((request , index) => {
            return ( // downward communication trandfer v.v.v.v.imp 
                <RequestRow key={index}
                    id ={index}
                    request ={request}
                    address={this.props.address}
                    approversCount={this.props.approversCount}>

                </RequestRow>
            );
       });
    }

render() {

    const {Header , Row , HeaderCell , Body} = Table;

    return(   
        
        <Layout>

             <h3> Requests </h3>
             <Link route = {`/campaigns/${this.props.address}/requests/new`}>
        
                <a>
                    <Button primary floated="right" style={{marginBottom : '10px'}}> 
                        Add Request
                    </Button>
                            
                </a>
            </Link>

            <Table>
                <Header>
                    <Row>
                        <HeaderCell> ID</HeaderCell>
                        <HeaderCell> Description</HeaderCell>
                        <HeaderCell> Amount</HeaderCell>
                        <HeaderCell> Reciepient </HeaderCell>
                        <HeaderCell> Approval</HeaderCell>
                        <HeaderCell> Approve</HeaderCell>
                        <HeaderCell> Finalize</HeaderCell>
                    </Row>
                </Header>

                 <Body>

                    {this.renderRows()} 

                </Body>

            </Table>

            <div>
                Found {this.props.requestCount} requests 
            </div>

        </Layout>        

// this.renderRows() f=gives an error coz div is rendered inside table body !!!
       
       
    ); 

    
  }

}

export default RequestIndex;

