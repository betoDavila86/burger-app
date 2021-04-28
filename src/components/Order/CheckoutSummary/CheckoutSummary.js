import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

const checkoutSummary = (props) => (
    <div className={classes.CheckoutSummary}>
        <h1>Enjoy your burger!</h1>
        <div style={{ width: '100%', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button
            btnType="Danger"
            clicked={props.onCanceledCheckout}>Cancel</Button>
        <Button
            btnType="Success"
            clicked={props.onConfirmedCheckout}>Confirm</Button>
    </div>
);

export default checkoutSummary;