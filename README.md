# Swagger generated server

## Overview
Build a ReST API using node.js (hosted on Express) to expose product data. Use https://mockaroo.com/ to download mock data in JSON format and use it as data source.

Implement the below endpoints

An endpoint to expose product data by ID
An endpoint to search products by name
A batch endpoint that accepts a list of product IDs and returns their details. Also accept a list of fields to be returned in the response.

##Tools
npm, nvm (node version manager), eslint (use airbnb lint settings), mocha (test runner), chai (assertion library), nyc (code coverage), dredd (HTTP API testing framework), snyk (security vulnerabilities)

##Swagger Hub Link for Product API
https://app.swaggerhub.com/apis/Divya-RS/Products/1.00

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.
