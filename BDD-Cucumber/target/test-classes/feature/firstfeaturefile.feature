Feature: Facebook Login
  I want to navigate to facebook page,login using my user credentials and homepage should appear

  Background: User Login
    Given Visit the facebook URL

  @scene1
  Scenario: Facebook User Login
    When User Login credentials are entered
    Then Login should be successful

  @scene2
  Scenario Outline: Facebook User Login with invalid credentials
    When User Login credentials "<username>" and "<password>" are entered
    Then Login should be unsuccessful

    Examples: 
      | username | password |
      | abcdef   |    12345 |
      | asdfgh   |    24680 |
      | qwerty   |    13579 |
