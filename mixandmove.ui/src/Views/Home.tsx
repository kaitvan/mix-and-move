import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(): JSX.Element {
        return (
            <div>
                <div className="centered">
                    <Link className='midi-bubble' to="/plan">
                        <h3>Time-Based</h3>
                    </Link>
                    <Link className='midi-bubble' to="/plan">
                        <h3>Rep-Based</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;