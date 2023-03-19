import React from 'react';
import Hero from '../components/Hero';
import Client from '../components/Client';
import Primary from '../components/Primary';
import Services from '../components/Services';
import Additional from '../components/Additional';
import Team from '../components/Team';

const IndexPage = () => {
  return (
  <div>
    <Hero />
    <main id="main">
      <Client />
      <Primary />
      <Services />
      <Additional />
      <Team />
    </main>
  </div>
  )
}

export default IndexPage;