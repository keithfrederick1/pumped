# The Pumped Gym

### Overview

This application was created to provide a user with the ability to create a 
workout plan that fits their needs. It stores differnt plans that the user 
creates with exercises the user chooses. some exercises have been provided 
on the app already if the user doesnt exactly know where to begin. Each
users' workout plans will be stored to a database. They can then fill out
their weekly gym schedule with the created plans from **_Calendar_** in the 
**_Services_** dropdown. On the homepage there are seven categories of 
workouts upon clicking one of these categories, a small list of recommended 
exercises will appear that can be added to a new workout plan or an old 
one. there is a larger list of exercises in the **_Services_** dropdown 
option **_Workouts_**. If the user would like to a workout that is not on 
the list they have the option to create an new one with the 
**_Create Your Own Workout_** option. To start a new workout plan the user
 can click on the **_Workout Plans_** tab .After a workout, the user may 
 create a **_Workout Log_** that can get saved to their **_Profile_** page. 
 The **_Profile_** page will contain the users Username, Created Workouts, 
 Workout Plans, and the Logs. The users profile can be made with the 
 **_Signin_** page.

 ### Starting application

Navigate to the pumped directory, and execute the following steps in the 
terminal: 1. Make sure a MySQL service is running by entering ‘mysql.server
 start’. 2. Type ’npm install’ to install dependencies for this 
 application. 3. Enter ’npm run build’ to start the compile process with 
 Webpack. 4. In a separate terminal, enter ‘npm start’. This will execute 
 the file ‘server/index.js’ via Nodemon. 5 You can then go to the server 
 the application is running on to see the app(http://localhost:3000/).

### API info 

you can access all functionality need without an API key. all you will need
is this route (https://wger.de/api/v2/). more information on this can be found in '\client\src\config\api.js'.
