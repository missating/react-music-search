# react-music-search
This application makes use of spotify-api to allow users search for music

![Sample Gif](https://res.cloudinary.com/dxayftnxb/image/upload/v1552960791/Mar-19-2019_02-57-46_cbt0wh.gif)

# set up
Basically you have to get an access token from spotify to be able to use their API
- This explains it all - (https://developer.spotify.com/documentation/web-api/quick-start/)

#API Alternative
You can clone this (https://github.com/missating/web-api-auth-examples) 
- Then, set the needed credentials as stated in the `.env.example`
- Run `npm install` to get the needed dependencies
- Start the application by running `node authorization_code/app.js`

N:B - You don't need to navigate to `localhost:8888` as that can be accessed from the client port below once its setup. 

**Client** 
N:B - The above API is needed for the client to work as you would be needing your access token after you login with spotify to be able to search for any music
- Clone this React app - (https://github.com/missating/react-music-search)
- Run `yarn` to install all the needed dependencies
- Start the app by running `yarn start`
- The application should be up and running on `localhost:1234` 
