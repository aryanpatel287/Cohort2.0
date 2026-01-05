const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Frontend Developer",
    description: "Passionate about building responsive and accessible web interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullName: "Emily Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designs clean and user-friendly digital experiences.",
    tags: ["Figma", "Adobe XD", "UX Research", "Prototyping"]
  },
  {
    fullName: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Digital Marketer",
    description: "Helps brands grow through data-driven marketing strategies.",
    tags: ["SEO", "Content Marketing", "Google Ads", "Analytics"]
  },
  {
    fullName: "Daniel Kim",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Product Manager",
    description: "Bridges the gap between business goals and technical teams.",
    tags: ["Agile", "Scrum", "Roadmapping", "Stakeholder Management"]
  }
];

let main = document.querySelector('main')
let card = document.querySelector('.card')
let userCards = ''
users.forEach(function (elem) {
  userCards = userCards + `<div class="card">
      <img class="userImg" src="${elem.image}" alt="">
      <h2 class="userName">${elem.fullName}</h2>
      <h3 class="userProfession">${elem.profession}</h3>
      <p class="userDescription">${elem.description}</p>
    </div>`
})
console.log(userCards)
main.innerHTML=userCards