import React, { Component } from 'react';
import { Form, Label, Input, FormGroup } from 'reactstrap';

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
                    <p>How much time do you have?</p>
                    <div>
                        <input type="radio" value="1" name="time" /> 10 minutes
                        <input type="radio" value="2" name="time" /> 20 minutes
                        <input type="radio" value="3" name="time" /> 30 minutes
                    </div>
                    <p>What do you want to include?</p>
                    <div>
                        <input type="checkbox" value="1" name="category" /> Lower-Body
                        <input type="checkbox" value="2" name="category" /> Upper-Body
                        <input type="checkbox" value="3" name="category" /> Full-Body
                        <input type="checkbox" value="4" name="category" /> Core
                        <input type="checkbox" value="5" name="category" /> Cardio
                    </div>
                </Form>
            </div>
        )
    }

}

export default PlanForm;