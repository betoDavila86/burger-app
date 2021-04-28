import classes from './Button.module.css'

const button = ({ children, btnType, clicked }) => {
    return (
        <button
            onClick={clicked}
            className={[classes.Button, classes[btnType]].join(' ')}>{children}</button>
    );
}
export default button;