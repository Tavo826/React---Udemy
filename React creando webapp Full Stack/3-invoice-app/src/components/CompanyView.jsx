import PropTypes from 'prop-types';

export const CompanyView = ({title, company}) => {

    return (
        <>
            <h3>{title}</h3>
            <ul className="list-group">
                <li className="list-group-item">name: {company.name}</li>
                <li className="list-group-item">adress: {company.fiscalNumber}</li>
            </ul>
        </>
    )
}

CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fiscalNumber: PropTypes.string.isRequired
    }).isRequired
}