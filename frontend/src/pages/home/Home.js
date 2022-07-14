import React from 'react';
import Button from '../../shared/formElements/Button';

const Home = (props) => {
  return (
    <div className='heroSection'>
      <div className='heroContent'>
        <h2>CRM Salespipeline</h2>
        <h3>Convert leads into loyal clients.</h3>
        <p>
          Track leads. Convert them into clients. Manage your clients and keep
          them happy. Powerful, easy-to-use software to manage your clients.
          Check out the free demo.
        </p>
        <Button>Demo</Button>
      </div>
    </div>
  );
};

export default Home;
