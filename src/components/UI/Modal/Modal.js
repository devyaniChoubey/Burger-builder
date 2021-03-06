

import './Modal.css';
import Aux from '../../../hoc/Aux1';
import Backdrop from '../BackDrop/BackDrop';
import { Component } from 'react';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show != this.props.show || nextProps.children !== this.props.children
    }
    componentDidUpdate(){
        console.log("Component Will Update")
    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className="Modal" style={{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
    
}

export default Modal;