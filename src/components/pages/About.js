import React from 'react';
import { useParams } from 'react-router-dom';

const About = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h3>About</h3>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        exercitationem aliquid ab corrupti mollitia, ipsa deleniti fugiat unde
        est nesciunt!
      </p>
    </div>
  );
};

export default About;
