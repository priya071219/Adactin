$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality for adactin application",
  "description": "",
  "id": "login-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003cusername\u003e\" as username",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter  \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the in the homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;1"
    },
    {
      "cells": [
        "poojapriya",
        "test123"
      ],
      "line": 11,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2"
    },
    {
      "cells": [
        "anuamu041231",
        "9003881823"
      ],
      "line": 12,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3"
    },
    {
      "cells": [
        "anuamu04123",
        "900388183"
      ],
      "line": 13,
      "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1944890,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"poojapriya\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter  \"test123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 266303689,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "poojapriya",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 651718,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"anuamu041231\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter  \"9003881823\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 704317,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "anuamu041231",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9003881823",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 976293,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successfull login into the adactin application with valid credential",
  "description": "",
  "id": "login-functionality-for-adactin-application;successfull-login-into-the-adactin-application-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user enter application url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter \"anuamu04123\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter  \"900388183\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user verify the in the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_application_url()"
});
formatter.result({
  "duration": 740880,
  "error_message": "java.lang.NullPointerException\r\n\tat com.adactinbasclass.BaseClass.geturl(BaseClass.java:60)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_enter_application_url(StepDefinition.java:20)\r\n\tat ✽.When user enter application url(AdactinLogin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "anuamu04123",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "900388183",
      "offset": 13
    }
  ],
  "location": "StepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_in_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("AdactinSearchHotel.feature");
formatter.feature({
  "line": 1,
  "name": "search functionality for adactin application",
  "description": "",
  "id": "search-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 300200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull search into the adactin application with valid credential",
  "description": "",
  "id": "search-functionality-for-adactin-application;successfull-search-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user select location",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user select hotels",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user select RoomType",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user select numberofrooms",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user select checkindate",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user select checkoutdate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user Select adultsperroom",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select childrenperroom",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user verify the serach in the loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition1.user_select_location()"
});
formatter.result({
  "duration": 82508370,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.adactinbasclass.BaseClass.dropdown(BaseClass.java:64)\r\n\tat com.adactin.stepdefinition.stepDefinition1.user_select_location(stepDefinition1.java:13)\r\n\tat ✽.When user select location(AdactinSearchHotel.feature:4)\r\n",
  "status": "failed"
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
formatter.uri("AdactinSelect.feature");
formatter.feature({
  "line": 1,
  "name": "select functionality for adactin application",
  "description": "",
  "id": "select-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 481091,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull select into the adactin application with valid credential",
  "description": "",
  "id": "select-functionality-for-adactin-application;successfull-select-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user select select",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user verify the select in the loginpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition2.user_select_select()"
});
formatter.result({
  "duration": 4628094,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.adactinbasclass.BaseClass.clickOnelemant(BaseClass.java:91)\r\n\tat com.adactin.stepdefinition.stepDefinition2.user_select_select(stepDefinition2.java:15)\r\n\tat ✽.And user select select(AdactinSelect.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinition2.user_verify_the_select_in_the_loginpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("AdactinTPayment.feature");
formatter.feature({
  "line": 1,
  "name": "BookHotelPage functionality for adactin application",
  "description": "",
  "id": "bookhotelpage-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 359856,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull BookHotelPage into the adactin application with valid credential",
  "description": "",
  "id": "bookhotelpage-functionality-for-adactin-application;successfull-bookhotelpage-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user enter firstname",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter address",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter creditcardno",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter creditcardtype",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter expirydate",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter selectyear",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter cvv no",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user select the booknow",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition3.user_enter_firstname()"
});
formatter.result({
  "duration": 10259424,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.adactinbasclass.BaseClass.inputOnelement(BaseClass.java:86)\r\n\tat com.adactin.stepdefinition.stepDefinition3.user_enter_firstname(stepDefinition3.java:13)\r\n\tat ✽.When user enter firstname(AdactinTPayment.feature:4)\r\n",
  "status": "failed"
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
formatter.uri("AdactinULogout.feature");
formatter.feature({
  "line": 1,
  "name": "LogoutPage functionality for adactin application",
  "description": "",
  "id": "logoutpage-functionality-for-adactin-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 464413,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull LogoutPage into the adactin application with valid credential",
  "description": "",
  "id": "logoutpage-functionality-for-adactin-application;successfull-logoutpage-into-the-adactin-application-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": ":user enter logoutpage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition4.user_enter_logoutpage()"
});
formatter.result({
  "duration": 1715891,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.adactinbasclass.BaseClass.clickOnelemant(BaseClass.java:91)\r\n\tat com.adactin.stepdefinition.stepDefinition4.user_enter_logoutpage(stepDefinition4.java:12)\r\n\tat ✽.Then :user enter logoutpage(AdactinULogout.feature:4)\r\n",
  "status": "failed"
});
});