Feature:

  Background:
    Given I open site 'http://shoot-my-traver.herokuapp.com'

  Scenario: Make a booking
    Given I select 'London, England' as destination
    And I select 'September 5, 2019' as date
    And I select '09:00am' as starting time
#    And I click on Search
#    And Select a photographer



