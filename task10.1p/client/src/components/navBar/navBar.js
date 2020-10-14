import React from 'react';
import './navBar.css';

class navBar extends React.Component{
    render() {
        return(
            <div className='navBar'>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default navBar;