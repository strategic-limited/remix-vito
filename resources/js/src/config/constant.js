export default {
  webBaseURL: process.env.MIX_APP_URL,
  firebaseConfig: {
    apiKey: 'AIzaSyBLcvgKwYP7x5jYcZB18lFNIGqJELPx95s',
    authDomain: 'lara-vue-6168a.firebaseapp.com',
    databaseURL: 'https://lara-vue-6168a.firebaseio.com',
    projectId: 'lara-vue-6168a',
    storageBucket: 'lara-vue-6168a.appspot.com',
    messagingSenderId: '697567850079',
    appId: '1:697567850079:web:5f5c4539813c408231b5ea',
    measurementId: 'G-TSFCKZSFF8'
  },
  auth0Config: {
    domain: 'http://localhost',
    clientID: '3',
    // make sure this line is contains the port: 8080
    redirectUri: 'http://localhost:8080/callback',
    // we will use the api/v2/ to access the user information as payload
    audience: 'https://dev-6u-3fb22.auth0.com/api/v2/',
    responseType: 'token id_token',
    scope: 'openid profile'
  }
}
