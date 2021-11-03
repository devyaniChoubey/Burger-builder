import {Component} from "react";
import Aux from '../../hoc/Aux1';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer';


class layout extends Component {
    state = {
        showSideDrawer : false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({
            showSideDrawer : false
        })
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer:  !prevState.showSideDrawer}
        })
    }
    render(){
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className="content">
                   {this.props.children}
                </main>
            </Aux>
        )
    }
    
   
}

export default layout;



                