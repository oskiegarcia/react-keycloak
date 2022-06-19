
## Setup keycloak

1. Run keycloak on docker container.

2. Access the admin console using the following URL:
http://localhost:8080/auth/

Credentials: kcadmin/kcadmin!

3. Create new realm with name "Keycloak-react-auth"

4. Under "Keycloak-react-auth" realm, create a client id with name "React-auth" wih the following details:
   Client Protocol: openid-connect
   Access Type: public
   Redirect URI: http://localhost:3000/*

5. Create a client role under "React-auth" client id.

6. Create a user and assign a role from "React-auth" client id.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# react-keycloak
