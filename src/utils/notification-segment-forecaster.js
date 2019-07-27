import moment from 'moment';

export default function notificationSegmentUtil(params){
	/*
   RULES:
   - The best time to engage a customer via a text message is when it is sunny and warmer than 75 degrees Fahrenheit
   - The best time to engage a customer via email is when it is between 55 and 75 degrees Fahrenheit
   - The best time to engage a customer via a phone call is when it is less than 55 degrees or when it
   is raining.

   RESULT:
   - returns result forecast segment ( 3 hour )
      - dt: 1406106000 ( Time of data forecasted, unix, UTC )
      - dt_txt: 2019-07-25 18:00:00 ( Data/time of calculation, UTC)
      - weather: "Rain" ( Clouds, Rain, Sunny )
		- temp: 72.00 ( Fahrenheit )
		- icon: 
      - type: 'email' ( phone, sms, default notification type is email )
   */
	const { d, dt, dt_txt, weather, icon, temp } = params;

	// notification object is returned
	let segment = {
		dt: dt,
		d: d,
      dt_txt: dt_txt,
      weather: weather,
      temp: temp,
      icon: icon,
		channel: 'email' // default to email notification
	};

	switch (weather) {
		case 'Rain':
			segment.channel = 'phone';
			break;
		case 'Clear':
			if (temp >= 75.0) {
				segment.channel = 'sms';
			}
			break;
		default:
			if (temp < 55.0) {
				segment.channel = 'phone';
			}
			break;
	}

   return segment;
};
