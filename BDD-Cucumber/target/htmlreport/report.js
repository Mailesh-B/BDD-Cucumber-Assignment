$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/firstfeaturefile.feature");
formatter.feature({
  "name": "Facebook Login",
  "description": "  I want to navigate to facebook page,login using my user credentials and homepage should appear",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Facebook User Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scene2"
    }
  ]
});
formatter.step({
  "name": "User Login credentials \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" are entered",
  "keyword": "When "
});
formatter.step({
  "name": "Login should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abcdef",
        "12345"
      ]
    },
    {
      "cells": [
        "asdfgh",
        "24680"
      ]
    },
    {
      "cells": [
        "qwerty",
        "13579"
      ]
    }
  ]
});
formatter.background({
  "name": "User Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Visit the facebook URL",
  "keyword": "Given "
});
formatter.match({
  "location": "firststepdefinitionclass.visit_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook User Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scene2"
    }
  ]
});
formatter.step({
  "name": "User Login credentials \"abcdef\" and \"12345\" are entered",
  "keyword": "When "
});
formatter.match({
  "location": "firststepdefinitionclass.user_Login_credentials_and_are_entered(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "firststepdefinitionclass.login_should_be_unsuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Visit the facebook URL",
  "keyword": "Given "
});
formatter.match({
  "location": "firststepdefinitionclass.visit_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook User Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scene2"
    }
  ]
});
formatter.step({
  "name": "User Login credentials \"asdfgh\" and \"24680\" are entered",
  "keyword": "When "
});
formatter.match({
  "location": "firststepdefinitionclass.user_Login_credentials_and_are_entered(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "firststepdefinitionclass.login_should_be_unsuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User Login",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Visit the facebook URL",
  "keyword": "Given "
});
formatter.match({
  "location": "firststepdefinitionclass.visit_the_facebook_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Facebook User Login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scene2"
    }
  ]
});
formatter.step({
  "name": "User Login credentials \"qwerty\" and \"13579\" are entered",
  "keyword": "When "
});
formatter.match({
  "location": "firststepdefinitionclass.user_Login_credentials_and_are_entered(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "firststepdefinitionclass.login_should_be_unsuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});