import { Component } from "react";
import Order from "../../components/Orders/Order";
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component{
    state = {
        orders :[],
        loading: true
    }
    componentDidMount(){
        axios.get("/orders.json").then(res => {
            let orders = []
            for(let key in res.data){
                orders.push({
                    ...res.data[key],
                    id : key
                })
            }
            this.setState({orders : orders ,loading : false})
        }).catch(err => {
            this.setState({loading : false})
        })
    }
    render(){
        return(
            <div style={{marginTop : 80}}>
              {this.state.orders.map(order => (
                  <Order key={order.id} ingredients={order.ingredients} price={order.price}/>
              ))}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);



// class Orders extends Component {
   
//     componentDidMount() {
//         axios.get('/orders.json')
//             .then(res => {
//                 const fetchedOrders = [];
//                 for (let key in res.data) {
//                     fetchedOrders.push({
//                         ...res.data[key],
//                         id: key
//                     });
//                 }
//                 this.setState({loading: false, orders: fetchedOrders});
//             })
//             .catch(err => {
//                 this.setState({loading: false});
//             });
//     }

//     render () {
//         return (
//             <div>
//                 {this.state.orders.map(order => (
//                     <Order 
//                         key={order.id}
//                         ingredients={order.ingredients}
//                         price={order.price} />
//                 ))}
//             </div>
//         );
//     }
// }

// export default withErrorHandler(Orders, axios);