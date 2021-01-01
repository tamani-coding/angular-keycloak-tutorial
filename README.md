# angular-keycloak-tutorial
Angular + Keycloak example projekt

## references

* keycloak getting started
	* https://www.keycloak.org/docs/latest/getting_started/index.html
* angular keycloak
	* https://www.npmjs.com/package/keycloak-angular

## start keycloak

`docker-compose up`

## initialize realm and demo user and client

* log into administration console with admin user `http://localhost:8080/auth`
* create a new realm e.g. `my-demo-realm` 
* using the created realm create an new user
	* users -> add user
	* set username
	* set Email Verified to ON
	* in Credentials set a temporary password
* login with the new user / temporary password into the demo realm
	* `http://localhost:8080/auth/realms/my-demo-realm/account/`
	* insert a new password when asked
	* complete required fields such as email, firstname, lastname
* in the admin console go to Client and create a new client `my-demo-client`

## creating an angular project

Angular project with routing.

`ng new demo-frontend --routing`

Generate two components.

`ng generate component public-space`
`ng generate component restricted-space`

Add routing to the AppRoutingModule to redirect to the two components.

Create router links.

## install keylocak-angular and keycloak-js library

`npm install keycloak-angular keycloak-js`

Setup KeycloakAngular in AppModule: add initialize function, provider and import KeycloakAngularModule

## add guard to app

`ng generate guard keycloak`