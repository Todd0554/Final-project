# MyWay---------Travel Blog APP
### Github repo of developing: https://github.com/Final-Project-CoderAcademy/Final-project  


### App URL (deployed by Netlify): https://radiant-belekoy-ffd379.netlify.app/
Unfortunately, Netlify is not free for custom domain name, for making sure that the App's URL is continuously working, we use the random Netlify URL.  
- Deployed Frontend Github repo: https://github.com/Todd0554/myway-frontend

### ~~Backend API URL (deployed by Heroku): https://myway-backend.herokuapp.com/~~   

### Redeploy by using Railway:
URL: https://myway-backend-railway-production.up.railway.app/  
For more please read the repo below

- Backend Github repo: https://github.com/Todd0554/myway-backend-railway

### Presentation Youtube video: https://www.youtube.com/watch?v=Mr58dk1vJyI

## How to start the app in local side

This app uses yarn to control the package.json. There is a package.json in the root path to control both backend and frontend folder. Before start this app in local side, there are some scripts need to be introduced. When this repo is cloned to the local side, `yarn install` need to be run. Then, some other scripts with the demonstration are shown below:

- `yarn install:all` ----------run `yarn install` both in the folder of backend/ and frontend/

- `yarn start` ----------run the backend server.js

- `yarn server` ----------run the backend server with nodemon

- `yarn client` ----------only run the react app in frontend/ path
- `yarn dev` ----------run both `yarn server` and `yarn client` only for developing, after the frontend start to use heroku API, this script can be ignored.

**_When you decide to run the script below, please make sure there is no useful information in the database._**

- `yarn data:import` ----------clear the database and import some example data(you can check these data in backend/data)  
***The initial data can be found in backend/data/ folder.*** Admin users can't be registered directly, and they only can be set in backend or database, so please use the default admin user to test admin functionality.  
`email: admin@example.com`  
`password: 123456`
- `data:destroy` ----------destroy all the data in the database

Test scripts:

- `yarn api:test` ----------to test great majority of the backend APIs with Jest

For frontend testing, please make sure run `yarn client` to start the frontend

- `yarn frontend:test` ----------to test frontend code with cypress

For more details, please read the scripts in package.json in different path.  

## Environment Variables  

- This app need environment variables, for more please contact with the authors. 

## Testing

- Backend testing:  
  The Jest and supertest are used for backend testing. Here is the result of backend test. For more, please use `yarn run api:test` in root path.
  <details>
  <summary>Backend testing result screenshot</summary>

  <summary>

  ![backend testing](./docs/backend-testing-result.png)

  </details>

- User testing (development environment):  
  For user testing in the development environment, a testing framework called Cypress was used. For more, please use `yarn run frontend:test` in root path after running `yarn run dev` in the root path or `yarn start` in the frontend folder.
  <details>
  <summary>E2E testing result screenshot</summary>

  <summary>

  - Authorization testing  
    ![frontend-testing](./docs/Frontend-test-screenshots/Authorization.png)

    [Click here to watch video](./frontend/cypress/videos/Authorization.cy.js.mp4)

  - NavBar testing
    ![frontend-testing](./docs/Frontend-test-screenshots/NavBar.png)

    [Click here to watch video](./frontend/cypress/videos/navbar.cy.js.mp4)

  - About (Home top page testing)  
    ![frontend-testing](<./docs/Frontend-test-screenshots/About(TopPage).png>)

    [Click here to watch video](./frontend/cypress/videos/topPage.cy.js.mp4)

  - Admin menu testing  
    ![frontend-testing](./docs/Frontend-test-screenshots/AdminMenu.png)

    [Click here to watch video](./frontend/cypress/videos/AdminMenu.cy.js.mp4)

  - Sites testing (Find Your Way page)
    ![frontend-testing](./docs/Frontend-test-screenshots/SiteListPage.png)

    [Click here to watch video](./frontend/cypress/videos/sitesList.cy.js.mp4)

  - User menu testing  
    ![frontend-testing](./docs/Frontend-test-screenshots/MyHome.png)

    [Click here to watch video](./frontend/cypress/videos/MyHome.cy.js.mp4)

  - All result  
    ![frontend-testing](./docs/Frontend-test-screenshots/result.png)

  </details>

