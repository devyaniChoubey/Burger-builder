import { Component } from 'react';
import CheckOutSummary from '../../components/Orders/CheckOutSummary/CheckOutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class  Checkout extends Component {
 
    checkoutCancelledHandler =  () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
            <div>
                <CheckOutSummary ingredients={this.props.ing} 
                    checkoutCancelled={this.checkoutCancelledHandler} 
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ing : state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
