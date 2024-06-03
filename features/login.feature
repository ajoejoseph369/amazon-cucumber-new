Feature: Test amazon website functionality

  Scenario: Check if user is redirected to the login page
    Given user is on homepage
    When user clicks sign in
    Then user is redirected to login page

  Scenario: Check if user is able to login using their credentials
    Given user is on the login page
    When user enters <username> and clicks on continue button
    Then user enters <password> and clicks on sign in button
    Then user is redirected to homepage

    Examples:
      | username | password |
      |          |          |

  Scenario: Check if user is able to search for a product
    Given user is on the hompage
    When user clicks on the search bar and enters <product_details>
    And clicks on the search icon
    Then user is redirected to the product listing page

    Examples:
      | product_details                              |
      | Apple iPhone 15 Pro (256 GB) - Blue Titanium |

  Scenario: Check if user is able to view product details
    Given user is on the results page
    When user clicks on the product searched
    Then user is redirected to product description page

  Scenario: Check if able to add product to cart
    Given user is on the product description page
    When user clicks on add to cart button
    Then user clicks on view cart button
    Then user is able to view the cart
