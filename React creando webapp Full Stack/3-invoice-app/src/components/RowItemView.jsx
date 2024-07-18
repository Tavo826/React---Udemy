import PropTypes from 'prop-types';

export const RowItemView = ({item, handlerDeleteItem}) => {

    return (
        <tr>
            <td>{item.product}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><button className='btn btn-danger'
                onClick={() => handlerDeleteItem(item.id)}>Eliminar</button></td>
        </tr>
    )
}

RowItemView.propTypes = {
    item: PropTypes.shape({
        product: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    }).isRequired
}