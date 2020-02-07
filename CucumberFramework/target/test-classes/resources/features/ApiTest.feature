@apitests
Feature: API Tests

@apitest1
Scenario: Retrieve weather details
	Given I hit the correct weather endpoint
	When I request for the desired city
	| Hyderabad | Kolkata | Delhi |
	Then I validate the contentType header in the response recieved
	And I validate the serverType header in the response recieved
#	And I validate the temperature in the response recieved
#	And I validate the wind speed in the response recieved
	
Scenario Outline: Register user 
	Given I hit the correct user registration "<endpoint>"
	When I pass "FirstName" as "<FirstName>" in request
	When  I pass "LastName" as "<LastName>" in request
	When  I pass "UserName" as "<UserName>" in request
	When  I pass "Password" as "<Password>" in request
	When  I pass "Email" as "<Email>" in request
	Then Validate Success Response
	Examples: 
	|	endpoint														|  FirstName  |  LastName | UserName | 	Password	|	Email	|
	| http://restapi.demoqa.com/customer	|		Sounak6		|		Saha6		|	sounak84 |	sounakss6	| sounak73@gmail.com	|