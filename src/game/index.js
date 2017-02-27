import React from 'react'
import Layout from '../../components/Layout/Layout'

import CompanyDashboard from '../../components/Dashboard'
import Map from './components/Map'

class Logistics extends React.Component {
  render() {
    return (
      <Layout>

        <Map gridSize={5} />

        <CompanyDashboard />

        <h3>Client List - with smiley face </h3>
        
      </Layout>
    );
  }
}

export default Logistics;
