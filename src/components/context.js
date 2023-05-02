import React, { Component, createContext, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

//Le contexte est un mécanisme de React qui permet de partager des données entre différents composants, même s'ils ne sont pas directement reliés dans la hiérarchie des composants.
const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state.contacts;
  }
};

class Provider extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Zouhair', phone: '0677997289', email: 'z@z.com' },
      { id: 2, name: 'Eren', phone: '0662364084', email: 'e@e.com' },
      { id: 3, name: 'Naruto', phone: '0613483379', email: 'n@n.com' },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      //* La méthode then() est ensuite utilisée pour traiter la réponse renvoyée par la requête. Cette méthode prend une fonction de rappel qui est exécutée lorsque la réponse est disponible
      .then((res) =>
        this.setState({
          contacts: res.data,
        })
      )
      //* Si la requête échoue, la méthode catch() est appelée pour gérer l'erreur en consignant simplement l'erreur dans la console.
      .catch((err) => console.log(err));
  }

  render() {
    return (
      //Provider : un composant qui peut être utilisé pour envelopper une partie de l'arbre des composants et fournir une valeur de contexte à tous les composants enfants de cet arbre.
      <Context.Provider
        value={{
          contacts: this.state.contacts,
          dispatch: this.state.dispatch,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export const Consumer = Context.Consumer;
const { Consumer } = Context;

export { Provider, Consumer };

// reducer.prototype = {
//   action: PropTypes.shape({
//     type: PropTypes.string.isRequired,
//     payload: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       tel: PropTypes.number.isRequired,
//       email: PropTypes.string.isRequired,
//     }),
//   }),
// };
