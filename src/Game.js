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

    updateState = newArrayValue => {
        this.setState(currState => ({
            value1: newArrayValue[0],
            value2: newArrayValue[1],
            value3: newArrayValue[2],
            answer: newArrayValue[3]
        }));
    };

    handleAnswer = event => {
        const newArrayValue = this.randomQuestion();
        const answerCorrect = this.checkAnswer(event.target.name)
        this.updateState(newArrayValue);
        this.props.handleAnswer(answerCorrect);
    }

    checkAnswer(getAns) {
        const {value1, value2, value3, answer} = this.state;
        const correctAns = value1 + value2 + value3;

        return(
            (correctAns === answer && getAns === "true") || (correctAns !== answer && getAns === "false")
        );
    }

    render() {
        const {value1, value2, value3, answer} = this.state;
        console.log('====================================');
        console.log(value1, value2, value3, answer);
        console.log('====================================');
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