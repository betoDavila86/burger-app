import classes from './Backdrop.module.css'

const backdrop = ({ show, clicked }) => {
    return (
        show ? <div onClick={clicked} className={classes.Backdrop}></div> : null
    );
}
export default backdrop;