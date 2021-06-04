import React, { Component } from 'react';

class About extends Component {
    render(): JSX.Element {
        return (
            <div>
                <div className="bubble">
                    <h2 className="pb-3">ABOUT MIX + MOVE</h2>
                    <p>MIX + MOVE is designed to simplify at-home workouts. No weights. No excuses. Start by choosing a workout format, choose your focus areas, and then get moving!</p>
                    <p>Click on a workout format to learn more.</p>
                    <div className="d-flex justify-content-center">
                        <button className="mini-bubble">Time-Based</button>
                        <button className="mini-bubble">Rep-Based</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;