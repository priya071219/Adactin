package com.adactin.stepdefinition;

import java.io.IOException;

import com.adactinbasclass.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {
	
	@Before
	 public void beforescenario(Scenario scenario) {
		System.out.println("Scenario Name:" +scenario.getName());
     
	}

	public void afterscenario(Scenario scenario) throws IOException {
		if (scenario.isFailed()) {
			String id = scenario.getId();
			System.out.println("scenario id is"+id);
			takescreenshot(id);
			}
		System.out.println("Status     "+scenario.getStatus());
	}
	 
}
