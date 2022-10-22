# Make It Real - Interactive rating component

This is a solution to the Interactive rating component project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Select an option in a range from 1 to five.
- Submit their selection.
- Watch a thank you message with the rating they selected.

### Screenshot

![Screenshot of the project](./design/screenshot.png)


## My process
To begin with, we analized the structure of the request and layed out the html structure. Then, we analized the interaction required and coded it using javascript. Later, we applied all required designs for the component to be responsive and also to display correctly the interactions coded on js.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript client side

### What I learned

I remembered a couple of handy css properties:


```css
.container {
  background: linear-gradient(0deg, #10121a 0%, #202731 100%);
}
```
Also some of the JavaScript code which I have learned but never had the chance to test on a real project.
```js
const ratings = document.getElementsByClassName("rating-option");
let rating = 0;
for (let i = 0; i < ratings.length; i++) {
  let ratingValue = ratings[i]["text"];
  function selectRating() {
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.remove("selected");
    }
    ratings[i].classList.add("selected");
    rating = ratingValue;
    let message = `You selected ${rating} out of 5`;
    let messageP = document.getElementById("message");
    messageP.innerHTML = message;
  }

  ratings[i].addEventListener("click", selectRating);
}
```

### Continued development

I would love to keep working on JavaScript on the client side. It was the most challenging part of this project.

### Useful resources

- [Generate Gradient on CSS](https://cssgradient.io) - This helped me for the subtile gradient on the background of the component.
- [Color Picker from Image](https://imagecolorpicker.com) - This helped me to get the accurate colors from the image.

## Author

- [LinkedIn](https://www.linkedin.com/in/juan-orjuela/)
- [Behance](https://www.behance.net/juan_o)


## Acknowledgments

Special aknowledgments to Juan Lorza coding partner on this task, and to [Cristian Moreno](https://github.com/khriztianmoreno), teacher and mentor for supervising our process.
