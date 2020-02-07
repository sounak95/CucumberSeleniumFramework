package runners;

import java.io.File;
import java.io.IOException;

import org.junit.runner.RunWith;
//import org.junit.*;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import pageObjects.BasePage;

@RunWith(Cucumber.class)

@CucumberOptions(features = { "src/test/java/resources/features/" }, glue = {
		"stepDefinitions" }, monochrome = true, dryRun = false, tags = {"@apitests"}, 
				plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json", "junit:target/cucumber-reports/Cucumber.xml",
				"com.cucumber.listener.ExtentCucumberFormatter:output/report.html" })

public class MainRunner extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void writeExtentReport() throws IOException {
		Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + "\\src\\main\\java\\utils\\ReportsConfig.xml"));
		BasePage.copyLatestExtentReport();
	}
//	public class MainRunner  {
//		@AfterClass
//		public static void writeExtentReport() throws IOException {
//			Reporter.loadXMLConfig(new File(System.getProperty("user.dir") + "\\src\\main\\java\\utils\\ReportsConfig.xml"));
//			BasePage.copyLatestExtentReport();
//		}
}