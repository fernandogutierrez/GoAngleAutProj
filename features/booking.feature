Feature:

  Background:
    Given I open site 'http://shoot-my-traver.herokuapp.com'

  Scenario: Make a booking
    Given I select 'London, England' as destination
#    And I select 'September 5, 2019' as date
    And I select '09:00am' as starting time
    And I click on 'Search'
    And I select photographer 'tester'
    And I click on 'Continue'
    And I select package 'Two Hours Package'
    And I click on 'Continue'
    And I click on 'Proceed to Payment'

#    And Select a photographer



