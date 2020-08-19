const msalConfig = {
  auth: {
    clientId: 'e5d3a39b-b8c5-4f3d-853a-1fdd345a1af8',
    redirectUri: 'https://rohitdhamija.github.io/mscalendarview/index.html'
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    forceRefresh: false
  }
};

const loginRequest = {
  scopes: [
    'openid',
    'profile',
    'user.read',
    'calendars.read'
  ]
}