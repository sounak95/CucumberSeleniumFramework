$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApiTest.feature");
formatter.feature({
  "line": 2,
  "name": "API Tests",
  "description": "",
  "id": "api-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@apitests"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Retrieve weather details",
  "description": "",
  "id": "api-tests;retrieve-weather-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@apitest1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I hit the correct weather endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I request for the desired city",
  "rows": [
    {
      "cells": [
        "Hyderabad",
        "Kolkata",
        "Delhi"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I validate the contentType header in the response recieved",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate the serverType header in the response recieved",
  "keyword": "And "
});
formatter.match({
  "location": "ApiTestSteps.i_enter_weather_end_point()"
});
formatter.result({
  "duration": 426071524,
  "status": "passed"
});
formatter.match({
  "location": "ApiTestSteps.i_enter_the_correct_city(DataTable)"
});
formatter.result({
  "duration": 1540417506,
  "status": "passed"
});
formatter.match({
  "location": "ApiTestSteps.I_validate_the_contentType_header()"
});
formatter.result({
  "duration": 1331129,
  "status": "passed"
});
formatter.match({
  "location": "ApiTestSteps.I_validate_the_servercontentType_header()"
});
formatter.result({
  "duration": 40551,
  "status": "passed"
});
formatter.after({
  "duration": 119537,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "#\tAnd I validate the temperature in the response recieved"
    },
    {
      "line": 12,
      "value": "#\tAnd I validate the wind speed in the response recieved"
    }
  ],
  "line": 14,
  "name": "Register user",
  "description": "",
  "id": "api-tests;register-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I hit the correct user registration \"\u003cendpoint\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I pass \"FirstName\" as \"\u003cFirstName\u003e\" in request",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I pass \"LastName\" as \"\u003cLastName\u003e\" in request",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I pass \"UserName\" as \"\u003cUserName\u003e\" in request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I pass \"Password\" as \"\u003cPassword\u003e\" in request",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I pass \"Email\" as \"\u003cEmail\u003e\" in request",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Validate Success Response",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "api-tests;register-user;",
  "rows": [
    {
      "cells": [
        "endpoint",
        "FirstName",
        "LastName",
        "UserName",
        "Password",
        "Email"
      ],
      "line": 23,
      "id": "api-tests;register-user;;1"
    },
    {
      "cells": [
        "http://restapi.demoqa.com/customer",
        "Sounak6",
        "Saha6",
        "sounak84",
        "sounakss6",
        "sounak73@gmail.com"
      ],
      "line": 24,
      "id": "api-tests;register-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Register user",
  "description": "",
  "id": "api-tests;register-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@apitests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I hit the correct user registration \"http://restapi.demoqa.com/customer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I pass \"FirstName\" as \"Sounak6\" in request",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I pass \"LastName\" as \"Saha6\" in request",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I pass \"UserName\" as \"sounak84\" in request",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I pass \"Password\" as \"sounakss6\" in request",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I pass \"Email\" as \"sounak73@gmail.com\" in request",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Validate Success Response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://restapi.demoqa.com/customer",
      "offset": 37
    }
  ],
  "location": "ApiTestSteps.i_enter_the_correct_endpoint(String)"
});
formatter.result({
  "duration": 2252871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 8
    },
    {
      "val": "Sounak6",
      "offset": 23
    }
  ],
  "location": "ApiTestSteps.i_enter(String,String)"
});
formatter.result({
  "duration": 57124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName",
      "offset": 8
    },
    {
      "val": "Saha6",
      "offset": 22
    }
  ],
  "location": "ApiTestSteps.i_enter(String,String)"
});
formatter.result({
  "duration": 28914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UserName",
      "offset": 8
    },
    {
      "val": "sounak84",
      "offset": 22
    }
  ],
  "location": "ApiTestSteps.i_enter(String,String)"
});
formatter.result({
  "duration": 35614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 8
    },
    {
      "val": "sounakss6",
      "offset": 22
    }
  ],
  "location": "ApiTestSteps.i_enter(String,String)"
});
formatter.result({
  "duration": 31383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 8
    },
    {
      "val": "sounak73@gmail.com",
      "offset": 19
    }
  ],
  "location": "ApiTestSteps.i_enter(String,String)"
});
formatter.result({
  "duration": 31382,
  "status": "passed"
});
formatter.match({
  "location": "ApiTestSteps.validate_success_response()"
});
formatter.result({
  "duration": 960545315,
  "status": "passed"
});
formatter.after({
  "duration": 51834,
  "status": "passed"
});
});