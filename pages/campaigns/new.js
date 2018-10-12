import React , {Component} from 'react';
import Layout from '../../components/Layout.js';
import {Form, Button , Input , Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory.js'; // instance of factory contract using this well deploy capaign contract
import web3 from '../../ethereum/web3.js';
import {Link , Router } from '../../routes';

class CamapignNew extends Component
{
   

    state = {
        minimumContribution : '',
        errorMessage : '',
        loading:false
    };

    onSubmit  = async (event) => {

        this.setState({loading :true,
        errorMessage:''
    });

        event.preventDefault(); // prevent from submitting the form to backend

        try{        
            const accounts = await web3.eth.getAccounts()
    
            await factory.methods.createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });

            Router.pushRoute('/');
            
        }

        catch(err)
        {
            this.setState({
                errorMessage : err.message
            });
        }
      
        this.setState({loading:false});

    }; 

   render()
   {
    return (


        <Layout>
            
            <h3>  Create a new Campaign </h3>

            <Form onSubmit = {this.onSubmit} error= {!!this.state.errorMessage}>

                <Form.Field>
                    <label>Minimum Contribution</label>
                    <Input label ="Wei" 
                    labelPosition ="right"
                    placeholder='Enter amount'
                    value = {this.state.minimumContribution}
                    onChange = {event => this.setState(
                        {
                            minimumContribution : event.target.value
                        }
                    )}  />
                </Form.Field>

                <Message error header="Oops!" content = {this.state.errorMessage} >

                </Message>
                <Button loading = {this.state.loading} type='submit' primary>Submit</Button>

            </Form>
            


        </Layout>

    );

   }
   

}

export default CamapignNew;