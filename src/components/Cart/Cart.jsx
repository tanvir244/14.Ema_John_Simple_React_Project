
const cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for (let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let Shipping = 0;
    if(total > 15){
        Shipping = 4.99;
    }
    else if(total > 0){
        Shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = (total + Shipping + tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {Shipping}</small></p>
            <p><small>Tax + Vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default cart;