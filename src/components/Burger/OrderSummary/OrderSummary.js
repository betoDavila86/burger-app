import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = ({ ingredients, onCancelPurchase, onContinuePurchase, totalPrice }) => {
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with these ingredients:</p>
            <ul>
                {Object.keys(ingredients).map(ingKey => {
                    return <li key={ingKey}><span style={{ textTransform: 'capitalize' }}>{ingKey}</span>: {ingredients[ingKey]}</li>
                })}
            </ul>
            <p>Continue to checkout?</p>
            <p>Total price: <strong>{totalPrice} €</strong></p>
            <Button clicked={onCancelPurchase} btnType='Danger'>CANCEL</Button>
            <Button clicked={onContinuePurchase} btnType='Success'>CONFIRM</Button>
        </Aux>
    )

}
export default orderSummary