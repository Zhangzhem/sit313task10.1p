import React from 'react';
import './taskSettingUp.css';

class taskSettingUp extends React.Component{
    handleTaskSettingChange = (event) => {
        this.props.onTaskSettingChange(event.target.value);
    }

    render() {
        if(this.props.taskType == 0) {
            return(
                <div className='taskSettingUp'>  
                    <div className='taskFormLabel'>
                        <label>Worker option:</label>
                    </div>
                    <div className='taskFormInput'>
                        <select 
                            className='taskSelectInput'
                            onChange = {this.handleTaskSettingChange}>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                            <option>four</option>
                            <option>five</option>
                        </select>
                    </div>
                </div>
            )
        } else if(this.props.taskType == 1) {
            return(
                <div class='taskSettingUp'>
                    <div class='taskFormLabel'>
                        <span>Provide decision:</span>
                    </div>
                    <div className='taskFormInput'>
                        <input 
                            className='taskRadioInput'
                            name='taskDecision'
                            type='radio'
                            onChange = {this.handleTaskSettingChange}
                        /><label>True</label>
                        <input
                            className='taskRadioInput'
                            name='taskDecision'
                            type='radio'
                            onChange = {this.handleTaskSettingChange}
                        /><label>False</label>
                    </div>
                </div>
            )
        } else if(this.props.taskType == 2) {
            return(
                <div className='taskSettingUp'>
                    <div className='taskFormLabel'>
                        <label>Provide Sentences:</label>
                    </div>
                    <div className='taskFormInput'>
                        <input 
                            className='taskInput' 
                            type='text'
                            onChange = {this.handleTaskSettingChange}/>
                    </div>
                </div>
            )
        } else {
            return(
                <div className='defaultSettintUp'>
                    <p>Please choose your task type</p>
                </div>
            )
        }
    }
}

export default taskSettingUp;