- User testing (production environment):  
  For production environment user testing, we used manual testing by client user and the results are summarised in the spreadsheet. Also, we fixed the failed testing problem.  
  [Here is a link for the spreadsheet: ](https://docs.google.com/spreadsheets/d/1XP-CVkNlFWM_INf1QLRGMDf-FS5OfmJuNzIzQ52CLyY/edit#gid=1838308451)  
  There are 4 testing sheets as you can see:  
  ![test-list](./docs/testing-list.png)

## Libraries

### Backend

- "aws-sdk": used to set aws SDK, but the time is limited, the AWS feature will be added in the future. I decide to connect aws with multer for uploading the image.
- "bcryptjs": secret the passwords
- "colors": make the server beautiful and show some hints more clearly
- "cors": set the visiting permission for different address
- "dotenv": environment variables using
- "express": build server
- "express-async-handler": automatically catch the error during using async functions
- "express-validator": a set of express.js middlewares that wraps validator.js validator and sanitizer functions
- "helmet": use to secure the Express server
- "jest-environment-jsdom": for jest testing
- "jsonwebtoken": for creating tokens
- "mongoose": for creating the model schema for the objects which will be created in the app
- "multer": uploading and download image
- "nodemon": automatically update the app changes when modify some codes
- "supertest": for testing and is used with jest
- "jest": for testing
- "@babel/plugin-transform-modules-commonjs": babel settings for commonJS

### Frontend

- "react": The UI creation for this application uses react, a JavaScript library specialising in UI creation.
- "react-dom": It is used to reflect the React virtual DOM in the browser DOM.
- "react-redux"・"redux": The action from the user is dispatched to the store and the dispatched action and state are passed to the Reducer. Redux is used to manage the state of the UI handled by ReactJS.
- react-router-dom: It is used to route based on the path of the URL accessed by the browser and display the components associated with the path. This allows components such as <Link /> to be used.

- "redux-devtools-extension": It is used to visualise Redux state management from a browser extension.
- "redux-thunk": It is used as middleware to implement asynchronous processing in Redux's Action Creator.
- "web-vitals": It is a key indicator of a site's health and is used for SEO and to enhance the user experience on the site.

- "@googlemaps/js-api-loader": For dynamically loading Google Maps JavaScript API scripts.
- "axios": Promise-based HTTP Client library used to retrieve data from the server using GET and POST HTTP requests, and to add, update and delete data through sending data to the server.

- "bootstrap・react-bootstrap": Front-end web application framework for creating websites and web applications. It's used for designing and styling this websites.

- "cypress": It is a front-end testing tool in JavaScript, which is used to perform E2E testing.

## About Application

- **Purpose**  
  The purpose of this application is to help travelers make the best of their trip. It provides travelers with the best places to do what they want to do, and allows them to share and reflect on their memories by sharing blogs. It also has the ability to search the weather of a destination from any screen without logging in, which is not found in other applications.

- **Target audience**  
  The target audience is people who like to travel.

- **Tech stack**  
  This app is based on MERN stack.
  On the front-end side, a dynamic HTML web interface is created by React.
  The server-side development environment is Node.js, which enables the implementation of a JavaScript-based application backend. Express.js runs on Node.js and serves to simplify the processing of URL requests. MongoDB is the application's database, which manages data such as storing, updating, referencing, and deleting data in the application.

- **Functionality / features**  
  **a. For visitors without log in:**

  1. Visitors can create their own account and update their details including 'name', 'email' and 'password' anytime.
  2. Visitors can get information including map, descriptions and name of the sites recommended from the web app, but can't comment.
  3. Visitors can check the weather of each city in Australia in each page.

  **b. For normal users already log in:**

  1. Users can get information including map, descriptions and name of the sites recommended from the web app and comment these recommendations.
  2. Users can post blogs and check all the blogs from themselves together in blogScreen. In addition, they can delete their blogs anytime. Each blog can be posted with one image.
  3. Users can comment other users' blogs.
  4. Users can check the weather of each city in Australia in each page.

  **c. For admin users:**

  1. Admin users have all the functions same as normal users.
  2. Admin users can manage the site recommendations, they can delete, create and update the information of site recommendations.
  3. In addition, admin users can manage all the normal users. If admin users find some normal users post illegal information in their blogs, they are able to delete normal users.
  4. Admin users are able to delete blogs as well.

## Dataflow Diagram

<details>
<summary>show image</summary>

<summary>

![dataflow diagram](./docs/Dataflow_Diagram.jpeg)

</details>

---

## Application Architecture Diagram

<details>
<summary>show image</summary>

<summary>

![application architecture diagram](./docs/Application_Architecture_Diagram.jpeg)

</details> 
   
---
  
## User Stories  
[Excel sheet for user story](https://onedrive.live.com/view.aspx?resid=6E0FC3D2BFB74104!129&ithint=file%2cxlsx&authkey=!AG1EELNirMpapYc)  
All the user stories are start as a traveler. We assume that if we are a traveler, what we want to get from this web app. Then, we assume that if we are the owner of this app, how can we manage it. Finally, we add a few more features we'd like to see as a normal user. Here are the screenshot of the process of completing the user stories. You also can find the final excel from the link above.
<details>
<summary>click for more</summary>

<summary>

![user story](/docs/userStory/user_story_start.png)

![user story](/docs/userStory/add_admin_to_user_story.png)

![user story](/docs/userStory/final_user_story.png)

</details>

- As a traveler, I want to be able to securely log in, log out and change details of my account so my information only accessed for me.
- As a traveller, I want to know about the application and what the feature of it so that I know if this app is appropriate for my situation.
- As a traveller, I want to see other travellers' photo so I can find more travling choices.
- As a traveller, I want to see some recommendations from the app in different categories so I can find the place where I want to do something.
- As a traveler, I want to see the details of the recommended site so I can be sure it is the right place for me.
- As a traveller, I want to see other blog posts to see what I can do there before I travel.
- As a traveller, I want to write a blog with a photo about my travel so it would be a memorable record.
- As a traveller, I want to comment on a blog article to ask something I want to know.
- As a traveller, I want to check the weather of the place so I can make a plan easily.
- As an admin of this web app, I want to control what sites should be recommended to the visitors so I can update them anytime.
- As an admin of this web app, I want to be authorized to be able to delete blogs from common users so I can make sure all the blogs are legal and useful.
- As an admin of this web app, I want to be authorized to be able to delete common users so I can delete the user who posts a blog as an advertisement of illegal information.
- As an admin of this web app, I want to have the same features as a common user so I can do anything like them.

---

## Wireframes

<details>
<summary>show screenshots of wireframes</summary>

<summary>

**Humburger menu for mobile**

- When the user hasn't log in  
  <img src="./docs/Wireframe/iPhone-humburger(when%20user%20didn't%20log%20in)%20.jpg" alt="humburger menu when user hasn't login" width="200"/>

- When the user logged in  
  <img src="./docs/Wireframe/iPhone-humburger(when%20the%20user%20log%20in).png" alt="humburger menu when user logged in" width="200"/>

- When the admin user logged in  
  <img src="./docs/Wireframe/iPhone-humburger(when%20the%20admin%20log%20in).jpg" alt="humburger menu when admin logged in" width="200"/>

**Sign up form**

- mobile  
  <img src="./docs/Wireframe/iPhone-Sign%20up%20form.jpg" alt="sign up form for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Sign%20up%20form.jpg" alt="sign up form for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop%20-Sign%20up%20form.jpg" alt="sign up form for desktop" width="500"/>

**Log in form**

- mobile  
  <img src="./docs/Wireframe/iPhone-Log%20in%20form.jpg" alt="log in form for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Log%20in%20form.jpg" alt="log in form for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Log%20in%20form.jpg" alt="log in form for desktop" width="500"/>

**About Page(app top page)**

- mobile  
  <img src="./docs/Wireframe/iPhone-Top%20Page.jpg" alt="top page for movile" width="200"/>
- Tablet  
  <img src="./docs/Wireframe/iPad-Top%20Page.jpg" alt="top page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Top%20Page.jpg" alt="top page for desktop" width="500"/>

**Site list Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-Sites%20Page.jpg" alt="Site list Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Sites%20Page.jpg" alt="Site list Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop%20-Sites%20Page.jpg" alt="Site list Page for desktop" width="500"/>

**Site Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-Site%20Page.jpg" alt="Site Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Site%20Page.jpg" alt="Site Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Site%20Page.jpg" alt="Site Page for desktop" width="500"/>

**Site create form**

- mobile  
  <img src="./docs/Wireframe/iPhone-Site%20create%20form.jpg" alt="Site create form for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Site%20create%20form.jpg" alt="Site create form for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Site%20create%20form.jpg" alt="Site create form for desktop" width="500"/>

**Site update form**

- mobile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
  <img src="./docs/Wireframe/iPhone-Site%20update%20form.jpg" alt="Site update form for movile" width="200"/>

**Blog list Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-Blog%20Page.jpg" alt="Blog list Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Blog%20Page.jpg" alt="Blog list Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Blog%20Page.jpg" alt="Blog list Page for desktop" width="500"/>

**Blog article Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-Blog%20Article.jpg" alt="Blog article Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Blog%20Article.jpg" alt="Blog article Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop%20-Blog%20Article.jpg" alt="Blog article Page for desktop" width="500"/>

**Blog create post form**

- mobile  
  <img src="./docs/Wireframe/iPhone-Blog%20create%20form.jpg" alt="Blog create post form for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-Blog%20create%20form.jpg" alt="Blog create post form for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-Blog%20create%20form.jpg" alt="Blog create post form for desktop" width="500"/>

**Blog update post form**

- mobile (Tablets and desktops are the same as the creation form except for the buttons, so the wireframes are mobile only.)  
  <img src="./docs/Wireframe/iPhone-Blog%20update%20form.jpg" alt="Blog update post form for movile" width="200"/>

**My Home Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-My%20HOME.jpg" alt="My Home Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-My%20HOME.jpg" alt="My Home Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-My%20HOME.jpg" alt="My Home Page for desktop" width="500"/>

**My Detail Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-My-Detail.jpg" alt="My Home Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-My-Detail.jpg" alt="My Home Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-My-Detail.jpg" alt="My Home Page for desktop" width="500"/>

**My Detail Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-My-Blog.jpg" alt="My Home Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-My-Blog.jpg" alt="My Home Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-My-Blog.jpg" alt="My Home Page for desktop" width="500"/>

**(For Admin) Site management Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for tablet" width="300"/>

- Desktop  
  <img src="./docs/Wireframe/Desktop-admin(SITE%20LIST).jpg" alt="(For Admin) Site management Page for desktop" width="500"/>

**(For Admin) User management Page**

- mobile  
  <img src="./docs/Wireframe/iPhone-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for movile" width="200"/>

- Tablet  
  <img src="./docs/Wireframe/iPad-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for tablet" width="300"/>

- Desktop  
<img src="./docs/Wireframe/Desktop%20-admin(USER%20LIST).jpg" alt="(For Admin) User management Page for desktop" width="500"/>
</details>

## Trello Board

[Trello Board (A) link](https://trello.com/b/Uw6DU7pd/finalprojecta)  
Yuka Toshima worked primarily on wireframe, while Xinzhe Yu worked on Dataflow and Application Architecture Diagram. We started on October 24, and in Trello, we put the cards we were working on in the "Doing" section and moved them to the "Done" section when the work was finished to share our progress. The cards were marked with the due date and the person in charge so that we knew who was supposed to do what by when.

<details>
<summary>click for more</summary>

<summary>

- Day 1 (24th Oct)

  **Start of the day**  
  <img src="./docs/Trello-A/24_Oct_2022.png" alt="24th Oct start" width="500"/>

  **End of the day**  
  <img src="./docs/Trello-A/24-Oct-2022(2).png" alt="24th Oct end" width="500"/>

- Day 2 (25th Oct)  
  <img src="./docs/Trello-A/25-Oct-2022.png" alt="25th Oct" width="500"/>

- Day 3 (26th Oct)  
  <img src="./docs/Trello-A/26_Oct_2022.png" alt="26th Oct" width="500"/>

- Day 4 (27th Oct)  
  <img src="./docs/Trello-A/27_Oct_2022.png" alt="27th Oct" width="500"/>

- Day 5 (28th Oct)  
  <img src="./docs/Trello-A/28_Oct_2022.png" alt="28th Oct" width="500"/>

- Day 6 (29th Oct)  
  <img src="./docs/Trello-A/29_Oct_2022.png" alt="29th Oct" width="500"/>

- Last Day (1st Nov)  
 <img src="./docs/Trello-A/1_Nov_2022.png" alt="1st Nov" width="500"/>
</details>

[Trello Board (B) link](https://trello.com/b/pRALiec2/finalprojectb)  
In the project part B, Xinzhe Yu worked on application setting, backend and some front-end, while Yuka worked on pages and components styling using BootStrap and some front-end too. He started backend part first, and then she started frontend styling a little later.

<details>
<summary>click for more</summary>

<summary>

We prioritised smaller tasks at an earlier stage and over a shorter period of time. Smaller tasks are labelled in blue. These are tasks that get done relatively quickly.  
This is an application setting screenshot. As you can see, there are many blue tasks at the beginning.

<img src="./docs/Trello-B/small-task(back).png" alt="small-task(back)" width="200"/>  
  
These are some front-end task screenshots. At beginning, the front end also started with small tasks.

<img src="./docs/Trello-B/small-task(front).png" alt="small-task(front)" width="200"/>
<img src="./docs/Trello-B/small-task(front)2.png" alt="small-task(front)2" width="200"/>

We then did medium tasks. These are labelled yellow.  
These are backend and frontend tasks that were done after the small task. Many of the tasks are relatively time-consuming.

- backend  
  <img src="./docs/Trello-B/medium-task(back).png" alt="medium-task(back)" width="200"/>

- frontend  
  <img src="./docs/Trello-B/medium-task(front).png" alt="medium-task(front)" width="200"/>

Then we did the large tasks, which are relatively time-consuming, in the middle to late stages of the project. These are labelled red.

- backend  
  <img src="./docs/Trello-B/large-task(back).png" alt="large-task(back)" width="200"/>

- frontend  
  <img src="./docs/Trello-B/large-task(front).png" alt="large-task(front).png" width="200"/>

At the end, we did user testing for frontend.  
<img src="./docs/Trello-B/frontend-testing-list.png" alt="frontend-testing-list" width="200"/>

</details>

## Features for the future work

We had planned in Part A a feature whereby recommended sites are displayed by category. However, in building the app, we would like to do this feature as future work, due to the time and the size of the task involved. So there are no category button in the sites list page(Find Your Way page).
