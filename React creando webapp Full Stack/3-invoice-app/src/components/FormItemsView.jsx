import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) => {

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemsState;

    useEffect(() => {
        console.log('El precio ha cambiado');
    }, [price])

    const onInputChange = ( { target } ) => {
        setFormItemsState({
            ...formItemsState,
            [target.name]: target.value
        });
    }

    const onInvoiceItemsSubmit = (formEvent) => {
        formEvent.preventDefault();

        if (!product || !price || !quantity) {
            alert('All fields are required');
            return;
        }

        if (isNaN(price) || isNaN(quantity)) {
            alert('Price and Quantity must be numbers');
            return;
        }

        console.log('Form Submitted');
        console.log(product, price, quantity);

        handler(formItemsState)

        setFormItemsState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (
        <>
            <form className="w-50" onSubmit={formEvent => onInvoiceItemsSubmit(formEvent)}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Product"
                    className="form-control my-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={price}
                    className="form-control my-3"
                    onChange={event => onInputChange(event)} />
                <input
                    type="text"
                    name="quantity"
                    placeholder="Quantity"
                    value={quantity}
                    className="form-control my-3"
                    onChange={onInputChange} />

                <button
                    type="submit"
                    className="btn btn-primary">
                    Add Item
                </button>
            </form>
        </>
    )
}