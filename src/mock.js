const user = {
  name:'Juan Daniel Rios Ramirez',
  photo:'https://res.cloudinary.com/djcsouoma/image/upload/v1597717195/IMG_5496_hgcywh.jpg',
  specialty:'Front-end',
  tecnologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Angular', 'Node', 'Express', 'Mongo', 'Bootstrap'],
  github_profile:'https://github.com/jdrios-dev',
  linkedin_profile:'https://www.linkedin.com/in/jdriosdev/',
  twitter_profile:'https://twitter.com/jdriosdev',
  email:'jd.rios.dev@gmail.com'
}

const projects = [
  {
    name:'AllwaysUpdate',
    description:'AlwaysUpdate is an e-NewsPaper from Argentina, Colombia, Venezuela and Mexico, that update its news every day.',
    tecnologies:['React', 'Redux', 'Enzyme', 'GSAP' ],
    rol:'Frontend Developer, Team work, Complete the app in 3 weeks, Tests with Enzyme',
    repo:'https://github.com/Proyecto-Noticias/Frontend',
    link_deploy:'https://alwaysupdate.vercel.app/'
  },
  {
    name:'Travel Forest',
    description:'An HTML and SASS Page (No responsive), for a travel agency.',
    tecnologies:['HTML', 'SASS', 'JavaScript'],
    rol:'Frontend Developer',
    repo:'https://github.com/jdrios-dev/travel-forest-web-html-sass',
    link_deploy:'https://mrdaniel01.github.io/travel-forest-web-html-sass'
  },
  {
    name:'Sleepy Mondays',
    description:'A Bootstrap Webpage, for a developers company.',
    tecnologies:['Bootstrap', 'JavaScript', 'Wow'],
    rol:'Frontend Developer',
    repo:'https://github.com/jdrios-dev/sleepy-mondays-bootstrap-webpage',
    link_deploy:'https://jdrios-dev.github.io/sleepy-mondays-bootstrap-webpage/'
  },
  {
    name:'Just Me ( Blog )',
    description:'An App made with Express (ejs) end to end.',
    tecnologies:['Express', 'Bootstrap'],
    rol:'Front-end Developer',
    repo:'https://github.com/Mrdaniel01/just-me-blog-express',
    link_deploy:'https://express-blog-just-me.herokuapp.com/'
  },
  {
    name:'Peliculas App',
    description:'Movies Billboard, using the themoviedb.org API.',
    tecnologies:['Angular', 'Bootstrap'],
    rol:'Front-end Developer',
    repo:'https://github.com/jdrios-dev/peliculasApp',
    link_deploy:'https://peliculas-app-weld.vercel.app/home'
  },
  {
    name:'LOMBOK',
    description:'A Challege for a class: Replicate a page only with Tailwind',
    tecnologies:['Tailwind'],
    rol:'Frontend Developer',
    repo:'https://github.com/jdriosdev/tailwind',
    link_deploy:'https://jdriosdev.github.io/tailwind/'
  },
]

module.exports = {
  user,
  projects
}


