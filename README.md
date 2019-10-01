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

## DB Migrate
When creating a new table for the data model a db-migrate script is needed to execute:
```
node .\node_modules\db-migrate\bin\db-migrate create <example-table>
```

## ESLint
In order to standardize and establish some code rules, ESLint will check the whole project recursively.
Therefore, a commit will not be merged into develop if it does not pass the ESLint rules. The command to run ESLint
rules is the following one:
```
npm run lint
```
## SonarQube (Code Quality)
To inspect the quality of our code we'll be using SonarQube locally and manually until we find a more comfortable way.

### Preconditions
1. Make sure that your __local dependencies are up to date.__
```
npm install
```
2. sonar related docker services are up and running.
```
docker-compose up
```
### Runing sonar
Execute on project's root
```
npm run sonar
```
### Analysis result
http://localhost:9000/dashboard?id=no-more-mena

### Other considerations
Sonar's default credentials are __admin/admin__

## Useful docker commands
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

# Running the tests
No test atm

# Deployment
Add additional notes about how to deploy this on a live system

# Versioning
for example, we should take a look:

 [SemVer](http://semver.org/) for versioning. For the versions available.

# Authors
* **THE Marc** - *Initial work* - [mmoralesdev](https://github.com/mmoralesdev)

## License
To be defined

## TEMPLATE
[Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md)
