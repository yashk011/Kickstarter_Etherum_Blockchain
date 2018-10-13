import React , {Component} from 'react';
import {Form , Button , Message, Input , } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3.js';
import {Link , Router} from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component  {


    state = {

        value  : '',
        receipient : '' ,
        description : '',
        loading : false,
        errorMessage : ''

    };

    static async getInitialProps(props) {

        const {address} = props.query;

        return {address};

    }

    onSubmit = async (event) => {

        event.preventDefault();

        const campaign =  Campaign(this.props.address);
        const {description , value , receipient} = this.state;


        this.setState({loading : true , errorMessage : ''});

        try {

            const accounts = await web3.eth.getAccounts();

            await campaign.methods.createRequest(description , web3.utils.toWei(value , 'ether') , receipient) .send({

                from:accounts[0]

            });

            Router.pushRoute(`/campaigns/${this.props.address}/requests}`);

        }

        catch(err)
        {
                this.setState({errorMessage: err.message})
        }

        this.setState({loading : false});

 
    }


    render()
    {
        return (

            <Layout>

                <Link route = {`/campaigns/${this.props.address}/requests`}>
                    <a>
                        Back
                    </a>

                
                </Link>

                <h3>Create a Request</h3>
                
                <Form onSubmit = {this.onSubmit} error= {!!this.state.errorMessage} >
                 <Form.Field>

                    <label>Description</label>
                    <Input
                    value = {this.state.description} 
                    onChange = {event => this.setState({description : event.target.value})}>
                    </Input>
                </Form.Field>

                <Form.Field>

                    <label>Amount in Ether</label>
                    <Input
                    value = {this.state.value} 
                    onChange = {event => this.setState({value : event.target.value})}>
                    </Input>

                </Form.Field>

                <Form.Field>

                    <label>Receipient</label>
                    <Input
                    value= {this.state.receipient} 
                    onChange= {event => this.setState({receipient : event.target.value})}>
                    </Input>
                </Form.Field>

            <Message error header="Oops" content={this.state.errorMessage}>

            </Message>

            <Button primary type='submit' loading = {this.state.loading}>

              Create Request !

            </Button>

            </Form>




            </Layout>
            
            
       );
    }
}

export default RequestNew;
