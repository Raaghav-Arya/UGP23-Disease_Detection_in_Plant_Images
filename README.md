# UGP23

This repository contains the Undergraduate Project undertaken in their senior year by:

1. **Raaghav Arya**, Department of Electrical Engineering, IIT Kanpur'24
2. **Apeksha Agrawal**, Department of Economics, IIT Kanpur'24

**Mentor:** Dr. Tushar Sandhan, Assistant Professor, Department of Electrical Engineering, IIT Kanpur

## Installation 
Clone the directory from github on your local machine and run the following scripts to set-up your environment.   
You must have python and nodejs already installed in your machine.  
1) For Python  
Create a virtual environment and install the required libraries using requirements.txt
```powershell
# Recursively install dependencies
pip install -r requirements.txt
``` 

2) For nodejs
Open the directory **front** in the terminal and run the following command:  
```powershell
npm install
``` 

## Run Application  
1) To run the backend, open the root directory in your terminal and run "**app.py**"

2) To run the web application, cd to **front/** and run the following command
```powershell
npm start
``` 
This will open the web application on the local server in default browser.  

## ML Model Integration  
The **app.py** script is commented with where to add the code. 
1. Import the model as a python function in the app.py script.
2. In the commented area, run the function imported. All the images uploaded by the user are in the folder **uploads/**
3. The disease name identified should be returned to the variable **disease_name**
4. The images to be uploaded should replace the input image in the uploads folder.
