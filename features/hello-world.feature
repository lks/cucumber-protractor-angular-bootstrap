Feature: Display Hello World
  In order to begin to work with Angular
  As a newbie
  I need to be able to display an Hello World

  @dev
  Scenario: Display Hello World
    Given I am a newbie
    When I display the app
    Then I should see "Hello World"