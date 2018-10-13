import React,{Component} from 'react';
import {Label , Input , Button, FormField , Form, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3.js';
import {Router} from '../routes';


class Contribute extends Component 
{


    state = {

        value: '',
        errorMessage :'' ,
        loading : false 

    };

    onSubmit = async (event) => {

        event.preventDefault();
        const campaign = Campaign(this.props.address);

        this.setState({loading : true ,errorMessage: '' });


        try{

            const accounts = await web3.eth.getAccounts();

            await campaign.methods.contribute().send({

                from: accounts[0],
                value : web3.utils.toWei(this.state.value , 'ether')

            });   

            Router.replaceRoute('/campaigns/'+ this.props.address);

        }

        catch(err)
        {
            this.setState({errorMessage:err.message});
        }

        this.setState({value: '' , loading:false});

    };



    render(){

        return (

            <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>

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

                <Message error header ="Oops!!" content= {this.state.errorMessage} ></Message>
                 <Button primary loading={this.state.loading}>
                        Contribute!
                    </Button>


           </Form>


        );
        


      
    }


}


export default Contribute;
