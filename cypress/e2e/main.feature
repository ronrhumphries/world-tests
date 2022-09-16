Feature: World main functionality

  Scenario: User starts a world session by opening the world URL up in their browser
    Given a user has the world URL
    When the user navigates to the world URL
    Then the user sees the page titled World