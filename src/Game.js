import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        const arrayValue = this.randomQuestion();
        this.state = {
            value1: arrayValue[0],
            value2: arrayValue[1],
            value3: arrayValue[2],
            answer: arrayValue[3]
        }
    }

    randomQuestion = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const answer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return (value1, value2, value3, answer);
    };

    updateState = () => {
        this.setSSate(currState => ({
            value1: arrayValue[0],
            value2: arrayValue[1],
            value3: arrayValue[2],
            answer: arrayValue[3]
        }));
    };

    handleAnswer = event => {
        const newArrayValue = this.randomQuestion();
        const answerCorrect = this.x(event.target.name)
        this.setState(newArrayValue);
    }

    render() {
        return(
            <div>
                <div className="equation">
                    <p className="text">{`${value1} + ${value2} + ${value3} = ${answer}`}</p>
                </div>
                <button onClick={this.handleAnswer} name="true">True</button>
                <button onClick={this.handleAnswer} name="false">False</button>
            </div>
        );
    }
}

export default Game;