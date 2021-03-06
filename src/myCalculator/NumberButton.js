import React from 'react';

export default function NumberButton({name, areaName, onClickNumber}) {
    const style = {
        default: {
        gridArea: areaName,
        backgroundColor: "#3b3b3b",
        color: "#ffffff",
        border: "1px solid #3b3b3b",
        fontSize: "40px",
        borderRadius: "90px"
        },
        zero: {
            textAlign: "left",
            paddingLeft: "52px",
            borderRadius: "80px"
        }
    };

    let theStyle = style.default;
    if(areaName === "zero") theStyle = {...style.default, ...style.zero}

    return (
        <button
            style={theStyle}
            className="numButton"
            onClick={() => onClickNumber(name)}
        >
            {name}
        </button>
    );
}