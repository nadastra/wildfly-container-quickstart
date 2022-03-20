/**
 * Configuration object to be passed to MSAL instance on creation.
 */

const msalConfig = {
  auth: {
    clientId: "80f9e1ba-1232-41ff-8d0b-c34a9085bc6a",
    authority: "https://login.microsoftonline.com/9f822be9-3416-42fa-8d6c-7e0787e8b974",
    redirectUri: "https://wildflycontainerqs.af302b6b0eae45b58299.australiaeast.aksapp.io",
    navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false, .
  }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 */
const loginRequest = {
  scopes: ["openid", "profile"],
};

// exporting config object
if (typeof exports !== 'undefined') {
  module.exports = {
    msalConfig: msalConfig,
  };
}
