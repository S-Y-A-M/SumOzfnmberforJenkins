pipeline {
    agent any

    tools {
        nodejs 'NodejsforJenkins'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/S-Y-A-M/SumOzfnmberforJenkins'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
           steps {
              sh 'npx eslint .'
            }
        }

        stage('Test') {
            steps {
              sh 'chmod -R +x node_modules/.bin'
              sh 'npx jest'
            }
            post {
              always {
                 junit 'reports/junit.xml'
                }
            }
        }
    }
}
