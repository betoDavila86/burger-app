import classes from './SideDrawer.module.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems'
import Aux from '../../../../hoc/Aux'
import Backdrop from '../../../UI/Backdrop/Backdrop'

const sideDrawer = ({ open, onCloseSideDrawer }) => {
    let attachedClasses;
    open ? attachedClasses = [classes.SideDrawer, classes.Open] : attachedClasses = [classes.SideDrawer, classes.Close] ;
    return (
        <Aux>
            <Backdrop show={open} clicked={onCloseSideDrawer}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}


export default sideDrawer;