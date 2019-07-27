import React, { PureComponent } from 'react'
import './forecast-card.scss'

export class ForecastCard extends PureComponent {
   render() {
      console.log('stats',this.props.stats)
      return (
			<div className="card">
				<h3 className="date">August 20, 2019</h3>
            <p>Daily Calculated Avg. Temp &deg;F</p>
				<p>
					<span className="tempDeg">79&deg;</span>
               <img className="icon"
                    src="https://openweathermap.org/img/wn/10d@2x.png" />
            </p>
            
            <h3 className="channel">Best Contact: Phone</h3>
            <button>Details</button>
			</div>
		);
   }
}

export default ForecastCard