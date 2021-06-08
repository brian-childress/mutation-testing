# Mutation Testing using Stryker

Mutation testing is a testing pattern growing in popularity and is designed to test the tests that test your code. Basically, the mutation software, [Stryker](https://stryker-mutator.io/) in this case, with go through our code and "mutate" the code, then run our test suite to see if the tests are able to detect the change. If any test fails after a mutation has occurred the mutation test successfully passes. If however the mutation is *not* detected by an existing test the mutation test fails. The goal is to have a high mutation test score.

This example application is setup with a basic range.js JavaScript file. The single function is designed to return a boolean if a provided number in between two other numbers. While the concept is simple the mutation testing framework reveals the importance of proper input validation.

To run the application:

Using Docker

```sh
docker run -it --rm -v $(pwd):/api -w="/api" node bash
```

```sh
npm run stryker
```

This will generate a **reports/** directory. Open the reports/index.html, to view the report.