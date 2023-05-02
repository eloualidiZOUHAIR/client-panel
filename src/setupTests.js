// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// import React, { useState, useEffect } from 'react';

// const ListeProduit = () => {
//   const [produits, setProduits] = useState([]);
//   const [totalPrix, setTotalPrix] = useState(0);

//   useEffect(() => {
//     fetch('http://serveur.com/produit')
//       .then((response) => response.json())
//       .then((data) => {
//         setProduits(data);
//         setTotalPrix(data.reduce((total, produit) => total + produit.prix, 0));
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       <h2>Liste des produits</h2>
//       <ul>
//         {produits.map((produit) => (
//           <li key={produit.code}>
//             {produit.libelle} - {produit.prix}€
//           </li>
//         ))}
//       </ul>
//       <p>Total : {totalPrix}€</p>
//     </div>
//   );
// };

// export default ListeProduit;

// import React, { useState } from 'react';

// const ChercheProduit = ({ onCherche }) => {
//   const [libelle, setLibelle] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     onCherche(libelle);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Rechercher un produit :
//         <input type="text" value={libelle} onChange={event => setLibelle(event.target.value)} />
//       </label>
//       <button type="submit">Rechercher</button>
//     </form>
//   );
// };

// export default ChercheProduit;
