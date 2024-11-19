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
                sh 'docker-compose build'
            }
        }
        stage('Deploy Docker Containers') {
            steps {
                echo 'Starting Docker containers...'
                sh 'docker-compose up -d'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Testing the service...'
                // Simple test to verify the service is running
                sh 'curl --fail http://localhost:3000 || exit 1'
            }
        }
    }
    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
