import React from 'react'
import { addStage, addBoard } from './actions';
import './Board.css';
import Board from "./Board"
import BoardMain from './BoardMain';
import Logo from "./img/logo.png"
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from "redux-zero/react";
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { signOut } from './actions';


const Header = () => {
    return (

        <div className="cabecera">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <div className="mensaje">
                            <img className="logoCabecera" src={Logo} />
                        </div>
                    </div>
                    <div className="col-md-2">

                        <button className="logOut" onClick={signOut}>SignOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MainBoard = ({ successLogin, user, boards, stages, tasks }) => {

    let listBoard = null;
    if (boards) {
        listBoard = boards.map(board => {
            return (
                
                    <Board key={board.id}
                        title={board.title}
                        boardId={board.id}
                        stages={stages == null ? null :
                            stages.filter(e => e.board_id == board.id)}
                        tasks={tasks} />
                
            );
        });
    }
    return (
        <div>
            {
                !successLogin && <Redirect to="/login" />
            }
            <Header />
            <div className="Board-container">
                <Grid>

                    <Row>
                        <Col md={12}>
                            <div className="Board-column">
                                <form onSubmit={ e => {
                                    e.preventDefault();
                                    addBoard(this.boardInputRef.value, user.id);
                                }}>
                                    <input type="text" ref={e => this.boardInputRef = e} />
                                    <button type="submit" className="form__input"  > save Board</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="Board-column">
                                {listBoard}
                            </div>
                        </Col>
                    </Row>

                </Grid>
            </div>

        </div>
    );
}

const mapToProps = ({successLogin, user, boards, stages, tasks})  => ({successLogin, user, boards, stages, tasks})
export default connect(mapToProps)(MainBoard) 