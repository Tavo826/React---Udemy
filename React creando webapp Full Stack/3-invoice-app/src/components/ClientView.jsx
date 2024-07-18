import PropTypes from 'prop-types';

export const ClientView = ({title, client}) => {

    const {
        name: clientName, 
        lastname, 
        address: {
            country, 
            city, 
            street, 
            number
        }
    } = client

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item">name: {clientName}</li>
                <li className="list-group-item">adress: {street} - {city}</li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    title: PropTypes.string.isRequired,
    client: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        address: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            street: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}