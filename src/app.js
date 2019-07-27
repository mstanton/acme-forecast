import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {notificationForecastSummaryUtil} from './utils/notification-forecast-summary'
import ForecastList from './components/forecast-list/forecast-list'
import './main.scss';
class App extends Component {
	state = {
		data: {}
	}
	componentDidMount() {
		this.getWeatherData();
	}

	// usually do this with redux or some other state management framework
	// but a fetch will suffice for this exercise
	getWeatherData = () => {
		return fetch(
			'http://api.openweathermap.org/data/2.5/forecast?q=minneapolis,us&units=imperial&APPID=09110e603c1d5c272f94f64305c09436'
		)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				this.setState({ data: result });
			});
	};

	render() {
		const { data } = this.state
		return (
			<div className="app">
				<h1>ACME: Five Day Engagement Forecast</h1>
				<h4>
					Location: {data.city && data.city.name},&nbsp;
					{data.city && data.city.country}
				</h4>
				<ForecastList
					data={ notificationForecastSummaryUtil( this.state.data )}
				/>
			</div>
		);
	}
}



export default App;

ReactDOM.render(<App />, document.getElementById('app'));
/* 

*/