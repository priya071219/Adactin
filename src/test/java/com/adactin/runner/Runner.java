package com.adactin.runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.Filereadermanger;
import com.adactinbasclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", 
         glue = "com\\adactin\\stepdefinition",
         plugin = {"com.cucumber.listener.ExtentCucumberFormatter:Report/cucubmer_report.html",
		"html:Report" }, 
    monochrome = true,
    dryRun = false, 
    strict = true

)

public class Runner {
	public static WebDriver driver;

	@BeforeClass
	public static void setup() throws IOException {
		String browsername = Filereadermanger.getInstance().getCrInstance().browsername();
		driver=BaseClass.browserLaunch(browsername);
	}

	public static void tearDown() {
		driver.quit();
	}

}