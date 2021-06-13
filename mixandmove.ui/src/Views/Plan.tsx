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
                </div>
            </div>
        )
    }
}

export default Plan;