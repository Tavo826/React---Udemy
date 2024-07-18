import PropTypes from 'prop-types';
import {Title} from './components/Title';
import { UserDetail } from './components/UserDetail';

export function HelloWorldApp({user, id} /*props*/) {

    const name = 'sdfasdf'
    
    // <> == <Fragment>
    return (
        <> 
            <h1>Hello World</h1>
            <div>sisas - {name} - {user} - {id + 8}</div>
        </>
    );
}

export const Hello = ({user, id, title='defined'}) => {

    console.log(title); //defined

    

    return (
        <> 
            <h1>Hello World - {title}</h1>
            <div>sisas - {user.name} - {id + 8}</div>
            <div>{JSON.stringify(user)}</div>
        </>
    );

}

Hello.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}

export const HelloT = ({user, id, title}) => {

    console.log(title); //undefined    

    return (
        <> 
            <h1>Hello World - {title}</h1>
            <div>sisas - {user.name} - {id + 8}</div>
            <div>{JSON.stringify(user)}</div>
        </>
    );
}

HelloT.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}

HelloT.defaultProps = {
    title: 'default title'
}

export const HelloWorld = ({user, id, title}) => {

    console.log(title); //undefined    

    return (
        <> 
            <Title title={title}/>
            <UserDetail user={user} id={id}/>
            <div>{JSON.stringify(user)}</div>
        </>
    );
}