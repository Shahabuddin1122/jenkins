pipeline {
  agent any
  
  stages {
    stage("build") {
      steps {
        echo "building the application......"
        nodejs("NodeJs-23.2.0") {
          sh 'cd backend'
          sh 'npm i'
        }
      }
    }
    stage("test") {
      steps {
        echo "testing the application......"
      }
    }
    stage("deploying") {
      steps {
        echo "deploying the application......"
      }
    }
  }
}
