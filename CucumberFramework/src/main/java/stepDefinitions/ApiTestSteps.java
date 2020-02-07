package stepDefinitions;

import java.io.IOException;
import java.util.List;

import org.json.JSONObject;

import org.testng.Assert;

import com.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


public class ApiTestSteps {

	RequestSpecification httpRequest, request;
	Response response;
	JSONObject requestParams = new JSONObject();
	JsonPath jsonPathEvaluator;
	
	@Given("^I hit the correct weather endpoint$")
	public void i_enter_weather_end_point() throws IOException {
		RestAssured.baseURI = "http://restapi.demoqa.com/utilities/weather/city";
		  httpRequest = RestAssured.given();
		
	}

	@When("^I request for the desired city$")
	public void i_enter_the_correct_city(DataTable dataTable) throws Exception{
		List<List<String>> data = dataTable.raw();
		String city = data.get(0).get(1);
		 response = httpRequest.get("/" + city);
	}
	
	@Then("^I validate the contentType header in the response recieved$")
	public void I_validate_the_contentType_header() throws Exception  {
		 String contentType = response.header("Content-Type");
		 System.out.println("Content-Type value: " + contentType);
		 Assert.assertEquals(contentType /* actual value */, "application/json" /* expected value */);
	}
	
	@And("^I validate the serverType header in the response recieved$")
	public void I_validate_the_servercontentType_header() throws Exception  {
		 String serverType =  response.header("Server");
		 Assert.assertEquals(serverType /* actual value */, "nginx" /* expected value */);
	}
	
	@And("^I validate the temperature in the response recieved$")
	public void I_validate_the_temperature() throws Exception  {
		 jsonPathEvaluator = response.jsonPath();
		String strTemp = jsonPathEvaluator.get("Temperature");
		 Assert.assertEquals(strTemp /* actual value */, "20 Degree celsius" /* expected value */);
	}
	
	@And("^I validate the wind speed in the response recieved$")
	public void I_validate_the_windSpeed() throws Exception  {
		 jsonPathEvaluator = response.jsonPath();
		String strTemp = jsonPathEvaluator.get("WindSpeed");
		 Assert.assertEquals(strTemp /* actual value */, "2.17 Km per hour" /* expected value */);
	}
	
	@Given("^I hit the correct user registration \"([^\"]*)\"$")
	public void i_enter_the_correct_endpoint(String uri) throws IOException {
		RestAssured.baseURI ="http://restapi.demoqa.com/customer";
		request = RestAssured.given();	
	}
	
	@When("^I pass \"([^\"]*)\" as \"([^\"]*)\" in request$")
	public void i_enter(String str1, String str2) throws IOException {
		requestParams.put(str1, str2);
	}
	
	@Then("^Validate Success Response")
	public void validate_success_response() throws IOException {
		request.body(requestParams.toString());
		response = request.post("/register");
		Reporter.addStepLog("Response body: " + response.body().asString());
		int statusCode = response.getStatusCode();
		Assert.assertEquals(statusCode, 200);
		String successCode = response.jsonPath().get("SuccessCode");
//		Assert.assertEquals(  successCode, "OPERATION_SUCCESS", "Correct Success code was returned");
	}
	
}
