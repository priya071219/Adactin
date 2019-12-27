package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


public class Configurationreader {
	public static Properties ps;

	public Configurationreader() throws IOException {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\java\\com.adaction.properties");
		FileInputStream fis=new FileInputStream(f);
		ps=new Properties();
		ps.load(fis);	
		}
	public static String browsername() {
       String browser = ps.getProperty("browsername");
       return browser;
	}
	public static String geturl()
	{
		String url = ps.getProperty("url");
		return null;
		
	}
	
	
}

