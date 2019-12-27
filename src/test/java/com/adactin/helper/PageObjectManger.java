package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.Loginpage;

public class PageObjectManger {
	public static WebDriver driver;
	private Loginpage lp;

	
  public PageObjectManger(WebDriver driver) {
     this.driver =driver;
  }

	public Loginpage getLp() {
		return lp;
	}
	
	
	
	

}
