import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const Checkout = (props) => {
    const [ingredients, setIngrediens] = useState({
        cheese: 0,
        bacon: 0,
        meat: 0,
        salad: 0
    })

    useEffect(() => {
        // extrancting info from the url params
        const query = new URLSearchParams(props.location.search);
        let newIngredients = {};
        for (let param of query.entries()) {
            // ['salad', '1']
            newIngredients[param[0]] = +param[1];
        }
        setIngrediens(newIngredients)
    }, [])

    const handleConfirmedCheckout = () => {
        props.history.replace('/checkout/contact');
    }

    const handleCanceledCheckout = () => {
        props.history.goBack();
    }
    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                onConfirmedCheckout={handleConfirmedCheckout}
                onCanceledCheckout={handleCanceledCheckout} />
        </div>
    );
}

export default withRouter(Checkout);