import React from 'react'

function ColorBlock(props) {
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Don't forget to export your component once you built it
export default ColorBlock