
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux1';

const sideDrawer = (props) => {
    let attachedClasses = "SideDrawer Close";
    if(props.open){
         attachedClasses = "SideDrawer Open";
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className="Logo">
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}
export default sideDrawer;

