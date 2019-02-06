# node-express-test
## Simple web app to verify deployment in a node environment

This is a simple verification web app to validate that node and express are running properly in an environment. 

### Purpose
I wanted a quick way to validate a IISNode module installation for windows boxes.

### Usage
1. Clone repo 
2. Change directory to the new node-express-test directory
3. Run `npm install` to install the required dependencies
4. Run `npm start` to launch the app
6. Navigate in your browser to http://localhost:3000

#### Docker
Alternatively, you can use docker. A Dockerfile is included in the repo.

1. Clone repo 
2. Change directory to the new node-express-test directory
3. Install docker on you system if it doesn't exist https://www.docker.com/get-started
3. Run `docker build -t node-express-test:v1 .`
4. Run `docker run -d -p [PORT]:3000 --name node-express-test node-express-test:v1` ([PORT]] can be any available port ie: 8080)
5. Navigate in your browser to http://localhost:[PORT]

### Example
```javascript 
git clone https://github.com/bergerinc/node-express-test.git
cd node-express-test
npm i
npm start
```



