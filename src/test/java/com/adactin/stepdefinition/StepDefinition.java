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
	

	@When("^user enter \"([^\"]*)\" as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
	    
		inputOnelement(pom.getLp().getUsername(), arg1);
	    
	}

	@When("^user enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
	    
		inputOnelement(pom.getLp().getPassword(), arg1);
		// Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^user verfiy the username in the homepage$")
	public void user_verfiy_the_username_in_the_homepage() throws Throwable {
		clickOnelemant(pom.getLp().getLoginbtn());
	    
	}

	@When("^user enter aarthyrajeev as a username$")
	public void user_enter_aarthyrajeev_as_a_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		inputOnelement(pom.getLp().getUsername(), "poojapriya");
	}

	@When("^user enter  abc(\\d+) as a password$")
	public void user_enter_abc_as_a_password(int arg1) throws Throwable {
	
		inputOnelement(pom.getLp().getPassword(), "test123");
	    
	}
	
}