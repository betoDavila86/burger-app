import classes from './NavigationItem.module.css'

const navigationItem = ({ children, link, active }) => (
    <li className={classes.NavigationItem}>
        <a className={active ? classes.active : null} href={link}>{children}</a>
    </li>
)

export default navigationItem;