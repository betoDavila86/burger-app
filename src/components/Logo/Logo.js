import logoImg from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImg} alt='logo-burger' />
    </div>
);

export default logo;