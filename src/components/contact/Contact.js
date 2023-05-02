import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import './contact.css';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactToggle: true,
  };

  showContact = () => {
    this.setState({
      showContactToggle: !this.state.showContactToggle,
    });
  };

  delete = (id, dispatch) => {
    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) =>
        dispatch({
          type: 'DELETE_CONTACT',
          payload: id,
        })
      )
      .catch((err) => console.log('aucun results'));
  };

  render() {
    const { id, name, phone, email } = this.props.data;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  {name}
                  <i
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.showContact('Zouhair')}
                    className="fa fa-sort-down"></i>
                  <i
                    onClick={() => this.delete(id, dispatch)}
                    style={{ color: 'red', float: 'right', cursor: 'pointer' }}
                    className="fa fa-times"
                    aria-hidden="true"></i>
                </h4>
                <div className="card-text">
                  {this.state.showContactToggle ? (
                    <ul className="list-group">
                      <li className="list-group-item">{phone}</li>
                      <li className="list-group-item">{email}</li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.defaultProps = {
  name: 'Aucun Name',
  tel: 'Aucun tel',
  email: 'Aucun email',
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tel: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  // delete: PropTypes.func.isRequired,
};

export default Contact;
