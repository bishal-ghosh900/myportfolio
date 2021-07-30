import moenimeImage from "./Images/moenime.gif";
import profilePic from "./Images/profilePic.jpg";
import mydictionary from "./Images/mydictionary.gif";
import mytodolist from "./Images/mytodolist.gif";
import randomQoute from "./Images/randomqoutegenerator.gif";
import stopwatch from "./Images/stopwatch.gif";
import loadingv1 from "./Images/loadingV1.gif";

const Data = {
  name: "Bishal Ghosh",
  email: "ghoshghoshbishal@gmail.com",
  profile_pic: profilePic,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Git",
    "Bootstrap",
    "Core Java",
  ],

  projects: [
    {
      name: "MoeNime",
      img: moenimeImage,
      info: "Moenime is a website to view the details of any anime. It is performing some api calls to Jikan api to fetch all of its info.",
      link: "https://bishal-ghosh900.github.io/moenimelist",
      techs: ["HTML", "CSS", "React JS", "React Router", "Framer Motion"],
    },
    {
      name: "MyDictionary",
      img: mydictionary,
      info: "MyDictionary is a dictionary website. Here many languages are provided to know the meaning of any word of that particular language. It is using Free Dictionary api to fetch all of its info.",
      link: "https://bishal-ghosh900.github.io/mydictionary/",
      techs: ["HTML", "CSS", "React JS"],
    },
    {
      name: "MyToDoList",
      img: mytodolist,
      info: "MyToDoList is a website to make to-do list. It is using local storage to save all of the to-dos in browser's memory, so that after every refresh all of the to-dos will be visible to users as it was before the refresh.",
      link: "https://bishal-ghosh900.github.io/mytodolist/",
      techs: ["HTML", "CSS", "React JS", "Framer Motion"],
    },
    {
      name: "Random Qoute Generator",
      img: randomQoute,
      info: "Random qoute genrator is an application to generate random qoutes after every clicks. It is using Quotable api to fetch all of its info.",
      link: "https://codepen.io/bishal-ghosh900/full/KKWQWRK",
      techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      name: "Just Stopwatch",
      img: stopwatch,
      info: "Just Stopwatch is an application which works same as any normal stopwatch.",
      link: "https://codepen.io/bishal-ghosh900/full/wvJeqEq",
      techs: ["HTML", "CSS", "JavaScript", "React JS"],
    },
    {
      name: "Just Loading Page",
      img: loadingv1,
      info: "Just Loading Page is just a loading page.",
      link: "https://codepen.io/bishal-ghosh900/full/jOBKmJE",
      techs: ["HTML", "CSS"],
    },
  ],
};

export default Data;
