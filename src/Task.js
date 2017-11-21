import React, {Component} from 'react'

const Task = ({title}) =>  (
         <div className = 'Task-container'>
            <div className='Task-title'>  {title} </div>
         </div>
) ;

export default Task