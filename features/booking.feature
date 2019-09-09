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
    And I set an email address 'tester19@email.com'
    And I set a password 'tester'
    And I click on 'Continue'
    And I insert First Name 'tester01'
    And I insert Last Name 'testerlastname'
    And I select Type of Tour 'Single'
    And I select How did you hear about us 'Google'
    And I select I Agree to Angle Terms of Service
    And I click on 'Continue'
#    And I insert a Name on Card 'Tester01'
    And I insert the Card Number '4242424242424242'
#    And I insert the Exp Date '05/25'
#    And I insert the CVV '4545'
#    And I click on 'Continue'
#    And I click on 'Purchase'





