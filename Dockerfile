# Use the official Node.js image from Docker Hub
FROM node:lts-alpine

# alpine image does not have bash

RUN apk update && apk add bash 

# Install Angular CLI globally
RUN npm install -g @angular/cli@17

# Create and set the working directory inside the container
WORKDIR /app

# Expose the port that the Angular application will run on
EXPOSE 4200

# Default command to keep the container running so that when we run
#Keeps the Container Running: If a container doesn't have any running processes, 
#it will exit immediately. By using bash, the container stays running 
#because Bash will keep the terminal open and wait for user input.

#Allows Interactive Use: With this setup, when you start the container interactively 
#(using -it flags), you get a Bash shell inside the container right away, 
#which lets you run commands directly.
#Customizing the Entry Point: The CMD instruction specifies the command that will 
#run by default if no other command is provided when you start the container.
#However, if you specify a different command in the docker run command, 
#that will override the CMD.
CMD ["bash"]

# docker build -t testapp . 
# docker run -it --name NAVEOFCONTAINER --rm -v ${PWD}:/app -p 4200:4200 testapp
# ng serve --host 0.0.0.0 
# Without specifying --host 0.0.0.0, the server binds only to the container's internal localhost, which isn't exposed to your host machine. 