import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = ({ ingredients }) => {

    // console.log(ingredients)
    let transformedIngredients = Object.keys(ingredients).map(ingKey => {
        return [...Array(ingredients[ingKey])].map((_, index) =>
            <BurgerIngredient key={ingKey + index} type={ingKey} />)
    })
        .reduce((arr, el) => arr.concat(el), [])
    // console.log(Object.keys(ingredients).map(ingKey => [...Array(ingredients[ingKey])]))

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please, add ingredients to your burger!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;