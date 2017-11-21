import React from 'react'
import { addStage } from './actions';
import Stage from './Stage';
import './sass/main.css';
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

class Board extends React.Component {
    render() {
        const { title, boardId, stages, tasks } = this.props;

        let listStages = null;
        if (stages)
            listStages = stages.map(stage => {
                return <Stage key={stage} title={stage}
                    tasks={ tasks == null ? null : tasks.filter ( task => task.stageId === stage.id )}
                />
            });
        return (
            <div>
                
                {/* <Header /> */}
                <div className="Board-container">
                    <Grid>

                        <Row>
                            <Col md={12}>
                                <div className="Board-column">
                                <form onSubmit = { (e) => {
                                    e.preventDefault();
                                    addStage (this.stageInputRef.value, boardId);
                                 }}>
                                        <input type="text" ref={e => this.stageInputRef = e} />
                                        <button type="submit" className="form__input" id="btnAddList" > save list</button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className="Board-column">
                                    {listStages}
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>

            </div>
        );
    }
}

export default Board;