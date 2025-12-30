// covers the tasks for the days 42,43
let btn = document.getElementById("btn")
let box  = document.querySelector('.box')
let main = document.querySelector('main')
let teamName = document.querySelector('.teamName')
let teamFullName = document.querySelector('.teamFullName')
const iplTeams = [
  {
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "#F9CD05",
    secondaryColor: "#1C1C1C"
  },
  {
    shortName: "MI",
    fullName: "Mumbai Indians",
    primaryColor: "#004BA0",
    secondaryColor: "#D1AB3E"
  },
  {
    shortName: "RCB",
    fullName: "Royal Challengers Bangalore",
    primaryColor: "#EC1C24",
    secondaryColor: "#000000"
  },
  {
    shortName: "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "#3A225D",
    secondaryColor: "#D4AF37"
  },
  {
    shortName: "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "#254AA5",
    secondaryColor: "#E91E63"
  },
  {
    shortName: "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "#F26522",
    secondaryColor: "#000000"
  },
  {
    shortName: "DC",
    fullName: "Delhi Capitals",
    primaryColor: "#17479E",
    secondaryColor: "#EF1C25"
  },
  {
    shortName: "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "#D71920",
    secondaryColor: "#A7A9AC"
  },
  {
    shortName: "GT",
    fullName: "Gujarat Titans",
    primaryColor: "#0A1C3B",
    secondaryColor: "#C8A03B"
  },
  {
    shortName: "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "#0057E2",
    secondaryColor: "#F5C542"
  }
];

btn.addEventListener("click",function(){
    let team =iplTeams[ Math.floor(Math.random()*iplTeams.length)]
    teamName.innerHTML=team.shortName
    teamFullName.innerHTML=team.fullName
    teamFullName.style.color=team.secondaryColor
    box.style.backgroundColor=team.secondaryColor
    main.style.backgroundColor=team.primaryColor
})