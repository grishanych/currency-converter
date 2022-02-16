<h1 align="center">Сurrency exchange </h1>


---
- [Installation](#installation)
  - [Required to install](#Required-to-install)
  - [Clone](#Clone)
  - [Setup](#Setup)
  - [How to run local](#How-to-run-local)
  - [How to run Docker](#How-to-run-Docker)
- [Usage](#Usage)
  - [How to run tests](#How-to-run-tests)
- [Documentation](#Documentation)
  - [Rules and guidelines](#Rules-and-guidelines)
  - [Testing](#Testing)
- [Project deploy](#project-deploy)
- [Contributing](#contributing)
  - [git flow](#git-flow)
  - [issue flow](#git-flow)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Installation

- All the `code` required to get started
- Images of what it should look like

### Required to install

- NodeJS (16.13.2)

### Clone

- Clone this repo to your local machine using `https://github.com/grishanych/currency-converter.git`

### Setup

> install npm packages

```shell
$ npm install
```

### How to run local

1. Open terminal.
2. Run `npm i` to install all required packages.
4. Run `npm start` to run project.
5. Open http://localhost:3000 to view it in the browser.
or
1. Open terminal.
2. Run `npm i -g webpack webpack-cli` to download webpack.
3. Run `npm i` to install all required packages.
4. Run `npm run devWebpack` to install all required packages.
5. Open http://localhost:8080 to view it in the browser.



### How to run Docker

## Usage

### How to run tests

To run unit test open terminal and run `npm run test` in it.

---

## Documentation

### Rules and guidelines



### Testing

#### Components

Order of testing components:


##### Don’t test:

- third-party libraries
- constants
- static css styles
- related components (test only one specific component at the specific moment of time)
- How to test:
- testing using snapshots (actual ui)
- testing logic of component (dynamic)


##### What to test in components:





## Project Deploy

#### Deploy Сlient part: https://

#### Deploy Admin Part: https://

---

## Contributing

#### Here is our [wiki](https://), where you can find guide about project running.

---

Before sending any pull request, please discuss requirements/changes to be implemented using an existing issue or by creating a new one. All pull requests should be done into `main` branch.


---

### Git flow

We have **main** and **develop** branches.  
All **feature** branches must be merged into [main](https://github.com/grishanych/currency-converter/tree/develop) branch!!!


#### Step 1

- **Option 1**

  - 👯 Clone this repo to your local machine using `https://github.com/grishanych/currency-converter.git`

- **Option 2**

  - create new branch from development branch

#### Step 2

- add some commits to your new branch

#### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/grishanych/currency-converter/compare" target="_blank"github.com/grishanych/currency-converter</a>.

---

### Issue flow

#### Step 1

-go to [!issues](https://github.com/grishanych/currency-converter/issues) and click `New issue` button

#### Step 2

when creating [issue](https://github.com/grishanych/currency-converter/issues/new) you should add name of the issue, description, choose assignee, label, project. If issue is a `User Story` you should link it with corresponding tasks, and corresponding tasks should be linked to issue.

#### Step 3

if issue is in work it should be placed in proper column on dashboard according to its status.

---

## Teams

### Development team
[![@Grygorii Nych](https://avatars.githubusercontent.com/u/32013116?s=100&v=4)](https://github.com/grishanych)

## FAQ

- **How do I do _specifically_ so and so?**
  - No problem! Just do this.

---

## Support

---

#### License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://softserve.academy/" target="_blank"> SoftServe IT Academy</a>.

[MIT](https://choosealicense.com/licenses/mit/)

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)


