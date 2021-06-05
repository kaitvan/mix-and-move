import React, { Component } from 'react';
import SimpleModal from '../Components/SimpleModal';

class About extends Component {

    render(): JSX.Element {
        return (
            <div>
                <div className="bubble">
                    <h2 className="pb-3">ABOUT MIX + MOVE</h2>
                    <p>MIX + MOVE is designed to simplify at-home workouts. No weights. No excuses. Start by choosing a workout format, choose your focus areas, and then get moving!</p>
                    <p>Click on a workout format to learn more.</p>
                    <div className="d-flex justify-content-center">
                        <SimpleModal buttonLabel='Time-Based' className='mini-bubble'>
                            <h2>Time-Based</h2>
                            <p>Start a new exercise every minute on the minute. With 40 seconds of work and 20 seconds of rest, you will complete 10 exercises in every 10-minute set.</p>
                        </SimpleModal>
                        <SimpleModal buttonLabel='Rep-Based' className='mini-bubble'>
                            <h2>Rep-Based</h2>
                            <p>Start a new exercise every minute on the minute. Complete the reps required and then use the remainder of the minute to rest. Finish 10 exercises in every 10-minute set.</p>
                        </SimpleModal>
                        {/* <Button className="mini-bubble">Time-Based</Button>
                        <Button className="mini-bubble">Rep-Based</Button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;