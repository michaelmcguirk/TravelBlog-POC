# TravelBlog - ReactJS

This project is a single page application built using ReactJS. 

The application uses the Google Maps API to plot locations that correspond to blog posts that are served from a CMS via a REST API. Selecting a location marker on the map component opens a corresponding blog post within the blog component. 

The application is currently running with an instance of Cockpit headless CMS at [feedingmosquitos.com](http://www.feedingmosquitos.com).

## Configuration
This project utilises the custom environment variables functionality in Create React App - see: [Documentation](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables).

The following properties are required in the .env.development or .env.production files:

```
REACT_APP_COCKPIT - The read-only api key used to retrieve blog entries.
REACT_APP_COCKPIT_SERVER - The server where the cockpit instance is hosted.
REACT_APP_COCKPIT_DOMAIN - The domain where the cockpit instance is hosted.
REACT_APP_MAP - The google maps API key.
REACT_APP_COCKPIT_COLLECTION - The name of the Cockpit collection where the blog entries are stored. 

```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
