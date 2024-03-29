# CommieQuiz

CommieQuiz is an interactive online quiz for users who would like to test their knowledge about Communism in a fun, and challenging way. Users will have the ability to choose the quiz difficulty and the app will calculate a score based on the difficulty chosen according to the rules of the game.

Rules of the game:
- Each game runs for a maximum of 2 minutes.
- Users can select 3 different challenges to alter the maximum response time for each question
    - Comrade - 20s (max 6 questions)
    - Vanguard - 15s (max 8 questions)
    - Intelligentsia- 10s (max 12 questions)
- Each correct answer will earn the user a red star.
- The score is calculated based on the the number of correct answers / max potential for the game level.


![CommieQuiz website on desktop and mobile device screens](/assets/docs/images/am_i_responsive.png)


#Table of Contents

1. <details open>
    <summary><a href="#ux">UX</a></summary>

    <ul>
    <li><details>
    <summary><a href="#goals">Goals</a></summary>

    - [Visitor Goals](#visitor-goals)
    - [Site Owner's Goals](#business-goals)
    - [User Stories](#user-stories)
    </details></li>

    <li><details>
    <summary><a href="#visual-design">Visual Design</a></summary>

    - [Wireframes](#wireframes)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Colors](#colors)
    - [Images](#images)
    - [Styling](#styling)
    </details></li>
    </ul>
</details>

2. <details open>
    <summary><a href="#features">Features</a></summary>

    <ul>
    <li><details>
    <summary><a href="#page-elements">Page Elements</a></summary>

    - [Header](#header)
    - [Footer](#footer)
    - [About Page](#about-page)
    - [Gallery Page](#gallery-page)
    - [Register Page](#register-page)
    </details></li>

    <li><details>
    <summary><a href="#feature-ideas">Feature Ideas</a></summary>

    - [Functional](#functional)
    - [Technical](#technical)
    </details></li>
    </ul>
</details>

3. <details open>
    <summary><a href="#technologies-used">Technologies Used</a></summary>

</details>

4. <details open>
    <summary><a href="#testing">Testing</a></summary>

    <ul>
    <li><details>
    <summary><a href="#methods">Methods</a></summary>

    - [Validation](#validation)
    - [General Testing](#general-testing)
    - [Mobile Testing](#mobile-testing)
    - [Desktop Testing](#desktop-testing)
    </details></li>

    <li><details>
    <summary><a href="#bugs">Bugs</a></summary>

    - [Known Bugs](#known-bugs)
    </details></li>
    </ul>
</details>

5. <details open>
    <summary><a href="#deployment">Deployment</a></summary>

    <li><details>
    <summary><a href="#github-deployment">Github Deployment</a></summary>

    - [Github Preparation](#github-preparation)
    - [Github Instructions](#github-instructions)
    </details></li>
    </ul>
</details>

6. <details open>
    <summary><a href="#credit-and-contact">Credit and Contact</a></summary>

    - [Content](#content)

</details>

# UX
## Goals
### Visitor Goals

The target audience for the CommieQuiz are:
- People who want to play a quiz game.
- People who want to test their knowledge about Communism.
- People who are interested in learning about Communism.


User goals are:
- Have fun.
- Challenge themselves about their knowledge of Communism.
- Learn more about communism and find new sources of information.

The CommieQuiz fills these needs by:
- Providing an educational game.
- Providing easy navigation and game rules.
- Providing a set of questions and potential answers about Communism.
- - Providing challenge levels.
- - Providing links to resources about questions answered incorrectly.

### Site Owner's Goals
The site owner’s goal is to provide Communist edutainment for anyone interested in Communism/Socialism and hopefully encourage further learning.

### User Stories

1. As a user interested in Communism I expect to find meaningful information.
0. As a user interested in having fun, I expect to see:
    1. Easy instructions on the game.
    2. Clear indication of success/failure.
0. As a user interested in learning more about Communism, I expect to see:
    1. Information about the sources of the questions.
    2. Identification of resources to expand my knowledge.

## Visual Design
### Wireframes
[Wireframes History](https://drive.google.com/drive/folders/1R_e4YYHX8hCsZ3t90KANj8HxL-HNT3lr?usp=sharing)

### Icons
- Hammer and sickle icon created by Freepik - [Flaticon](https://www.flaticon.com/free-icons/hammer-and-sickle)

### Content
- The questions (and eventually the referral resources) are from documents on the [Marxist Internet Archive](https://www.marxists.org/)

#### Fonts
Both fonts are supposed to look like lettering that might appear on a soviet propaganda poster.
- Headings: [Probpaganda, 1001FONTS](https://www.1001fonts.com/propaganda-font.html)
- Body: [Paytone One, Regular 400, GoogleFonts](https://fonts.google.com/specimen/Paytone+One?query=pay)

#### Colors
Color base was chosen from a red on in hero image using eyedropper.org. Red is generally associated with Communism and the various shades generated by colormind.io provided a range of options. I then decided on simple set of complementary and contrasting colors. The final selection was chosen using contrast-grid.eightshapes.com for WCAG 2.0 contrast grading as shown below: 
- #FFFFFF (white) -controls button background, button text
- #000000 (black) - text on panels and borders
- #CB1D1D  (commie red) - button backgrounds
- #FEE8DA (light commie red) - panels background

![Color contrast grid](./assets/docs/design/color_contrast_grid.png)

### Images
There are only 2 images; a background image of Marx, Engels and Lenin, and a hammer and sickle used for the favicon.

- Image sources:
-   [Wikimedia](https://commons.wikimedia.org/wiki/File:Marx_Engels_Lenin.svg)
-   [flatiron](https://www.flaticon.com/free-icons/hammer-and-sickle)  Hammer and sickle icons created by Freepik - Flaticon 

- Favicon 
    Generated from [favicon-generator] (https://www.favicon-generator.org/) based on Globe from wikimedia)

### Styling
The overall approach that I took to styling was clarity and consistancy. This included:
- Limited set of fonts and colors
- High contrast on alternating pages
- Distinct header and footer color schemes
- Consistent use of page element styling

This approach carries over to the coding where the styling is organised for use.

# Features
## Page Elements
### Controls bar
The feature provides a consistant area for:
- Navigating to home panel
- Controling the sound
- Navigating to the menu panel
- Countdown timers
- Correct answers

### Landing Page
The Landing Page contains a large inspiring image of three key figures in Communism; Marx, Engels and Lenin. The image is meant to provide the user with immediate reasuring confirmation of the CommieQuiz's function and tone.

The control buttons are always present for consistency and ease of use. Of particular use is the sound button which will play "The International" providing another confirmation of the theme.

The user will be presented with a single button to start the game.

![Landing Page screenshot](./assets/docs/images/home.png)

### Game difficulty panel
This feature appears each time the user starts a new game and will provide the ability to vary the time-out minutes for each question.
Note: this feature has not been included yet.

### Menu panel
![Menu panel screenshot](./assets/docs/images/navigation.png) 
This feature provides the user with navigation buttons to game feature panels.

### Quiz panel
![Quiz panel screenshot](/assets/docs/images/quiz.png)
This feature presents a question with 4 potential answers. Upon loading the first question the game timer will display a 2 minute countdown.The user has a set amount of time to choose an option or press the next button.
With each new question, the question timer will display a question timer per the user option.

### Scores panel
Along with the score calculated according to the rules of the game, this feature will provide the user with list of questions answered incorrectly and reference to educational resources.

## Future Ideas
- User registration and score history
- Multi-user registration and history
- Question sets by:
- - Difficulty
- - Topic (e.g. history, social issues, political issues, economic issues)

### Functional - These are UI improvements that could be made with the existing technologies.
- First and foremost a functional game.

### Technical - These are UI improvements that could be gained from incorporating other technologies.
- As I haven't fully applied the current technologies this remains to be seen.


## Technologies Used

- Coding languages
    - html
    - css
    - javascript
- Development environment
    - github
    - gitpod
    - MS Visual Studio
    
## Testing

- As this never made it out of development, I did not conduct rigerous testing. However, in the interest of providing a snap shot of the current state of the project I ran a set of standard test. 
    1. W3C html validation: 4 errors, 1 warning. 
    2. W3C css validation: 0 error, 0 warnings .
    3. JSHint: 0 errors, 46 warnings.
    4. PageSpeedInsight: [Unacceptable Accessibility](/assets/docs/images/pagespeed.png)


## Unfixed Bugs
- Too numerous to list.

## Deployment
### Github Deployment
**Requirements:**
- A free GitHub account.

### Github Instructions
1. Log in to your GitHub account.
2. navigate to [https://github.com/Richard5P/CommieQuiz](https://github.com/Richard5P/CommieQuiz).
3. You can set up your own repository and copy or clone it, or you fork the repository.
4. `git add`, `git commit` and `git push` to a GitHub repository, if necessary.
5. GitHub pages will update from the master branch by default.
6. Go to the **Settings** page of the repository.
7. Scroll down to the **Github Pages** section.
8. Select the Master Branch as the source and **Confirm** the selection.
9. Wait a minute or two and it should be live for viewing. See my own [here](https://richard5p.github.io/CommieQuiz).

## Credits and Contact
### Content
- Countdown inspired by Florin Pop [Simple Countdown Timer with JavaScript](https://www.youtube.com/watch?v=x7WJEmxNlEs&ab_channel=FlorinPop)

Any code utilised from a site is documented and credited within the code.
No credit is required for the other media other than provided by source.

### Contact
Please feel free to contact me at `richard.deutsch@gmail.com`



[def]: ./assets/images/readme_images/am_i_responsive.png