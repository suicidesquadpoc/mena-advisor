const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options : {
       'sonar.sources': 'app',
       'sonar.inclusions' : 'app/**', // Entry point of your code
       'sonar.tests': 'app',
       'sonar.test.inclusions' : '**test.js'
      }
     }, () => {});
