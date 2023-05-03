import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import TextInputGroupe from '../helpers/TextInputGroupe';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import context from 'react-bootstrap/esm/AccordionContext';

const EditContact = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    errors: {},
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users/' + id
        );

        const { name, email, phone } = res.data;

        setState({
          name,
          email,
          phone,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  const navigate = useNavigate();

  const { contacts, dispatch } = useContext(Consumer);

  const { name, phone, email } = state;

  const onChangeInput = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (name === '') {
      setErrors({ errors: { name: 'the name is required' } });
      return;
    }
    if (phone === '') {
      setErrors({ errors: { phone: 'the phone is required' } });
      return;
    }
    if (email === '') {
      setErrors({ errors: { email: 'the email is required' } });
      return;
    }

    const upContact = { name, phone, email };

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        upContact
      );
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }

    setState({ name: '', phone: '', email: '', errors: {} });

    navigate('/');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-body">
            <h3>Edit contact</h3>
            <TextInputGroupe
              label="name"
              type="text"
              name="name"
              value={name}
              changeInput={onChangeInput}
              error={errors.name}
              placeholder="Entrer nom"
            />
            <TextInputGroupe
              label="Phone"
              type="numbre"
              name="phone"
              value={phone}
              changeInput={onChangeInput}
              error={errors.phone}
              placeholder="Entrer phone"
            />
            <TextInputGroupe
              label="Email"
              type="email"
              name="email"
              value={email}
              changeInput={onChangeInput}
              error={errors.email}
              placeholder="Entrer email"
            />
            <br />
            <button
              className="btn btn-info btn-block"
              /*disabled={!name || !tel || !email}*/
            >
              Edit contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

EditContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default EditContact;
