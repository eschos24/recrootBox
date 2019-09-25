
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
// Import image of your self here:
//-- For best display purposes, your image should be sqaure (e.g. 300 X 300 px)
import selfie from "./assets/eric.jpg";

//Import images for your portfolio here:
//-- For best display purposes, each of these images should have similar porportions

import dotkey from "./assets/dotkey.jpg";
import xout from "./assets/xout.png";
import campRank from "./assets/camprank_site.png";
import blogApp from "./assets/blogapp-site.png";
import bookThinks from "./assets/bookThinks.png";

import resume from "./assets/Resume.pdf";

let darkModeSwitch = true;
let darkMode = false;

// Edit person info here
// -- Bio is best kept to around 5 lines
let firstName = "Eric";
let lastName = "Schofield";
let title = "Student / Software Developer";
let bio = `I am currently studying Computer Science
   at Brigham Young University and just finished working as a Software
   Engineering Intern at Google.
   Feel free to reach out, take a look at some things I've worked on
   here, or checkout my code on github.`;

//Edit links to external accounts or items here (e.g. github, linkedIn, leetcode, resume, etc.)
// -- For display purposes, it's best to use between 3 and 5 links, but if you add more or less,
// -- the page will adjust accordingly.

let userIcons = true;

let links = [
  {
    name: "Email",
    link: "mailto:eric.w.schofield@gmail.com",
    icon: FaEnvelope
  },
  {
    name: "GitHub",
    link: "https://github.com/eschos24",
    icon: FaGithub

  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eric-schofield/",
    icon: FaLinkedin

  },
  {
    name: "Resume",
    link: resume,
    icon: FaFileAlt

  }
];

//Edit portfolio items here by changing title, image title, and link
// -- you can adjust the number of items as needed. For display purposes, it's best to use
// -- multiples of 3.

let portfolioTitle = "Recent Projects"
let portfolioSectionBackgroundColor = "#003344"
let portfolioItems = [
  {
    imageUrl: dotkey,
    title: "DOTKey",
    description: "Typing for the 21st Century",
    link: "https://dotkeyboard.com"
  },
  {
    imageUrl: xout,
    title: "X-Out",
    description: "Dice game written in Swift, with over 10k downloads",
    link: "https://apps.apple.com/us/app/x-out/id1247677776"
  },
  // {
  //   imageUrl: bookThinks,
  //   title: "RecrootBox",
  //   description: "Easy to user porfolio-site template",
  //   link: "https://trevorhere.github.io/recrootBox/"
  // },
  // {
  //   imageUrl: campRank,
  //   title: "CampRank",
  //   description: "Post, rank and comment about your favorite campsites",
  //   link: "https://desolate-falls-89173.herokuapp.com/"
  // },
  // {
  //   imageUrl: blogApp,
  //   title: "Blog App",
  //   description: "Easy access blog app.",
  //   link: "https://boiling-harbor-27900.herokuapp.com"
  // }
];


// If you do not want the footer to be displayed (it just has a link to the github repo
// -- for this template ) then you can set showFooter to false and it will go away.
let showFooter = false;

export {
  firstName,
  lastName,
  title,
  bio,
  portfolioTitle,
  portfolioItems,
  portfolioSectionBackgroundColor,
  selfie,
  showFooter,
  links,
  userIcons,
  darkModeSwitch,
  darkMode
};
