pipeline {
    agent any

    tools {
        nodejs 'NodejsforJenkins'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/S-Y-A-M/SumOzfnmberforJenkins'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
