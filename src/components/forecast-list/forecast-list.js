import React, { Component } from 'react';
import { ForecastCard } from '../forecast-card/forecast-card';
import { forecastDayStats } from '../../utils/forecast-day-stats';

class ForecastList extends Component {
	constructor(props) {
		super(props);
	}

	renderForecastCards( data ) {
		let stats = forecastDayStats( data );
		
		return <ForecastCard stats={stats}/> 
	}

	render() {
      let { data } = this.props;

		return (
			<div>
				{ this.renderForecastCards(data)	}
			</div>
		);
	}
}

export default ForecastList;


