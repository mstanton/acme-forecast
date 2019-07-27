/* Utility function for determining best communication type for 24hr ( 1 day period )*/
import moment from 'moment';
import notificationSegmentUtil from './notification-segment-forecaster';

export function notificationForecastSummaryUtil( weatherData ) {
   const { list } = weatherData;

   // populated with bucketed day arrays
   let forecast = [];
   
   // get the data we want
   let series = list && list.map( ( item ) => {
     
      let iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`

      let segmentInfo = {
			dt: item.dt,
         dt_txt: item.dt_txt,
         d: moment(item.dt_txt ).format( 'DD-MM-YYYY' ),
			weather: item.weather[0].main,
			icon: iconUrl,
         temp: item.main.temp
		};
         return segmentInfo
      })
      .map( ( segment ) => {
         // determine correct notification channel
         return notificationSegmentUtil( segment );
      });

   // split/sort series by day
   series && series.map( ( segment ) => {
      let d_avg = null;
      let d_total = null;
      // array named with date format DD-MM-YYYY
      let dateKey = moment( segment.dt_txt ).format( 'MM-DD-YYYY' );

      // assign segment to day array
      let day = forecast[dateKey];

      //if day array name doesn't exist yet make a new array
      if ( !day ) {
         day = forecast[dateKey] = new Array;
      }
      day.push(segment); 
   } )
   
  

   let x = forecast.map( ( day, index ) => {
      console.log('day', day)
      let avg = 0;
      let sum = 0;
      let count = index + 1


   } )

   console.log(x)
   return forecast
}
