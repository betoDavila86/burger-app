import { useState, useEffect } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.4,
    meat: 1.5,
    bacon: 0.6
}

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState(null)
    const [price, setPrice] = useState(3);
    const [purchasable, setPurchasable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('/ingredients.json')
            .then(response => setIngredients(response.data))
            .catch(error => setError(true))
    }, [])

    const handleAddIngredient = (typeIngredient) => {
        const oldCount = ingredients[typeIngredient];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[typeIngredient] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[typeIngredient]
        const oldPrice = price;
        const newPrice = oldPrice + priceAddition;
        setIngredients(updatedIngredients);
        setPrice(Number(newPrice.toFixed(2)));
        handlePurchaseState(updatedIngredients);

    }

    const handleRemoveIngredient = (typeIngredient) => {
        const oldCount = ingredients[typeIngredient];
        const updatedCount = oldCount - 1;
        if (updatedCount === -1) return;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[typeIngredient] = updatedCount;
        const priceSubstraction = INGREDIENT_PRICES[typeIngredient]
        const oldPrice = price
        const newPrice = oldPrice - priceSubstraction;
        setIngredients(updatedIngredients);
        setPrice(Number(newPrice.toFixed(2)));
        handlePurchaseState(updatedIngredients);

    }
    // disabled buttons logic
    // { salad: true, meat: false, cheese: false, ... }
    const disabledInfo = {
        ...ingredients
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    const handlePurchaseState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(ingKey => updatedIngredients[ingKey])
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        // sum of added ingredients
        sum > 0 ? setPurchasable(true) : setPurchasable(false);
    }

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false);
    }

    const handleContinuePurchase = () => {
        setLoading(true);
        const order = {
            ingredients,
            price,
            customer: {
                name: 'Beto Dávila',
                address: {
                    street: 'Alguna Calle, 99',
                    zipCode: '99999',
                    country: 'Spain'
                },
                email: 'beto@mail.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                setLoading(false);
                setShowModal(false);
            })
            .catch(err => {
                setLoading(false);
                setShowModal(false);
            })

    }

    const handleCancelPurchase = () => {
        setShowModal(false);
    }
    let burger = error ? <p style={
        { textAlign: 'center', fontSize: '2rem', color: 'brown' }
    }>The ingredients cannot be shown</p> : <Spinner />

    if (ingredients)
        burger = (
            <Aux>
                <Burger ingredients={ingredients} />
                <BuildControls onAddIngredient={handleAddIngredient}
                    onRemoveIngredient={handleRemoveIngredient}
                    disabled={disabledInfo}
                    totalPrice={price}
                    purchasable={purchasable}
                    onShowModal={handleShowModal}
                />
            </Aux>)

    let orderSummary = (
        <OrderSummary
            ingredients={ingredients}
            onCancelPurchase={handleCancelPurchase}
            totalPrice={price}
            onContinuePurchase={handleContinuePurchase} />
    )

    return (
        <Aux>
            <Modal show={showModal} onHideModal={handleHideModal}>
                {loading && <Spinner />}
                {!loading && ingredients && orderSummary}
            </Modal>
            {burger}
        </Aux>
    );

}
export default WithErrorHandler(BurgerBuilder, axios);