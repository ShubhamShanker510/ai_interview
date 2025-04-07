# Creating Ai mock interview platform

#   env file
##  name-> .env.local
    FIREBASE_PROJECT_ID="prepareai"

FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCjoyfD9UGsh/9k\nDcQEbzeCM7W465gMgxZp9e/89C61DKJsMGz0izaOpUaab/tHrITDpPVCsU8XbBws\noi6uWoPNAtv6GuLG7TFIhZDjjkjsGhjZqTYXP+/U55Lb6mAhznorfLZMwd3ZbqOv\nekF4Q6arPtZuRFdtVY4yh9pqRLfL8XcBwW3EHvjU3QscRZpv2GCGzWGofEOqgrVy\nB0jA815e+wxYajGJyjU7ZUopSQoMSX46E339Ywdlj+hXMKV/Nv0n/YhnLLjAnc6K\n/en7PoG08AmwY7a2Glz18iXy1OEhYSWb1c4LHlv1g6LwNxRLC2CV3LhIoA3IZDr5\nIoxqvhK5AgMBAAECggEAAXiwlpZ1GgpvqMsIylu7xQxTW2xHjKJOZQcbfghxV3/A\nle+7A4HTEZvvYm/RIsqK7ZveftRZBcZRJh6mmEiPIr45XYjakUuuF+2/VOTtHwwS\ntoA9mtst9X7VsiG1+7EaaUqk5x429InXDMF7JwVUSrankjs2WuNi9NlCur6jjOJ+\nmxXwWgybUx9NbxmF8JgPHTlynj/MRzphyCHdKOtwjH+6GJULY1Yf6jKBUwqhkdee\nTDMnJueyP6npiy7fVXv882tJR81akug++RJd9u8gomW8nnVjJq89+J1x2XbjD6br\nusde9Ckt7zgLG72rkLtSd17vQQ3zxsOZ2IHljLQWnQKBgQDM79rlGmMn3DFQ3zis\ne+JWZTKlIqJdHXF/HMJmzuxCK5Pf9wh3HkgvvRC1Hel4+I/P4q1B4uxjQi9toFGb\nnp4lOnm9I9YI7WP6wzU6KqddjcoasfeHrdSVL/2It8AxvrvufdYtkgdaP1RfFN7I\nJcPObwUagBCgMNZpG4pC+Z4MQwKBgQDMaPSzsmTdaZJQOs4+fr3aqIcqToYymxfF\nDQPYzXu86ReInRuwJh+xFGHp27kEQydLmvhoKJcb2poM6AeIkVmqhwHa+jiBBmF0\npT/4tZJeCxgAslS2cW7POF2VXAzAe0bmCY+TamwhhjokmuAQTEO8PTvxd72MVEN0\nfZzJ/ipzUwKBgHlmsS481nZba190DJeo/6icZEcM4E/2zDA3sjXC6JQ+SmhHZ91g\ns/SLtKUGJjOCU3cb2fUI323hXEU9zno4mYiGPm28F+PL9QkssJBXijPSdeIggPkA\nEcma1z8xUwpk6eFa7BCsy+w7TdjRfTPlozvb6pMLQE4VAD7dkKciRe0PAoGAUOT4\ncmUXJcix7q5XEMR3viET3NpWoZBfR8xuyU4IuipE9fu3CW8M+7dlSHd8MQOieXlK\n9W2a35sTfCgXUySyp5nmUhLUabtstgzv1C2HT1B0n1Hz1H/vqnJUFtfm9AXVeRQv\njdeAE4RbXkEsi0ajR8uz/Uu15+MxDtjnQ8kiY6ECgYAWR9qLZOQoofq+W3diA9J1\nkt+Ilo8lMzUMQoAfQ1xPB3Fq0KbJr8CDWzjZpE0vgzFJG3WTepoCAmHHrdUfFa4h\nUWl3Y643I0Xh1l1eFPN9uIltA1brWCDHCcZrTo8s1I6F2kXxjjnwCWYb3d0RuCZ7\nlF7gHR8wg3awxOa3bB6q8g==\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-fbsvc@prepareai.iam.gserviceaccount.com"
NODE_ENV="production"
GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyAQ8PK7TYXkbrFORxOPd2WsfqobWxI2LZo"
NEXT_PUBLIC_VAPI_WEB_TOKEN="9f6ae620-09da-4022-a345-6fd49eb90b04"
NEXT_PUBLIC_VAPI_WORKFLOW_ID="cd769dbc-2fef-4ef2-8d6b-660e6309d523"


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
    4. Created a UI of a feedback page