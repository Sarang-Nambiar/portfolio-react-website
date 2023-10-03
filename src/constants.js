import github_logo from "./assets/icons8-github-48 (1).png";
import linkedin_logo from "./assets/icons8-linkedin-48.png"
import flickr_logo from "./assets/flickr-icon.svg"
import portfolio from "./assets/portfolio_website.png"
import hotel_booking from "./assets/hotel_booking_website.png"
import seq_model from "./assets/seq_model.png"
import empathy_game from "./assets/the-little-things-in-life.png"
import travel_planner from "./assets/genai_planner.png"
import occupeye from "./assets/OccupEYE.png"
import cookit from "./assets/cookit.png"

const aboutme = `<p>
Hi there! I'm a <strong>third-year engineering student</strong> who really loves technology.
I'm always excited to <strong>check out the latest tech trends and try them out for myself</strong>. 
Coding is more than just a skill for me; it's something I genuinely enjoy. 
Aside from that, I love listening to music, clicking photos and keeping active by going to the gym. 
</p>
<br>
<p>
I <strong>learn new things pretty quickly</strong>. So, if there's a new technology or skill needed for a job,  
I'm ready to dive in and learn. My main goal is to use my skills to <strong>help both myself and   
any company I work with grow and succeed</strong>.  
</p>
<br>
<p>
All in all, I'm a tech enthusiast who's always ready to learn and help. Whether it's with  
coding, new tech, or any other challenge, I'm here to give it my best. 
</p>`

const logos = [
  {
    name: "linkedin",
    src: linkedin_logo,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/in/sarangnambiar",
  },
  {
    name: "github",
    src: github_logo,
    alt: "github logo",
    link: "https://github.com/Sarang-Nambiar",
  },
  {
    name: "flickr",
    src: flickr_logo,
    alt: "flickr logo",
    link: "https://flic.kr/ps/3eAW9G",
  },
];

const projects = [{
  name: "Portfolio Website",
  description: `I created this website to showcase my skills and projects. I used <strong>React</strong> to build this website, and <strong>Tailwind CSS</strong> to style it.`,
  img: portfolio,
  alt: "project 3",
  stack: ["React", "Tailwind", "HTML", "CSS", "JavaScript", "Material UI"],
  date: "Sep 2023",
  link: "https://github.com/Sarang-Nambiar/sarangnambiar.github.io"
},
{
  name: "Hotel Booking Website - Ascenda",
  description: `For our term project in the "Elements of Software Construction" course, 
  we <strong>collaborated with Ascenda</strong> to create a hotel booking website. 
  Utilizing Figma, we crafted the UI/UX design, while the website's functionality was built on the React framework, 
  enhanced with external libraries such as Material UI. We further styled our site using the Tailwind CSS framework. 
  The backend operations were powered by Express.js, which handled requests from Ascenda's proprietary API. To ensure user information security, 
  we stored data on a Firebase database. Additionally, we incorporated Stripe's API to facilitate payment services for our users.
  To ensure the website's functionality, we employed Selenium to perform automated testing.`,
  img: hotel_booking,
  alt: "project 1",
  stack: ["React", "Tailwind", "Material UI", "Express.js", "Firebase", "Stripe", "Selenium", "Figma", "HTML", "CSS"],
  date: "Jun 2023 - Aug 2023",
  link: "https://sarang-nambiar.github.io/Hotel-Booking-Website/"
},
{
  name: "Sequence modelling for sentiment analysis",
  description: `As part of the Machine Learning course, My team and I developed a sentiment analysis model using <strong>Hidden Markov Models (HMM)</strong> based on a unique labeled dataset. 
  Each token in the dataset is paired with a tag, such as "B-positive" indicating the beginning of a positive sentiment entity, 
  while "O" represents tokens outside any sentiment entity. Other labels include indications for negative and neutral sentiments. 
  The objective is to create a sequence labeling system that can effectively ascertain sentiments in various texts.`,
  img: seq_model,
  alt: "project 3",
  stack: ["Python", "Machine Learning"],
  date: "Jul 2023 - Aug 2023",
  link: "https://github.com/Sarang-Nambiar/Sequence_Training_Model"
},
{
  name: "Travel Planner Using Generative AI",
  description: `An innovative travel planner Web-App that utilizes <strong>generative AI</strong> technology to generate personalized itineraries that cater to your specific preferences. 
  By simply answering a few questions, our intelligent algorithm generates multiple customized plans. Our developed app for Singapore Airlines in the Singapore Airlines AppChallenge 2023, 
  provides a convenient and enjoyable planning experience, ensuring an unforgettable journey.`,
  img: travel_planner,
  stack: ["React", "HTML", "CSS", "Typescript", "JavaScript", "ChatGPT API", "Formik"],
  date: "Jun 2023",
  link: "https://github.com/Sarang-Nambiar/binarybros.github.io"
},
{
  name: "OccupEYE",
  description: `As part of the "Introduction to Information Systemas & Programming" course, we created 
  an Android application that uses computer vision(powered by the pre-trained YOLOv5 model) to scan the traffic in a particular room 
  and displays the crowd density to the user. It features a home page that display all the rooms on campus along with their crowd density, and 
  allows the user to customize the page by bookmarking their favorite rooms to visit. We also have a search page that filters all available rooms based on the searched keyword, 
  and the user has their own customizable profile page for creating and maintaining their unique portfolio in the app.
  <br>
  <br>
  Our solution received great feedback, and we were honored to be one of the three teams whose projects were <strong>recognized as Outstanding 1D Project Exhibit</strong> as voted by the audience!`,
  img: occupeye,
  alt: "project 3",
  stack: ["Android Studio", "Java", "Figma", "Firebase", "Computer Vision", "YOLOv5", "Python"],
  date: "Mar 2023 - Apr 2023",
  link: "https://github.com/Sarang-Nambiar/OccupEye",
  demo: "https://youtu.be/_bMFbsdtaf0"
},
{
  name: "CooKit - TikTok Youth Camp",
  description: `At the TikTok Youth Camp, my team and I developed an application 
  unctionality of the app using Java within Android Studio, while the Spoonacular REST API 
  served as our source for recipe data. Our project was <strong>distinguished as one of the top entries</strong> in its category.`,
  img: cookit,
  alt: "project 3",
  stack: ["Android Studio", "Java", "Spoonacular API", "Figma"],
  date: "May 2022",
  link: "https://github.com/Sarang-Nambiar/CooKit-TikTok-Youth-Camp-"
},
{
  name: "The Little Things in Life - Empathy Game",
  description: `By shedding light on the harsh realities
  of poverty, "The Little Things in Life" aims to evoke empathy and compassion
  from its players, compelling them to reflect on the significance of cherishing
  life's modest blessings. As players delve deeper into the boy's world, they
  embark on an emotional journey that fosters a deeper appreciation for the small
  wonders that can profoundly impact lives. My team and I used <strong>React</strong> to build this game.`,
  img: empathy_game,
  alt: "project 3",
  stack: ["React", "HTML", "CSS", "JavaScript"],
  date: "Jul 2023 - Aug 2023",
  link: "https://github.com/Sarang-Nambiar/empathygame.github.io"
},
]

export { logos, projects, aboutme };