import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'


const modal = ({ children, show, onHideModal }) => (
    <Aux>
        <Backdrop show={show} clicked={onHideModal} />
        <div className={classes.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
            {children}
        </div>
    </Aux>
)

export default modal;