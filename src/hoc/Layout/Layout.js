import { useState } from 'react'
import Aux from '../Aux'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/NavigationItems/SideDrawer/SideDrawer'

const Layout = ({ children }) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const handleCloseSideDrawer = () => {
        setShowSideDrawer(false)
    }

    const handleToggleSideDrawer = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
        <Aux>
            <SideDrawer
                open={showSideDrawer}
                onCloseSideDrawer={handleCloseSideDrawer} />
            <Toolbar onToggleSideDrawer={handleToggleSideDrawer} />
            <main className={classes.Content}>
                {children}
            </main>
        </Aux>
    )
}

export default Layout;