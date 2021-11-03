import { Component } from 'react';
import Aux from '../../hoc/Aux1';
import {connect} from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import axios from '../../axios-orders';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/action';

class BurgerBuilder extends Component{
    state = {
        purchasing: false,
        loading : false,
        error : null
    }

    componentDidMount (){
        console.log(this.props);
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0 ;
    }


    purchaseHandler = () => {
        this.setState({purchasing : true})
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }
    purchasecontinueHandler = () => {
        this.props.history.push( '/checkout')
    }

        

    render(){
        const disabledInfo = {...this.props.ing}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
        let orderSummary;
        if(this.props.ing){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ing}/>
                    <BuildControls
                        ingredientAdded = {this.props.onIndredientAdded}
                        ingredientRemoved = {this.props.onIndredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ing)}
                        price={this.props.pr}
                        ordered={this.purchaseHandler}
                    />
                </Aux>
            )
            orderSummary =  <OrderSummary  ingredients={this.props.ing} purchaseCancelled={this.purchaseCancelHandler} purchaseContinued={this.purchasecontinueHandler}/>
    
        }
        if(this.state.loading) orderSummary = <Spinner/>
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return{
        ing : state.ingredients,
        pr : state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIndredientAdded : (ingName) => dispatch({type : actionTypes.ADD_INGREDIENT, ingredientName : ingName}),
        onIndredientRemoved : (ingName) => dispatch({type : actionTypes.REMOVE_INGREDIENT ,ingredientName : ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));

