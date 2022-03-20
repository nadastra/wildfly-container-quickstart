const config = require('./authConfig');
// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(config.msalConfig);

let username = "";

/**
 * A promise handler needs to be registered for handling the
 * response returned from redirect flow. For more information, visit:
 * 
 */
myMSALObj.handleRedirectPromise()
    .then(handleResponse)
    .catch((error) => {
        console.error(error);
        throw error;
    });

/*function selectAccount () {
    const currentAccounts = myMSALObj.getAllAccounts();

    if (!currentAccounts) {
        return;
    } else if (currentAccounts.length > 1) {
        // Add your account choosing logic here
        console.warn("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
        username = currentAccounts[0].username;
        welcomeUser(username);
        updateTable();
    }
}*/

function handleResponse(response) {
    if (response !== null) {
        //username = response.account.username;
      return response.accessToken;
    } else {        
        //selectAccount();
    }
}

function signin() {
    myMSALObj.loginRedirect(loginRequest);
}
