import React, { Component } from 'react';
import { Consumer } from '../context';
import Contact from './Contact';
import context from 'react-bootstrap/esm/AccordionContext';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact data={contact} />
        ))}
      </div>
    );
  }
}

export default () => (
  <Consumer>{(Context) => <Contacts contacts={Context.contacts} />}</Consumer>
);

// import React, { useContext } from 'react';
// import { Consumer } from '../context';
// import Contact from './Contact';

// const Contacts = () => {
//   const { contacts } = useContext(Consumer);

//   return (
//     <div>
//       {contacts.map((contact) => (
//         <Contact
//           key={contact.id}
//           data={contact}
//           delete={() => this.deleteContactFromChild(contact.id)}
//         />
//       ))}
//     </div>
//   );
// };

// export default Contacts;
