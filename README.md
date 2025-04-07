# Creating Ai mock interview platform

# Step-1 Creating ui using Shadcn
    1. Installing shadcn and some components also
    2. Create a dynamic form page 
    3. In components folder creating reusable components for form fields and authform

# Step-2 Creating Home page
    1. Importing all the necessary objects from the constants file in InterviewCard file
    2. In Utils.ts file creating a function to get random devicons and cover image
    3. In page.tsx importing all the files

# Step-3 Firebase Setup
    1. Go to the console and create new project
    2. go to authentication and select the type of authentication
    3. Go to the web and add web name and follow steps
    4. Create firebase folder in src and add everything
    5. Go to the project overview and open the project setting s and in service account create new private key
    6. add project id, privatekey and client email in .env file
    7. Go to the documentation and check the admin sdk to interact with the firebase
    8. Checkout the admin.ts file for the authentication

# Step-4 Setup of SignUp and SignIn page
    1. Created auth.action.ts ▶️ /lib/actions folder to handle sign up and sign and token
    2. In authform sending user data
    3. in root layout and auth layout protectng the routes by checking is token present or not

# Step-8 Interview Page
    1. Created a folder interview inside the root folder

# AI Workflow
    As When the interview ends the vapi send every info to the api and than that api sends all the data to gemini which gemini will response and than that response again goes back to the api where all the data is going to be stored in the database

    Using ai-sdk to handle the request and response from ai tool

# Step-8 Setup of API
    1. Create a api folder in app folder 
    2. Setup of post request which going to take every single data and store in the firebase

# Step-9 Vapi Workflow
    1. create you workflow 
    2. First gather all the info you want make sure name are case-sensitive ao its better to write in lowercase
    3. make sure output required.
    4. Than use the deployed url and paste in api(after making gather click on plus button and click on api)
    5. paste the link of your vapi route where it is taking user info
    6. In last end call 
    7. Go to the aassistant and live the workflow and than click on call and checkout is it working or not
    8. In last .env file add the vapi workflow id 
    9. Update the vercel also


# Step-10 Vapi Agent
    1. getting current user in page.tsx of interview folder
    2. In Agent.tsx configuring the vapi agent.

 # Step-11 Show GeneratedInterviews
    1. Build 2 api to get the latest interview in auth.action.ts
    2. In root  page.tsx calling both the api parallel using promise.all
    3. U will get to error make sure te error will  u on a firebase link and than save the indexes


# Step-12 Interview Session
    1. Created a dynamic page in interview folder
    2. In Agent.tsx checking if call ended than checking the type and handling responses according to the type

# Step-13 Create Feedback
    1. Created a api to create feedback and getfeedback by interview id in general file
    2. In Agent.tsx file  in handlefeedback handling the feedback
    3. In feedback folder get the feedback by interview id
