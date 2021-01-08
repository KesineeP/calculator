import React , { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import './StyleSheet.css';

const style = {}

const Calculator = () => {
    const [result, setResult] = useState("0");

    const numberList =  [["zero","0"],["one","1"],["two","2"],["three", "3"],["four", "4"],["five", "5"],["six","6"],["seven","7"], ["eight","8"], ["nine","9"], ["dot","."]];
    const lightgreyList =["c", "+/-", "%"];
    const orangeList = ["/", "x", "-", "+", "="];

    return (
        <div className="container">
            <p className="result">{result}</p>
            <div className="lightgrey">
                {lightgreyList.map((name, index) =>
                    <OperatorButton name={name} key={index} color="lightgrey" />
                    )}

            </div>
            <div className="orange">
                {orangeList.map((name, index) =>
                    <OperatorButton name={name} key={index} color="orange"/>
                )}
            </div>
            <div className="darkgrey">
                {numberList.map((num, index) =>
                <NumberButton name={num[1]} areaName={num[0]} key={index} />
                )}
            </div>
        </div>
    );

}

export default Calculator;