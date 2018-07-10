# SEAHORSE - A Friend Finder for Stay-At-Home-Dads - Node and Express Servers

###
after you clone, you'll want to:

npm init
npm install node
npm install express
npm install require
npm install path

### Overview

This app is compatibility-based "StayAtHomeDadFriendFinder" application . It uses Express to handle routing and is deployed to Heroku.

This full-stack site takes in results from users' survey, then compares their answers with those from other users. The app will then display the name, picture, zipcode and email of the user with the best overall match. The user can then contact this best match if they would like.


### To Begin

* This app was based on (https://friend-finder-fsf.herokuapp.com/). 

* I created a folder called `Seahorse`. Inside the folder, I organized my directories like so:

  ```
  Seahorse
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```


### Instructions

1. The survey has 11 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. The `server.js` file requires the basic npm packages: `express`, `body-parser` and `path`.

3. The `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. Application data is stored inside of `app/data/friends.js` as an array of objects. Each of these objects follows the format below.

```json
{
  "name":"David",
  "photo":"https:/example.com/photo.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1,
      3
    ]
}
```

6. The app determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! The app calculates both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once the current user's most compatible friend is found, the app displays the result as a modal pop-up.
   * The modal displays name, email, and zipcode of the closest match.



## Deployment

This was deployed using [Heroku](https://devcenter.heroku.com/articles/git) and you can too - follow the link

## Contributing

Are you a stay at home dad, that would like to make this better? Get in touch!

## Authors

* **David Karsten Daniels** - *Initial work* - [David Karsten Daniels](https://github.com/dvdkrstndnls)


## Acknowledgments

* Charles Dunn helped! 
* Questions were run by my wife, Kate Naumes, ND
