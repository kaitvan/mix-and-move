import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';

class PlanForm extends Component {
    state = {
        value: '',
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value : e.target.value })
    }

    render(): JSX.Element {
        return (
            <div>
                <Form>
                    <div>
                        <p>How much time do you have?</p>
                        <div className="radio-options">
                            <input type="radio" value="1" name="time" id="time1"/><label htmlFor="time1">10 minutes</label>
                            <input type="radio" value="2" name="time" id="time2"/><label htmlFor="time2">20 minutes</label>
                            <input type="radio" value="3" name="time" id="time3"/><label htmlFor="time3">30 minutes</label>
                        </div>
                    </div>
                    <div>
                        <p>What do you want to include?</p>
                        <div className="checkbox-options">
                            <input type="checkbox" value="1" name="category" id="category1"/><label htmlFor="category1">Lower-Body</label>
                            <input type="checkbox" value="2" name="category" id="category2"/><label htmlFor="category2">Upper-Body</label>
                            <input type="checkbox" value="3" name="category" id="category3"/><label htmlFor="category3">Full-Body</label>
                            <input type="checkbox" value="4" name="category" id="category4"/><label htmlFor="category4">Core</label>
                            <input type="checkbox" value="5" name="category" id="category5"/><label htmlFor="category5">Cardio</label>
                        </div>
                    </div>
                    <p>Let's do this!</p>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }

}

export default PlanForm;