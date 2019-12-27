Feature: Login functionality for adactin application

Scenario Outline: Successfull login into the adactin application with valid credential
When user enter application url
And user enter "<username>" as username
And user enter  "<password>" as password 
Then user verify the in the homepage

Examples:
|username|password|
|poojapriya|test123|
|anuamu041231|9003881823|
|anuamu04123|900388183|

