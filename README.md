# Frontend Mentor - Product List with Cart Solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

#### Desktop
![Desktop Ver. of Product List with Cart](/public/screenshots/Desktop_Product_List_With_Cart.png)

#### Tablet
![Tablet Ver. of Product List with Cart](/public/screenshots/Tablet_Product_List_With_Cart.png)

#### Mobile
![Mobile Ver. of Product List with Cart](/public/screenshots/Mobile_Product_List_With_Cart.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/responsive-and-accessible-product-list-w-cart-using-reactjs-to0AcAdwUw)
- [Live Site](https://tangerine-frangipane-dc2bc5.netlify.app/)

## My process

### Built with

- ♥
- Semantic HTML5 Markup
- Custom CSS Properties
- CSS Grid & Flex
- ReactJS
- Mobile-first Workflow
- Accessibility Priority

### What I learned

Understandably, a lot of research went into building this site with accessiblity on the forefront of my mind as it is still something I'm learning. The logic is always challenging, but it is admittedly also really fun and satisfying when you get it to do what you want. Styling was again tedious with too many colours, 

### Continued development

I don't know if this will be my last project with Frontend Mentor now that they have jumped on the AI bandwagon. Whatever I decide, I'm grateful for this website and the people behind its existence! 

Anyway, I would like to stick to learning ReactJS and making websites accessible. I have intentions to check out other coding languages and libraries in the future along with GSAP animations. I still need to work on my time management and streamlining my workflow, but I already see a lot of improvements :) 

### Useful resources

1. [Axios](https://www.npmjs.com/package/axios): Self-explanatory, i used the axios package to send an API request to my local json file 
2. [API Request a Local JSON File](https://dev.to/rajeshj3/api-request-to-local-json-file-in-react-n7f): I needed a refresher on using axios and sending API requests
3. [Modal in React](https://www.geeksforgeeks.org/reactjs/how-to-use-modal-component-in-reactjs/): What can I say, modals are tricky!
4. [Prevent body from Scrolling when Modal is Open](https://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened): What it says on the tin! Who knew it'd be that simple
5. [CSS Filter for SVG Icons](https://codepen.io/sosuke/pen/Pjoqqp): Working with SVGs is a pain, moreso when I have to change their colour without editing the original paths
6. [Accessible Modals](https://www.a11y-collective.com/blog/modal-accessibility/#h-example-one-using-the-native-lt-dialog-element-recommended): I needed to know how one would semantically code a modal, but then also implement what I learned in React
7. [ARIA in E-Commerce](https://a11ytesters.com/implementing-aria-in-e-commerce/): This was a good intro into using ARIA in e-commerce website
8. [ARIA region](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/region_role): Mozilla's
9. [ARIA live](https://www.sarasoueidan.com/blog/accessible-notifications-with-aria-live-regions-part-1/#site-header): Dev Docs
10. [ARIA atomic](https://www.digitala11y.com/aria-atomic-properties/): Rock!
11. [Trapping Focus Within an Element](https://www.bennadel.com/blog/4096-trapping-focus-within-an-element-using-tab-key-navigation-in-javascript.htm): Had an issue with `Tab` letting users navigate the website even when the modal was open and scrolling was prevented. This experiment was an interesting read!