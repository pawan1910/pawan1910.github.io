import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link } from 'react-router-dom';


const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
var timeAndDate = (date + ' ' + time);

class AddSusbscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            vechileNo: '',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
    }


    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', vechileNo: ' ', });
        this.props.history.push("/");
    }

    render() {

        const { name, vechileNo, date, time } = this.state;

        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/">
                        <button className="custom-btn">Back</button>
                    </Link>

                    <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name: </label><br />
                        <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor="vechileNo" className="label-control">VechileNo: </label><br />
                        <input id="vechileNo" type="text" className="input-control" name="vechileNo" onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor="date" className="label-control">Date: </label><br />
                        <input id="date" type="text" className="input-control" name="date" value={timeAndDate} onChange={this.inputChangedHandler} /><br /><br />

                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSusbscriber;