$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2465481200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 77442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterUsername(String)"
});
formatter.result({
  "duration": 136165000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 75863800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 103709300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.after({
  "duration": 715659000,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Products Test",
  "description": "As a user I want to check that there are six products displayed on the products page",
  "id": "products-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1298061500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify the text \"Products\" on products homepage",
  "description": "",
  "id": "products-test;verify-the-text-\"products\"-on-products-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the productsHomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered successfully the username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I entered successfully the password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify the product text is displayed on the page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should verify that six number of products are displayed on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.iAmOnTheProductsHomePage()"
});
formatter.result({
  "duration": 62200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 37
    }
  ],
  "location": "ProductsSteps.iEnteredSuccessfullyTheUsername(String)"
});
formatter.result({
  "duration": 104352400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 37
    }
  ],
  "location": "ProductsSteps.iEnteredSuccessfullyThePassword(String)"
});
formatter.result({
  "duration": 77671600,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iClickedOnLoginButton()"
});
formatter.result({
  "duration": 87315300,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.iShouldVerifyTheProductTextIsDisplayedOnThePage()"
});
formatter.result({
  "duration": 50271400,
  "error_message": "org.junit.ComparisonFailure: Products expected:\u003cProducts[]\u003e but was:\u003cProducts[ text is not displayed]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.saucedemo.steps.ProductsSteps.iShouldVerifyTheProductTextIsDisplayedOnThePage(ProductsSteps.java:39)\r\n\tat ✽.And I should verify the product text is displayed on the page(products.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProductsSteps.iShouldVerifyThatSixNumberOfProductsAreDisplayedOnThePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 909967500,
  "status": "passed"
});
});