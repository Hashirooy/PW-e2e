# playwright-e2e

## Some information about project

I am using a base page class for e2e testing in Playwright is a design pattern. This pattern is particularly useful in end-to-end testing where you might have multiple tests that interact with the same web application.

For connecting to db I'm using Sequelize librirary. Thic connection implements in utils/database.ts. On local virtual machine i installed postgress and create table Users(wich contains some information about this users as password, login, description).

BaseApi class was created for api testing. This class contains basic methods for working with request.

Also I installed Gitlab on VM. In project you can see gitlab-cy file, wich i using for ci/cd.

## Getting started

This is a pet project for automation testing. Use:

```
git clone https://github.com/Hashirooy/playWright-2e2.git
```

for copy remote repository.

## Installing dependencies

Let's install dependencies for runnnig this tests:

```

npm install
npx playwright install //install playwright
npm install -g allure-commandline

```

## Run tests and generete allure reports

Use this command for starting all tests:

```
npm run e2e
```

Then running test was finished this command for genereting allure report:

```
npm run allure
```
