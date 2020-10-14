import React from 'react';
import './requesterTask.css';

class requesterTask extends React.Component{
    constructor(props) {
        super(props);
    }
    handleTaskTypeChange  = (event) => {
        this.props.onTaskTypeChange(event.target.value);
    }

    render() {
        return(
            <div className='requesterTask'>
                <span>Select Task Type: </span>
                <input
                    className='inputGroup'
                    type='radio'
                    name='taskType'
                    value={0}
                    onChange={this.handleTaskTypeChange}
                /><label>Choice Task</label>
                <input
                    className='inputGroup'
                    type='radio'
                    name='taskType'
                    value={1}
                    onChange={this.handleTaskTypeChange}
                /><label>Decision-Making Task</label>
                <input
                    className='inputGroup'
                    type='radio'
                    name='taskType'
                    value={2}
                    onChange={this.handleTaskTypeChange}
                /><label>Sentende-Level Task</label>
            </div>
        )
    }
}

export default requesterTask;