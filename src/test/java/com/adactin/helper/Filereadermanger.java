package com.adactin.helper;

import java.io.IOException;

public class Filereadermanger {
	
	private Filereadermanger()
	{
		
	}
	public static Filereadermanger getInstance()
	{
		
		Filereadermanger fr =new Filereadermanger();
		return fr;
	}
	
	public Configurationreader getCrInstance() throws IOException {
		Configurationreader cr=new Configurationreader();
		return cr;
	}
}
