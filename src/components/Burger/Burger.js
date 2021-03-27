import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {

    console.log(ingredients)
    const transformedIngredients = Object.keys(ingredients).map(ingKey => {
        return [...Array(ingredients[ingKey])].map((_, index) => <BurgerIngredient key={ingKey + index} type={ingKey} />)
    })
    console.log(Object.keys(ingredients).map(ingKey => [...Array(ingredients[ingKey])]))

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;