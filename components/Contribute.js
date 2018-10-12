import React,{Component} from 'react';
import {Label , Input , Button, FormField , Form} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3.js';
import {Router} from '../routes';


class Contribute extends Component 
{


    state = {

        value: ''

    };

    onSubmit = async (event) => {

        event.preventDefault();
        const campaign = Campaign(this.props.address);


        try{

            const accounts = await web3.eth.getAccounts();

            campaign.methods.contribute().send({

                from: accounts[0],
                value : web3.utils.toWei(this.state.value , 'ether')

            });   

            Router.replaceRoute('/campaigns/'+ this.props.address);

        }

        catch(err)
        {

        }

    };



    render(){

        return (

            <Form onSubmit = {this.onSubmit} >

                <FormField>

                    <Label>
                        Enter Amount to contribute
                    </Label>
                    
                    <Input onChange = {event => this.setState({value : event.target.value})} 
                     value = {this.state.value}
                     label='ether'
                     labelPosition='right'>      
                    </Input >

                </FormField>

                 <Button primary>
                        Contribute!
                    </Button>


           </Form>


        );
        


      
    }


}


export default Contribute;
