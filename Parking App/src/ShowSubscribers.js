import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';




// let rowLength = subscribersList.length;
class ShowSubscribers extends Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      vechileNo: '',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      
    }
  }


  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }
  
  
  

  render() {
    return (
      <div>
        <Header heading="Parking Directory" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>
          
          <table>
            <tr>
           <div className="grid-container heading-container">
           <th> <span className="grid-item name-id">S.No</span></th>
           <th> <span className="grid-item name-heading">Name</span></th>
            <th><span className="grid-item vechileNo-heading">Vechile No.</span></th>
            <th><span className="grid-item vechileNo-heading">Checkin Time</span></th>
            <th><span className="grid-item vechileNo-heading">CheckOut Time</span></th>
          </div>
          </tr>

          {
            this.props.subscribersList.map(sub => {
              return <tr key={sub.id}> <div key={sub.id} className="grid-container">
               <td> <span className="grid-item">{sub.id}</span></td>
               <td> <span className="grid-item">{sub.name}</span></td>
                <td><span className="grid-item">{sub.vechileNo}</span></td>
                <td><span className="grid-item">{sub.date} {sub.time}</span></td>
               <td> <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>CheckOut</button>
                </span></td>
              </div>
              </tr>
            })
          }
          </table>
        </div>
        <p> Total Number of Vechile Present: {}</p>
        
      
      </div>
      
    );
  
  }
}

export default ShowSubscribers;
