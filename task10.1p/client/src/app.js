import React from 'react';
import NavBar from './components/navBar/navBar';
import RequesterTask from './components/requesterTask/requesterTask';
import TaskDescription from './components/taskDescription/taskDescription';
import TaskSettingUp from './components/taskSettingUp/taskSettingUp';
import WorkerRequirement from './components/workerRequirement/workerRequirement';
import './app.css';

class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskType: null,
            title: null,
            description: null,
            date: null,
            setting: null,
            workers: null,
            reward: null,
            number: null
        }
    }
    handleTaskType = (value) => {
        this.setState({taskType: value});
    }
    handleTaskTitle = (value) => {
        this.setState({title: value});
    }
    handleTaskDescription = (value) => {
        this.setState({description: value});
    }
    handleTaskDate = (value) => {
        this.setState({date: value});
    }
    handleTaskSetting = (value) => {
        this.setState({setting: value});
    }
    handleTaskWorkers = (value) => {
        this.setState({workers: value});
    }
    handleTaskReward = (value) => {
        this.setState({reward: value});
    }
    handleTaskNumber = (value) => {
        this.setState({number: value});
    }
    handleOnClick = () => {
        fetch('http://localhost:8080/saveTask', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: this.state.taskType,
                title: this.state.title,
                description: this.state.description,
                expiryDate: this.state.date,
                setting: this.state.setting,
                workers: this.state.workers,
                reward: this.state.reward,
                number: this.state.number
            })
        })
        .then(response => response.json)
        .then(data => console.log(data))
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return(
            <div className='app'>
                <NavBar title='New Requester Task'/>
                <RequesterTask onTaskTypeChange = {this.handleTaskType}/>

                <NavBar title='Describe your task to Workers'/>
                <TaskDescription 
                    onTaskTitleChange = {this.handleTaskTitle}
                    onTaskDescriptionChange = {this.handleTaskDescription}
                    onTaskDateChange = {this.handleTaskDate}/>

                <NavBar title='Setting up your task'/>
                <TaskSettingUp 
                    taskType={this.state.taskType}
                    onTaskSettingChange = {this.handleTaskSetting}/>

                <NavBar title='Worker Requirement'/>
                <WorkerRequirement 
                    onTaskWorkersChange = {this.handleTaskWorkers}
                    onTaskRewardChange = {this.handleTaskReward}
                    onTaskNumberChange = {this.handleTaskNumber}/>

                <input
                    className='inputSave'
                    type='submit'
                    value='Save'
                    onClick={this.handleOnClick}/>
            </div>
        )
    }
}

export default app;