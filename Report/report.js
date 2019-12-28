$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter \u003cusername\u003e as a username",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter  \u003cpassword\u003e as a password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "aarthyrajeev",
        "test123"
      ],
      "line": 20,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2"
    },
    {
      "cells": [
        "poojapriya",
        "test123"
      ],
      "line": 21,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 797327,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"test123\"  password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 343942978,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter aarthyrajeev as a username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter  test123 as a password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enter_aarthyrajeev_as_a_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 612837156,
  "status": "passed"
});
formatter.before({
  "duration": 223226,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"test123\"  password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 1202725,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enter poojapriya as a username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter  test123 as a password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 623479514,
  "status": "passed"
});
formatter.before({
  "duration": 202699,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"test123\"  password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 1223252,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Successfull search into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-search-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@searchhote1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user select location",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user select hotels",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user select RoomType",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user select numberofrooms",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user select checkindate",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user select checkoutdate",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select adultsperroom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user select childrenperroom",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user verify the serach in the loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition1.user_select_location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_hotels()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_RoomType()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_numberofrooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_checkindate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_checkoutdate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_Select_adultsperroom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_select_childrenperroom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition1.user_verify_the_serach_in_the_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 550883635,
  "status": "passed"
});
formatter.before({
  "duration": 172551,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"test123\"  password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 1027609,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Successfull select into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-select-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@searchhotel2"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user select select",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user verify the select in the loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition2.user_select_select()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition2.user_verify_the_select_in_the_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 526929829,
  "status": "passed"
});
formatter.before({
  "duration": 181531,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter \"test123\"  password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verfiy the username in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 1026326,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinition.user_verfiy_the_username_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 41,
  "name": "Successfull BookHotelPage into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-bookhotelpage-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@searchhotel3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user enter firstname",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user enter address",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user enter creditcardno",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user enter creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user enter expirydate",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user enter selectyear",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user enter cvv no",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user select the booknow",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": ":user enter logoutpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition3.user_enter_firstname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_lastname()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_creditcardno()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_creditcardtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_expirydate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_selectyear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_enter_cvv_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition3.user_select_the_booknow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition4.user_enter_logoutpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 606679200,
  "status": "passed"
});
});