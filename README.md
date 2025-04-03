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