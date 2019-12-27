import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <p>{props.course}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>{props.c1}</p>
            <p>{props.c2}</p>
            <p>{props.c3}</p>
        </div>
    )
}

const Total = (props) =>{
    return(
        <div>
            <p>{props.total}</p>
        </div>
    )
}

const App = () => {
    const course = "Half Stack application development"
    const part1 = 'Fundamentals of react '
    const exercises1 = 10
    const part2 = 'Using props to pass data '
    const exercises2 = 7
    const part3 = 'State o a component '
    const exercises3 = 14
    
    return(
        <div>
            <Header course = {course}/>
            <Content c1 = {part1 + exercises1}/>
            <Content c2 = {part2 + exercises2}/>
            <Content c3 = {part3 + exercises3}/>
            <Total total = {exercises1 + exercises2 + exercises3}/>
        </div>
    )
    }
      
ReactDOM.render(<App />, document.getElementById('root'));