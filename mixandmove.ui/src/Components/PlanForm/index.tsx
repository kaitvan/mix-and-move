import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { addWorkout, addWorkoutDetails } from '../../Helpers/Data/WorkoutData';
import { getMovementsByCategory } from '../../Helpers/Data/MovementData';
import { Movement } from '../../Helpers/Interfaces/MovementInterfaces';
import { Workout } from '../../Helpers/Interfaces/WorkoutInterfaces';
import { PlanProps } from '../../Helpers/Interfaces/PlanInterfaces';

type PlanFormState = {
    workoutTypeId: string,
    rounds: string,
    categories: string[]
    currentWorkoutId: number,
}

class PlanForm extends Component<PlanProps> {
    state: PlanFormState = {
        workoutTypeId: "",
        rounds: "",
        categories: [],
        currentWorkoutId: 0
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
        addWorkout(workout).then(async (response: Workout) => {
            this.setState({ currentWorkoutId: response.id});
            console.log('workoutIdOnPlanForm', this.state.currentWorkoutId);
            // get an array of movement arrays based on the categories selected
            const { categories, rounds } = this.state;
            const movementsByCategory: Movement[][] = await Promise.all(categories.map(async (categoryId): Promise<Movement[]> => {
                return await getMovementsByCategory(Number(categoryId));
            }))

            // loop through the array of movement arrays and select a random movement from each category until you reach 10 total movements
            const movements : Movement[] = []
            for (let i = 0; i < 10; i++) {
                if (i >= movementsByCategory.length) {
                    const elementToLookAt = i % movementsByCategory.length;
                    const randomIndex = Math.floor(Math.random() * movementsByCategory[elementToLookAt].length);
                    movements.push(movementsByCategory[elementToLookAt][randomIndex]);
                } else {
                    const randomIndex = Math.floor(Math.random() * movementsByCategory[i].length);
                    movements.push(movementsByCategory[i][randomIndex]);
                }
            }

            // post workoutDetails for each movement
            
            movements.forEach(movement => {
                const workoutDetail = {
                    workoutId: Number(response.id),
                    movementId: Number(movement.id),
                    seconds: 40 * Number(rounds),
                }
                addWorkoutDetails(workoutDetail);
            })

            this.props.history.push('/workout', { currentWorkoutId: this.state.currentWorkoutId })
        });
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

export default withRouter(PlanForm);