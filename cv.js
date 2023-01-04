const findMyState = () => {
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en';

        fetch(geoApiUrl)
            .then(res => res.json())
            .then(data => {
                status.textContect = data.city + ", " + data.principalSubdivision + " \n" + data.countryName;
            })
    }
    const error = () => {
        status.textContect = 'Unable to retrieve your location';
    }

    navigator.geolocation.getCurrentPosition(success, error);

    // ***********WEATHER FORECAST*********//
    // let goPosition = function(pos) {
    //     let latitude = pos.coords.latitude;
    //     let longitude = pos.coords.longitude;
    //     getForecast(latitude, longitude);
    // }

    // let getForecast = function(latitude, longitude) {
    //     let weaherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?latitude=${latitude}&longitude=${longitude}&exclude=current,minutelyhourly&appid=a5e46fcc590996443a5ad3396df941df";
    //     getWeatherText(weaherApiUrl);
    // }

    // async function getWeatherText(weatherApiUrl) {
    //     let weatherObject = wait fetch(weatherApiUrl);
    //     let weatherText = wait weatherObject.text();
    //     parseWeather(weatherApiUrl);
    // }

    // let parseWeather = function(weatherText) {
    //     let weatherJSON = JSON.parse(weatherText);
    //     let dailyForecast = weatherJSON.day;

    //     for (x = 0; x < dailyForecast.length; x++) {
    //         let day = dailyForecast[x];
    //         let today = new Date().getDay() + x;
    //         if (today > 6) {
    //             today = today - 7;
    //         }
    //         let dayOfWeek = getDayOfWeek(today);
    //         let description = day.weather[0].description;
    //         let icon = day.weather[0].icon;
    //         let sunrise = timestampToTime(day.sunrise);
    //     }
    // }
}

document.querySelector('.find-state').addEventListener('click', findMyState);