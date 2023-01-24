package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/feature",
		glue = {"stepdefinition","hooks"},
		dryRun = false, //shows the steps from feature file in the console,code won't be executed,only the mappings will be exposed.
		tags = {"@scene2"},
		monochrome = true, //shows the formatted output in console
		plugin = {"pretty","html:target/htmlreport","json:target/report.json","junit:target/cucumber/cucumber.xml"}
		
		)
public class firsttestrunnerclass {

}
