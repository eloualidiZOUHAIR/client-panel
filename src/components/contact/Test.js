import React, { useState, useContext } from 'react';
import TestInputGroupe from '../helpers/testInputGroupe';
import { Consumer } from '../context';

const Test = () => {
  const [state, setState] = useState({
    name: '',
    tel: '',
    email: '',
    errors: {},
  });

  const { contacts, dispatch } = useContext(Consumer);

  const { name, tel, email, errors } = state;

  const onChangeInput = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (name === '') {
      setState({ ...state, errors: { name: 'the name is required' } });
      return;
    }
    if (tel === '') {
      setState({ ...state, errors: { tel: 'the tel is required' } });
      return;
    }
    if (email === '') {
      setState({ ...state, errors: { email: 'the email is required' } });
      return;
    }
    const id = contacts.length + 1;
    const newContact = { id, name, tel, email };
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    setState({ name: '', tel: '', email: '', error: {} });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-body">
            <div className="form-groupe">
              <h3>Add Contact</h3>
              <TestInputGroupe
                type="text"
                name="name"
                value={name}
                onChangeInput={onChangeInput}
                error={errors.name}
              />
              <br />
              <TestInputGroupe
                className="form-control"
                type="text"
                name="tel"
                value={tel}
                onChangeInput={onChangeInput}
                error={errors.tel}
              />
              <br />
              <TestInputGroupe
                className="form-control"
                type="text"
                name="email"
                value={email}
                onChangeInput={onChangeInput}
                error={errors.email}
              />
              <br />
            </div>
            <button
              className="btn btn-primary btn-block"
              /*disabled={!name || !tel || !email}*/
            >
              Add new contact
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Test;

// export default () => <Consumer>{(context) => <Test {...context} />}</Consumer>;
