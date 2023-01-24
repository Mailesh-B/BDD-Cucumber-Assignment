package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.HooksClass;

public class firststepdefinitionclass {
	//WebDriver driver;
	WebDriver driver = HooksClass.driver;
	
	@Given("Visit the facebook URL")
	public void visit_the_facebook_URL() {
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\0028R3744\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
		//driver = new ChromeDriver();
		driver.get("https://www.facebook.com");
	}

	@When("User Login credentials are entered")
	public void user_Login_credentials_are_entered() {
		driver.findElement(By.id("email")).sendKeys("test@test.com");
		driver.findElement(By.name("pass")).sendKeys("abcdefg");
		
	}

	@Then("Login should be successful")
	public void login_should_be_successful() {
		driver.findElement(By.name("login")).click();
	}

	@When("User Login credentials {string} and {string} are entered")
	public void user_Login_credentials_and_are_entered(String username, String password) {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.name("pass")).sendKeys(password);
	}

	@Then("Login should be unsuccessful")
	public void login_should_be_unsuccessful() {
		driver.findElement(By.name("login")).click();
	}
}
