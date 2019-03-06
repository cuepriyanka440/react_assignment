import React from 'react';
import DonutChart from 'react-donut-chart';
import { withFirebase } from '../Firebase';
import Messages from '../Messages';


class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <DonutChart
        data={[{
            label: 'Blockchain',
            value: 25
        },
        {
            label: 'IoT',
            value: 25,
        },
        {
          label: 'Game tech',
          value: 50,
        }
        ]} />
      </div>
    );
  }
}
export default Landing;
