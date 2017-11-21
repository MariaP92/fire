import React, { Component } from 'react';
import './sass/main.css';
import Logo from './img/logo.png'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import {connect} from 'redux-zero/react'
import {signIn, signOut, signUp} from './actions'


const SignUp = ({successLogin}) => {
    return (
        <div className="grid">
             {
               successLogin  && <Redirect to = "/mainboard" />
            }
            <form className="form login" onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp (this.UserNameRef.value, this.LastNameRef.value, this.EmailNameRef.value, this.PassNameRef.value) 
               }
            }>
                <div className="form__field">
                    <img src={Logo} className="logoImg" />
                </div>
                <div className="form__field">
                    <label htmlFor="login__username"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden">Firstname</span></label>
                    <input type="text" name="username" className="form__input" placeholder="Username" required ref = {e => this.UserNameRef = e} />
                </div>
                <div className="form__field">
                    <label htmlFor="login__username"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden">Lastname</span></label>
                    <input type="text" name="username" className="form__input" placeholder="Lastname" required ref = {e => this.LastNameRef = e} />
                </div>
                <div className="form__field">
                    <label htmlFor="login__username"><i className="fa fa-envelope-o" aria-hidden="true"></i><span className="hidden">Email</span></label>
                    <input type="text" name="email" className="form__input btnEmail" placeholder="e-mail" required ref = {e => this.EmailNameRef = e} />
                </div>
                <div className="form__field">
                    <label htmlFor="login__username"><i className="fa fa-unlock-alt" aria-hidden="true"></i><span className="hidden">Password</span></label>
                    <input type="password" name="password" className="form__input" placeholder="Password" required ref = {e => this.PassNameRef = e} />
                </div>
                
                <label><input type="checkbox" name="terms" /> I agree with the <a href="#">Terms and Conditions</a>.</label>
                <input type="submit" value="Sign up" className="btn btn-primary pull-right" />
                <div className="clearfix"></div>
            </form>
        </div>
    );
}


const mapToProps = ({successLogin})  => ({successLogin}) 
export default connect(mapToProps)(SignUp) ;