package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass {
	
	public static WebDriver driver;
	@Before
	public void initialization() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\0028R3744\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Driver Initialization");
		//driver.get("https://www.google.com");
		
	}
    
	@After
	public void termination( ) {
		driver.quit();
		System.out.println("Driver termination");
	}
}
