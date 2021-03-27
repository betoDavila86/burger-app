import { useState } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 1,
        meat: 1
    })

    return (
        <Aux>
            <Burger ingredients={ingredients} />
            <div>Build Controls</div>
        </Aux>
    );

}
export default BurgerBuilder;