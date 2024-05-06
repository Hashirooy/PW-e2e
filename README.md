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

## Api reference

### BaseAPi

This class contain all base methods to work with requests.
The main method is httpRequst. It's get 2 parameters(url, options). The option comprises of 3 patameters(method, body, token).

Methods postReq and getReq was implemented to work with server.They invoke httpRequest for sending and working with API.

### Posts

#### Get all Posts

Get the full list of posts provided by the API.
Response
Response with 200 OKstatus and the collection.

```http
  GET https://freefakeapi.io/authapi/posts
```

| Parameter                                                  | Type | Description |
| :--------------------------------------------------------- | :--- | :---------- |
| Nothing in the request body, the get request MUST be empty |

#### Get item

Get a single post resource provided by the API.

Parameters
Replace {id} in the url by the id of the post you want to get, like /authapi/posts/3

Nothing in the request body, the get request MUST be empty

Response with 200 OK status and the resource.

```http
  GET https://freefakeapi.io/authapi/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

### Users

#### Get all Users

Get the full list of posts provided by the API.
Response
Response with 200 OKstatus and the collection.

```http
  GET https://freefakeapi.io/authapi/users
```

| Parameter                                                  | Type | Description |
| :--------------------------------------------------------- | :--- | :---------- |
| Nothing in the request body, the get request MUST be empty |

#### Get user

Get a single post resource provided by the API.

Parameters
Replace {id} in the url by the id of the post you want to get, like /authapi/users/3

Nothing in the request body, the get request MUST be empty

Response with 200 OK status and the resource.

```http
  GET https://freefakeapi.io/authapi/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Running Tests

To run tests, run the following command

```
npm run e2e
```

Then running test was finished this command for genereting allure report:

```
npm run allure
```
