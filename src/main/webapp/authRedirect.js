import { msalConfig, loginRequest } from './authConfig.js';

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
export const myMSALObj = new msal.PublicClientApplication(msalConfig);

let username = "";

/**
 * A promise handler needs to be registered for handling the
 * response returned from redirect flow. For more information, visit:
 * 
 
myMSALObj.handleRedirectPromise()
    .then(handleResponse)
    .catch((error) => {
        console.error(error);
        throw error;
    });*/

const redirectResponse = await myMSALObj.handleRedirectPromise();
if (redirectResponse !== null) {
    // Acquire token silent success
    let accessToken = redirectResponse.accessToken;
    
    // Call your API with token
    getEcho(accessToken);
} 

function getEcho(access_token) {
            var headers = new Headers();
            var bearer = "Bearer " + access_token;
            headers.append("Authorization", bearer);
            var options = {
                method: "GET",
                headers: headers
            };
            var echoEndpoint = "http://20.92.67.123/echo";
            
            fetch(echoEndpoint, options)
                .then (
                    function (response) {
                        if (response.status !== 200) {
                            document.getElementById("error").innerHTML = 'Get echo returned an error' + response.status;
                            return;
                        }
                        return response.json();
                    })
                    .then(function(data) {
                            console.log(data);
                            document.getElementById("success").innerHTML = document.getElementById("success").innerHTML + data.message;
                    })
                    .catch(function(err) {
                        document.getElementById("error").innerHTML = 'Error on call: ' + err;
                    });
        };

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

export function signin() {
    myMSALObj.loginRedirect(loginRequest);
}
