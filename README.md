# Weather App

## Project setup

After cloning the project build it on your local host by running the follwing command: 

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Approach

To develop this weather app I divided the app into two parts, Frontend styling and Frontend logic. For the styling part I designed a basic layout to be used as a reference to start building the app. For the logic, the data was coming from the API so I called the API for the data to be sent in the response and filtered the data I needed for the app from the response. Since I had two routes, I used two different components to render views. 

## Improvements
### Features
I will further add the following feature:
- Units of Temperature: By making a call to the API with different metrics (F/C) depending on the users preference. And support to later change the units once the data is already fetched.

- Recommendation: Recommendation for specific gears example: Take your umberella for rain, now boots for the snow, sunglasses for sunnz weather.

- Weather forecast: Weather forcast for the next few days

- Favorite cities: Storing cities to favorites for keeping an eye on the weather.

- Icons: Add correct icons corresponding to the weather, either from the weather API itself using the icon codes returned from the API or custom icons. 

- Responsiveness: Add media queries to support Responsiveness across screen resolutions.


### Other Improvements
- City Search: don't allow user to type in a city that already exists in the weathers
- File structure: extract the html into its seperate view file so that the veiw and component logic is seperate and easily read.
- Styles: dividing styles into their seperate style files and leaving only the global styles in the global.scss. Also adding scss variable for style consistency across the app. 
- Search box: Remove the city name from the search box once a city is displayed. 
- Testing: Add tests for edge cases, need a little more time to read about testing api calls with vue, how to correctly mount the component with a fetch statement. 