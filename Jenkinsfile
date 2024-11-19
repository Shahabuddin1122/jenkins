pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Shahabuddin1122/jenkins.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Run Docker Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
        stage('Post-Deployment Test') {
            steps {
                sh 'curl http://localhost:3000'
            }
        }
    }
}
