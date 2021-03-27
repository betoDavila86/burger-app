import { useState } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        salad: 1,
        bacon: 1,
        cheese: 2,
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