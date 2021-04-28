import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../../Navigation/NavigationItems/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = ({ onToggleSideDrawer }) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={onToggleSideDrawer}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;