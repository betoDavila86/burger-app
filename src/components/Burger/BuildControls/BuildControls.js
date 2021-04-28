import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
]

const buildControls = ({ onAddIngredient, onRemoveIngredient, disabled, totalPrice, purchasable, onShowModal }) => (
    <div className={classes.BuildControls}>
        <p>Total: <strong>{totalPrice} €</strong></p>
        {controls.map(control => <BuildControl
            removed={() => onRemoveIngredient(control.type)}
            added={() => onAddIngredient(control.type)}
            key={control.label}
            label={control.label}
            disabled={disabled[control.type]} />)}
        <button onClick={onShowModal} className={classes.OrderButton}
            disabled={!purchasable}>Order now!</button>
    </div>
)

export default buildControls;