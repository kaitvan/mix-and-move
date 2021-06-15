import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { addWorkout, addWorkoutDetails } from '../../Helpers/Data/WorkoutData';

type PlanFormState = {
    workoutTypeId: string,
    rounds: string,
    categories: string[]
}

class PlanForm extends Component {
    state: PlanFormState = {
        workoutTypeId: "",
        rounds: "",
        categories: [],
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name == 'rounds') {
            this.setState({ [e.target.name]: e.target.value })
        } else {
            let newCategories = [...this.state.categories, e.target.value];
            if (this.state.categories.includes(e.target.value)) {
                newCategories = newCategories.filter(category => category !== e.target.value);
            }
            this.setState({
                categories: newCategories
            });
        }

    }

    handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const workout = {
            startTime: new Date(),
            endTime: new Date(),
            userId: 1,
            workoutTypeId: 1,
        }
        addWorkout(workout);

        // take the categories from state --> get an array of 10 movementCategories
        // remove previously chosen movements
        // loop through the categories from state and pull one random movement from each category
        // create instance of workoutDetail in database
        // stop when you reach 10 total movements

        const { categories } = this.state;

        const tenCategories : number[] = []

        for (let i = 0; i < 10; i++) {
            if (i >= categories.length) {
              tenCategories.push(Number(categories[i % categories.length]))
            } else {
              tenCategories.push(Number(categories[i]))
            }
        }

        const movements : string[] = []

        tenCategories.forEach(category => )
    }

    render(): JSX.Element {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <p>How much time do you have?</p>
                        <div className="radio-options">
                            <input type="radio" value="1" name="rounds" onChange={this.handleChange} id="time1"/><label htmlFor="time1">10 minutes</label>
                            <input type="radio" value="2" name="rounds" onChange={this.handleChange} id="time2"/><label htmlFor="time2">20 minutes</label>
                            <input type="radio" value="3" name="rounds" onChange={this.handleChange} id="time3"/><label htmlFor="time3">30 minutes</label>
                        </div>
                    </div>
                    <div>
                        <p>What do you want to include?</p>
                        <div className="checkbox-options">
                            <input type="checkbox" value="1" name="categories" onChange={this.handleChange} id="category1"/><label htmlFor="category1">Lower-Body</label>
                            <input type="checkbox" value="2" name="categories" onChange={this.handleChange} id="category2"/><label htmlFor="category2">Upper-Body</label>
                            <input type="checkbox" value="3" name="categories" onChange={this.handleChange} id="category3"/><label htmlFor="category3">Full-Body</label>
                            <input type="checkbox" value="4" name="categories" onChange={this.handleChange} id="category4"/><label htmlFor="category4">Core</label>
                            <input type="checkbox" value="5" name="categories" onChange={this.handleChange} id="category5"/><label htmlFor="category5">Cardio</label>
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