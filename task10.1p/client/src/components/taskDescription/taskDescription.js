import React from 'react'
import './taskDescription.css';

class taskDescription extends React.Component{
    handleTaskTitleChange  = (event) => {
        this.props.onTaskTitleChange(event.target.value);
    }
    handleTaskDescriptionChange = (event) => {
        this.props.onTaskDescriptionChange(event.target.value);
    }
    handleTaskDateChange = (event) => {
        this.props.onTaskDateChange(event.target.value);
    }

    render() {
        return(
            <div className='taskDescription'>
                <form>
                    <div className='taskFormGroup'>
                        <div className='taskFormTitle'>
                            <label>Title</label>
                        </div>
                        <div className='taskFormInput'>
                            <input 
                                className='taskInputTitle'
                                type='text'
                                onChange={this.handleTaskTitleChange}/>
                        </div>
                    </div>
                        
                    <div className='taskFormGroup'>
                        <div className='taskFormTitle'>
                            <label>Description</label>
                        </div>
                        <div className='taskFormInput'>
                            <input 
                                className='taskInputTitle'
                                type='text'
                                onChange = {this.handleTaskDescriptionChange}/>
                        </div>
                        
                    </div>                       
                    <div className='taskFormGroup'>
                        <div className='taskFormTitle'>
                            <label>Expiry Date</label>
                        </div>
                        <div className='taskFormInput'>
                            <input 
                                type='date' 
                                className='taskInputDate'
                                onChange = {this.handleTaskDateChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default taskDescription;