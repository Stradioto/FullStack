import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <p>{props.course}</p>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
        <p>{props.npart.name}{props.npart.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part npart={props.parts[0]}/>
            <Part npart={props.parts[1]}/>
            <Part npart={props.parts[2]}/>
        </div>
    )
}

const Total = (props) => {
    return (
    <div>
            <p> Quantity of exercises {props.parts[0].exercises +
            props.parts[1].exercises + props.parts[2].exercises}
            </p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
    {
    name: 'Fundamentals of react ',exercises: 10},
    {
    name:'Using props to pass data ' ,exercises: 7},
    {
    name: 'State o a component ' ,exercises: 14}
    ]
    
    return(
        <div>
            <Header course= {course}/>
            <Content parts = {parts}/>
            <Total parts = {parts}/>
        </div>
    )   
    }
      
ReactDOM.render(<App />, document.getElementById('root'));