import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import { fetchCountries } from './api/';
import styles from './App.module.css';

import image from './images/image.jpeg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <h1> SELECT ANY COUNTRY NAME</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <h1>BAR REPRESENTATION</h1>
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;