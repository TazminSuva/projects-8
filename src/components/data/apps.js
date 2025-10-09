const getRandomRating = () => parseFloat((Math.random() * (5.0 - 3.5) + 3.5).toFixed(1));
const getRandomDownloads = () => Math.floor(Math.random() * (500000 - 1000) + 1000);
const getRandomReviews = () => Math.floor(Math.random() * (5000 - 50) + 50);

const appData = [
  {
    image: "https://i.ibb.co/L5Q8SgT/app1.png", 
    title: "Pro-Grammer",
    companyName: "CodeCrafters Inc.",
    id: 1,
    description: "An advanced IDE for mobile coding with syntax highlighting and auto-completion.",
    size: 45, 
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 100 },
      { name: "2 star", count: 250 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 800 },
      { name: "5 star", count: 2500 }
    ]
  },
  {
    image: "https://i.ibb.co/K2sYw8b/app2.png",
    title: "Photo Genius",
    companyName: "Pixel Perfect Ltd.",
    id: 2,
    description: "The ultimate photo editing tool with AI-powered enhancements and filters.",
    size: 92, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 50 },
      { name: "2 star", count: 150 },
      { name: "3 star", count: 300 },
      { name: "4 star", count: 900 },
      { name: "5 star", count: 4200 }
    ]
  },
  {
    image: "https://i.ibb.co/30h1t29/app3.png",
    title: "FitTrack Pro",
    companyName: "HealthTech Global",
    id: 3,
    description: "Track your fitness, steps, and sleep with personalized goal setting.",
    size: 30, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 200 },
      { name: "2 star", count: 300 },
      { name: "3 star", count: 600 },
      { name: "4 star", count: 1200 },
      { name: "5 star", count: 3000 }
    ]
  },
  {
    image: "https://i.ibb.co/jR0y2wP/app4.png",
    title: "SkyNotes",
    companyName: "Cloud Apps Inc.",
    id: 4,
    description: "Seamless cloud-synced note-taking application across all devices.",
    size: 15, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 10 },
      { name: "2 star", count: 50 },
      { name: "3 star", count: 200 },
      { name: "4 star", count: 400 },
      { name: "5 star", count: 1800 }
    ]
  },
  {
    image: "https://i.ibb.co/8Y6D2g3/app5.png",
    title: "Recipe Master",
    companyName: "Gourmet Solutions",
    id: 5,
    description: "Thousands of recipes with meal planning and grocery list features.",
    size: 60, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 30 },
      { name: "2 star", count: 100 },
      { name: "3 star", count: 450 },
      { name: "4 star", count: 950 },
      { name: "5 star", count: 3500 }
    ]
  },
  {
    image: "https://i.ibb.co/7XW2L8b/app6.png",
    title: "AstroView",
    companyName: "Cosmic Devs",
    id: 6,
    description: "Explore the night sky with an interactive star map and celestial event alerts.",
    size: 120, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 5 },
      { name: "2 star", count: 20 },
      { name: "3 star", count: 100 },
      { name: "4 star", count: 500 },
      { name: "5 star", count: 2100 }
    ]
  },
  {
    image: "https://i.ibb.co/3sS0qN6/app7.png",
    title: "Budget Buddy",
    companyName: "FinWise Labs",
    id: 7,
    description: "Simple and secure personal finance and budget tracking application.",
    size: 20, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 150 },
      { name: "2 star", count: 200 },
      { name: "3 star", count: 400 },
      { name: "4 star", count: 700 },
      { name: "5 star", count: 1500 }
    ]
  },
  {
    image: "https://i.ibb.co/P4Z9H3B/app8.png",
    title: "LangTalk",
    companyName: "Polyglot Systems",
    id: 8,
    description: "A fun and interactive way to learn new languages with native speakers.",
    size: 88, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 80 },
      { name: "2 star", count: 180 },
      { name: "3 star", count: 420 },
      { name: "4 star", count: 980 },
      { name: "5 star", count: 4000 }
    ]
  },
  {
    image: "https://i.ibb.co/L5Q8SgT/app1.png",
    title: "DevTools Hub",
    companyName: "Toolsmiths",
    id: 9,
    description: "A collection of essential developer tools for daily tasks and prototyping.",
    size: 55, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 40 },
      { name: "2 star", count: 120 },
      { name: "3 star", count: 350 },
      { name: "4 star", count: 750 },
      { name: "5 star", count: 2000 }
    ]
  },
  {
    image: "https://i.ibb.co/K2sYw8b/app2.png",
    title: "Vector Sketch",
    companyName: "ArtFlow Studio",
    id: 10,
    description: "Create stunning vector graphics right on your tablet or smartphone.",
    size: 110, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 20 },
      { name: "2 star", count: 70 },
      { name: "3 star", count: 250 },
      { name: "4 star", count: 650 },
      { name: "5 star", count: 3200 }
    ]
  },
  {
    image: "https://i.ibb.co/30h1t29/app3.png",
    title: "Meditation Space",
    companyName: "Mindful Living",
    id: 11,
    description: "Guided meditation sessions to reduce stress and improve focus.",
    size: 40, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 5 },
      { name: "2 star", count: 15 },
      { name: "3 star", count: 50 },
      { name: "4 star", count: 300 },
      { name: "5 star", count: 1500 }
    ]
  },
  {
    image: "https://i.ibb.co/jR0y2wP/app4.png",
    title: "TaskFlow",
    companyName: "Productivity Boost",
    id: 12,
    description: "The perfect task manager and project planning tool for small teams.",
    size: 25, // MB
    reviews: getRandomReviews(),
    ratingAvg: getRandomRating(),
    downloads: getRandomDownloads(),
    ratings: [
      { name: "1 star", count: 100 },
      { name: "2 star", count: 250 },
      { name: "3 star", count: 500 },
      { name: "4 star", count: 800 },
      { name: "5 star", count: 2500 }
    ]
  },
];

export default appData;