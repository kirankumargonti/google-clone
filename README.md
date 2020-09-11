# Google Clone With React ( Hooks + Context API ) and Google Custom Search JSON API ( Programmable Search Engine )

#### **Live Project: https://clone-9aeda.web.app/**
<br />

## Snapshot
[![google](https://res.cloudinary.com/kirankumargonti/image/upload/v1599802328/GituHub/google_nhtanh.jpg)](https://clone-9aeda.web.app/)

## Quick Start

    # Clone the application
    $ git clone https://github.com/kirankumargonti/google-clone.git

    # Install dependencies
    $ npm install

    # Serve on localhost:3000
    $ npm start

## Project Setup

### 1. Firebase Setup

- [Create a Firebase project ](https://firebase.google.com/docs/web/setup#create-firebase-project) 

<br />

### 2. Custom Search JSON API  ( Programmable Search Engine )
- Get your API KEY 👇
- **https://developers.google.com/custom-search/v1/overview#api_key**
- Enable Custom Search API for your firebase project
- Grab that key and place in **`keys.js`** file which is located in the project
    - **`src / keys.js`**
- Create a search engine for your site 👇
- **https://cse.google.co.in/cse/all**
- [Click](https://cse.google.co.in/cse/create/new) add to create
- Enter **`www.google.com`** in the Sites to search Field. and  hit the create button.
- Look for the **`Edit search engine`** tab in the left side of the dashboard.
- Choose your created search engine by default it is selected if you don't have more than one.
- Click  the setup and the Grab the **`Search engine ID`** place it in the **`keys.js`** file
- Make sure to turn **`On`** the **`Search the entire web`** option

    ```
    Programmatic Access

    - Custom Search JSON API

    - Limit of 10,000 queries per day.
    ```

- For more information click [here](https://developers.google.com/custom-search/v1/overview)


<br />

### 3. Hosting 

    # Build for production
    $ npm run build

    # Install firebase tools
    $ npm install -g firebase-tools

    # Login to firebase
    $ firebase login

    # Initialize your firebase project
    $ firebase init

    # Important Steps
        - Use an existing project
        - What do you want to use as  your public directory?
          build
        - Configure as a single-page app 
          (rewrite all urls to /index.html)? Yes
        - File build/index.html already exists. Overwrite? No

    # Deploy to firebase
    $ firebase deploy


## For more information refer firebase docs 
https://firebase.google.com/docs
