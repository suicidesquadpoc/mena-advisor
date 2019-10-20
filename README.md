# Project Title
First proof of concept

## Getting Started
1. Install Docker on local machine

2. Run the docker-compose found at the project's root
```
docker-compose up -d
```

3. Setting up the environment variables
```
cp sample.env .env
```

4.  Install all the required modules
```
npm install
```

5. Update your local DB
```
db-migrate up
```
or in case you did not add the modules to your path.
```
node .\node_modules\db-migrate\bin\db-migrate up
```

6. Start the app
```
npm start
```
7. If the result is an empty array, then everything is alright!
```
curl localhost:3000/coordinates
```
* ```[]```

### DB Migrate
When creating a new table for the data model a db-migrate script is needed to execute:
```
node .\node_modules\db-migrate\bin\db-migrate create <example-table>
```

### Execute workflow
The workflow is the ESLint + Test execution embedded into a single command.
Before committing any change, the workflow should be executed.

```
npm run workflow
```

### Running the tests
Mocha, Chai and Supertest are used for Test coverage.

- Mocha is a test runner for NodeJS, used to define test cycles and scenarios. (https://mochajs.org)
- Chai offers a more human like language to do assertions, expects, etc. (https://www.chaijs.com)
- Supertest is used to consume the API Endpoints through HTTP requests. (https://www.npmjs.com/package/supertest)

All the test should be executed before commiting any code through the following command:
```
npm test
```

### ESLint
In order to standardize and establish some code rules, ESLint will check the whole project recursively.
Therefore, a commit will not be merged into develop if it does not pass the ESLint rules. The command to run ESLint
rules is the following one:
```
npm run lint
```

### Useful docker commands
* List all docker images
```
docker ps
```
* Start docker image
```
docker-compose start
```
* Stop docker image
```
docker-compose stop
```
or
```
docker-compose down
```

### Deployment
Add additional notes about how to deploy this on a live system

## Versioning
for example, we should take a look:

 [SemVer](http://semver.org/) for versioning. For the versions available.

## Authors
* **THE Marc** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

## License
To be defined

## TEMPLATE
[Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md)
