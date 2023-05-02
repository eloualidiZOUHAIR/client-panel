import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import TextInputGroupe from '../helpers/TextInputGroupe';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import context from 'react-bootstrap/esm/AccordionContext';

const AddContact = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    email: '',
    errors: {},
  });

  const navigate = useNavigate();

  const { contacts, dispatch } = useContext(Consumer);

  const { name, phone, email, errors } = state;

  const onChangeInput = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (name === '') {
      setState({ ...state, errors: { name: 'the name is required' } });
      return;
    }
    if (phone === '') {
      setState({ ...state, errors: { phone: 'the phone is required' } });
      return;
    }
    if (email === '') {
      setState({ ...state, errors: { email: 'the email is required' } });
      return;
    }

    const newContact = { name, phone, email };

    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then((res) => dispatch({ type: 'ADD_CONTACT', payload: res.data }))
      .catch((err) => console.log(err));

    setState({ name: '', phone: '', email: '', errors: {} });

    navigate('/');
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-body">
            <h3>Add contact</h3>
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

AddContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default AddContact;

// export default (props) => (
//   <Consumer>{(context) => <AddContact {...props} {...context} />}</Consumer>
// );

// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Consumer } from '../context';
// import TextInputGroupe from '../helpers/TextInputGroupe';

// class AddContact extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       tel: '',
//       email: '',
//       errors: {},
//     };
//   }

//   onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value });

//   submit = (dispatch, size, e) => {
//     e.preventDefault();
//     const { name, tel, email, errors } = this.state;
//     const id = size + 1;
//     const newContact = { id, name, tel, email };
//     if (name === '') {
//       this.setState({ name: 'the name is required' });
//       console.log(errors.name);
//     }
//     if (tel === '') {
//       this.setState({ tel: 'the tel is required' });
//     }
//     if (email === '') {
//       this.setState({ email: 'the email is required' });
//     }
//     dispatch({ type: 'ADD_CONTACT', payload: newContact });
//     this.setState({ name: '', tel: '', email: '' });
//   };
//   render() {
//     const { name, tel, email, errors } = this.state;
//     return (
//       <Consumer>
//         {({ dispatch, contacts }) => (
//           <div>
//             <form onSubmit={this.submit.bind(this, dispatch, contacts.length)}>
//               <div className="card">
//                 <div className="card-body">
//                   <h3>Add contact</h3>
//                   <TextInputGroupe
//                     label="name"
//                     type="text"
//                     name="name"
//                     value={name}
//                     changeInput={this.onChangeInput}
//                     error={errors.name}
//                     placeholder="Entrer nom"
//                   />
//                   <TextInputGroupe
//                     label="Phone"
//                     type="numbre"
//                     name="tel"
//                     value={tel}
//                     changeInput={this.onChangeInput}
//                     placeholder="Entrer tel"
//                   />
//                   <TextInputGroupe
//                     label="Email"
//                     type="email"
//                     name="email"
//                     value={email}
//                     changeInput={this.onChangeInput}
//                     placeholder="Entrer email"
//                   />
//                   <br />
//                   <button
//                     className="btn btn-primary btn-block"
//                     disabled={!name || !tel || !email}>
//                     Add new contact
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         )}
//       </Consumer>
//     );
//   }
// }

// AddContact.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// export default AddContact;
