import React from 'react';
import './workerRequirement.css';

class workerRequirement extends React.Component{
    handleTaskWorkersChange = (event) => {
        this.props.onTaskWorkersChange(event.target.value);
    }
    handleTaskRewardChange = (event) => {
        this.props.onTaskRewardChange(event.target.value);
    }
    handleTaskNumberChange = (event) => {
        this.props.onTaskNumberChange(event.target.value);
    }

    render() {
        return(
            <div className='workerRequirement'>
                <form>
                    <div className='workerFormGroup'>
                        <div className='workerFormLabel'>
                            <span>Require Master Workers</span>
                        </div>
                        <div className='workerFormInput'>
                            <input 
                                className='workerRadioInput'
                                name='requiredWorker' 
                                type='radio'
                                value='yes'
                                onChange = {this.handleTaskWorkersChange}/>
                            <label>Yes</label>
                            <input 
                                className='workerRadioInput'
                                name='requiredWorker' 
                                type='radio'
                                value='no'
                                onChange = {this.handleTaskWorkersChange}/>
                            <label>No</label>
                        </div>
                    </div>
                    
                    <div className='workerFormGroup'>
                        <div className='workerFormLabel'>
                            <label>Reward per response</label>
                        </div>
                        <div className='workerFormInput'>
                            <input 
                                className='workerInput'
                                onChange = {this.handleTaskRewardChange}/>
                        </div>
                    
                    </div>                        
                    <div className='workerFormGroup'>
                        <div className='workerFormLabel'>
                            <label>Number of workers</label>
                        </div>
                        <div className='workerFormInput'>
                            <input 
                                className='workerInput'
                                type='number'
                                onChange = {this.handleTaskNumberChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default workerRequirement;