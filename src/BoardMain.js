
import React from 'react'
import Task from './Task'
import Board from './Board'
import { addTask } from './actions'
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';



class BoardMain extends React.Component {
    render() {
        const { title, boardId, stages, tasks } = this.props;
        const boardCall = () => {
            return (
                <Board 
                    title={title}
                    boardId={boardId}
                    stages={stages}
                    tasks={tasks} />
            );
        }

        return (
            <div className="boardDIv">
                <h3> {title}</h3>

                <form>
                    <NavLink to='/board'>
                        <button> Go to Board </button>
                    </NavLink>
                </form>

            </div>
        )
    }
}
export default BoardMain;