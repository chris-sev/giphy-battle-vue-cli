import auth from 'auth0-js';
import axios from 'axios';

let auth0 = new auth.WebAuth({
  domain:       'adobot.auth0.com',
  clientID:     'E7v0bIDB2bM4ICfIgbWPbe6J6T54hsiT',
  redirectUri:  'http://localhost:8080',
  responseType: 'token id_token',
  audience:     'gifbattle',
  scope:        'openid profile email write:gifs'
});

export default {
  data() {
    return {
      isLoggedIn: false,
      accessToken: null,
      idToken: null
    }
  },
  methods: {
    login() {
      auth0.authorize();
    },
    logout() {
      auth0.logout();
      this.isLoggedIn = false;
    },
    handleAuthentication() {
      auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log(authResult);
  
          window.location.hash = '';
          this.isLoggedIn = true;
          this.setSession(authResult);
  
        } else if (err) {
          alert(`Error: ${err.error}. Check the console for further details.`);
          console.log(err);
        }
      })
    },
    setSession(authResult) {
      this.accessToken = authResult.accessToken;
      this.idToken = authResult.idToken;

      axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
    },
    checkSession() {
      auth0.checkSession({}, (err, authResult) => {
        console.log(authResult);
        if (err) {
          alert(`Error: ${err.error}. Check the console for further details.`);
        } else {
          this.setSession(authResult);
          this.isLoggedIn = true;
          console.log(this);
        }
      });
    }
  }
}