import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {title,url} ) => {
    return (
        <div className="card animate__animated animate__flipInX">
            <img src={url} alt={title}></img>
            <p> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired, //indico que solo acepta este tipo
    url: PropTypes.string.isRequired
}


/*
    1. Enzyme
    2. Enzyme to Json
    3. Debe de mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()
*/