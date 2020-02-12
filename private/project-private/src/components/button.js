import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button type="button" class={'btn btn-' + props.anjir}><i className={'fa fa-' + props.icons} />{props.label}</button>
        </div>
    )
}

export default Button