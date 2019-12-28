Feature: Login functionality for adactin application

Background:
When user enter application url 
And user enter "poojapriya" as username
And user enter "test123" as password
Then user verfiy the username in the homepage


@login
Scenario Outline: Successfull login into the adactin application with valid credential
When user enter application url
And user enter "<username>" as username
And user enter  "<password>" as password
Then user verfiy the username in the homepage


Examples:
|username|password|
|aarthyrajeev|test123|
|poojapriya|test123|

@searchhote1
Scenario: Successfull search into the adactin application with valid credential
When user select location
And user select hotels
And user select RoomType
And user select numberofrooms
And user select checkindate
And user select checkoutdate
And user Select adultsperroom
And user select childrenperroom 
Then user verify the serach in the loginpage

@searchhotel2
Scenario: Successfull select into the adactin application with valid credential
And user select select
Then user verify the select in the loginpage

@searchhotel3
Scenario: Successfull BookHotelPage into the adactin application with valid credential
When user enter firstname
And user enter lastname
And user enter address
And user enter creditcardno
And user enter creditcardtype
And user enter expirydate
And user enter selectyear
And user enter cvv no
Then user select the booknow
Then :user enter logoutpage




