pipeline {
    agent any
    stages {
        stage('Pull Latest Code') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker version'
            }
        }
        stage('Deploy Docker Containers') {
            steps {
                echo 'Starting Docker containers...'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Testing the service...'
            }
        }
    }
}
