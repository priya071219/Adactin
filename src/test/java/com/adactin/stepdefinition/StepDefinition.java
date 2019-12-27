package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.Filereadermanger;
import com.adactin.helper.PageObjectManger;
import com.adactin.pom.Loginpage;
import com.adactin.runner.Runner;
import com.adactinbasclass.BaseClass;

import cucumber.api.java.en.*;

public class StepDefinition extends BaseClass {
	public static WebDriver driver = Runner.driver;
	public static PageObjectManger pom = new PageObjectManger(driver);

	@When("^user enter application url$")
	public void user_enter_application_url() throws Throwable {
		String url = Filereadermanger.getInstance().getCrInstance().geturl();
		geturl(url);
	}
	@Given("^user enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
	 inputOnelement(pom.getLp().getUsername(), arg1);
	}

	@Given("^user enter  \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
		inputOnelement(pom.getLp().getPassword(), arg1);
	  	}

	@Then("^user verify the in the homepage$")
	public void user_verify_the_in_the_homepage() throws Throwable {
		clearOnelement(pom.getLp().getLoginbtn());
	    
	}


	
	
	
}