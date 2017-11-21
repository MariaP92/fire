import React, { Component } from 'react';
import './sass/main.css';
import Logo from './img/logo.png'
import SingUp from './SignUp'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import {signIn, signOut, signUp} from './actions';
import {connect} from 'redux-zero/react';

const LogIn = ({successLogin}) => {
    return (
        <div className="grid">
            {
                successLogin && <Redirect to="/mainboard" />
            }
            <form className="form login" onSubmit={
                e => {
                    e.preventDefault();
                    signIn(this.emailInputRef.value, this.passwordInputRef.value)
                }
            }>
                <div className="form__field">
                    <img src={Logo} className="logoImg" />
                </div>
                <div className="form__field">
                    <label htmlFor="login__username"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden">Correo electronico</span></label>
                    <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required  ref = { e => this.emailInputRef = e}/>
                </div>
                <div className="form__field">
                    <label htmlFor="login__password"><i className="fa fa-unlock-alt" aria-hidden="true"></i><span className="hidden">Password</span></label>
                    <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required ref = { e => this.passwordInputRef = e}/>
                </div>
                <div align="center">
                    <button type = "submit" className="btnLogin">LOG IN</button>
                </div>
            </form>
            <p className="text--center">Do not have an account? <NavLink to="/signup">Sign up now</NavLink></p>
        </div>
    );
}

const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(LogIn) ;