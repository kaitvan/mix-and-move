import React, { Component } from 'react';
import PlanForm from '../Components/PlanForm';

class Plan extends Component {
    // state = {
    //     currentTab: 0,
    // }

    // showTab(n: number): number {
    //     const x = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>;
    //     x[n].style.display = 'block';
    //     if (n == 0) {
    //         document.getElementById('prevBtn')?.style.display = "none";
    //     } else {
    //         document.getElementById('prevBtn')?.style.display = "inline";
    //     }
    //     if (n == (x.length - 1)) {
    //         document.getElementById('nextBtn')?.innerHTML = "Submit";
    //     } else {
    //         document.getElementById('nextBtn')?.innerHTML = <i className="fas fa-chevron-circle-right"></i>;
    //     }
    //     return 0;
    // }

    // nextTab(n: number): boolean {
    //     const {currentTab} = this.state;
    //     const x = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>;
    //     if (n == 1 && !this.validateForm()) return false;
    //     x[currentTab].style.display = "none";
    //     this.setState({currentTab: currentTab + n});
    //     if (currentTab >= x.length) {
    //         document.getElementById('planForm')?.submit();
    //         return false;
    //     }
    //     this.showTab(currentTab);
    //     return true;
    // }

    // validateForm(): boolean {
    //     const {currentTab} = this.state;
    //     let valid = true;
    //     const x = document.getElementsByClassName('tab');
    //     const y = x[currentTab].getElementsByTagName('input');
    //     for (let i = 0; i < y.length; i++) {
    //         if (y[i].value == '') {
    //             y[i].className += "invalid";
    //             valid = false;
    //         }
    //     }
    //     if (valid) {
    //         document.getElementsByClassName('step')[currentTab].className += "finish";
    //     }
    //     return valid;
    // }

    render(): JSX.Element {
        return (
            <div>
                <div className='bubble'>
                    <PlanForm/>

                {/* <Form className='text-align-center'>
                    <FormGroup tag="fieldset">
                        <Label for="time">How much time do you have?</Label>
                        <FormGroup check className='form-option-button'>
                            <Label check><Input type="radio" name="radio1" />10 minutes</Label>
                        </FormGroup>
                        <FormGroup check className='form-option-button'>
                            <Label check><Input type="radio" name="radio1" />20 minutes</Label>
                        </FormGroup >
                        <FormGroup check className='form-option-button'>
                            <Label check><Input type="radio" name="radio1" />30 minutes</Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup tag="fieldset">
                        <Label for="categories">What do you want to include?</Label>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Lower-Body
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Upper-Body
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Full-Body
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Core
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Cardio
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <Button>Go!</Button>
                </Form> */}
                    {/* <div className='plan-title'></div>
                    <div className='plan-options'></div>
                    <div className='plan-navigation'></div>
                    <form id="planForm">
                        <div className="tab">How much time do you have?
                            <input placeholder="First name..." name="fname"/>
                            <input placeholder="Last name..." name="lname"/>
                        </div>
                        <div className="tab">Contact Info:
                            <input placeholder="E-mail..." name="email"/>
                            <input placeholder="Phone..." name="phone"/>
                        </div>
                        <div className="tab">Birthday:
                            <p>Let's do this!</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Button type="button" id="prevBtn" onClick={this.nextTab(-1)}>Previous</Button>
                            <Button type="button" id="nextBtn" onClick={this.nextTab(1)}>Next</Button>
                        </div>
                    </form> */}
                </div>
            </div>
        )
    }
}

export default Plan;