# Weather Application

_This application is created using react.js ans mainly focuses on context api._

**Here in this application we can find and store data for up-to 5 locations, context helps us store data globally and also created methods to switch between and delete places.**

_**hooks/api used in this application**_

-   State hook (useState) to store and toggle the details fot a particular place.

-   context api for creating a global context storing the data.

-   Context hook (instead of consumer of this.context) for getting the context.

-   No effect or lifecycle methods as it updates the component as the state updates.

-   used open weather map api for fetching data according to the city named.

_**How does the application work**_

-   Here we have an input field which takes the name of the city.

-   the name then is sent to the server with the help of the api used,

-   api gets data corresponding to the most suitable place as provided,

-   the response is then deconstructed and stored in the context store or the global storage,

-   actions corresponding to show particular details or remove some data are created in the App.js file.

-   click on the city name to open it on the maps.

## pending tasks

-   show details on hover over the saved place

## hosted

https://weather-application-context.netlify.app
