const reelsData = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "./reels/v0.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "dev_diaries",
    likeCount: 9320,
    isLiked: true,
    commentCount: 211,
    shareCount: 54,
    isFollowed: true,
    caption: "One bug fixed, three new ones discovered.",
    video: "./reels/v1.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "frontendwizard",
    likeCount: 22140,
    isLiked: false,
    commentCount: 612,
    shareCount: 134,
    isFollowed: false,
    caption: "CSS is easy until it’s not.",
    video: "./reels/v2.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "js_junkie",
    likeCount: 18750,
    isLiked: true,
    commentCount: 489,
    shareCount: 101,
    isFollowed: true,
    caption: "Console.log is my debugger.",
    video: "./reels/v3.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1762656669479-496d6291ef64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    username: "techstories",
    likeCount: 6540,
    isLiked: false,
    commentCount: 98,
    shareCount: 27,
    isFollowed: false,
    caption: "Code once. Debug forever.",
    video: "./reels/v4.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "bughunter",
    likeCount: 30120,
    isLiked: true,
    commentCount: 902,
    shareCount: 210,
    isFollowed: true,
    caption: "It worked yesterday. I swear.",
    video: "./reels/v5.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "design_to_dev",
    likeCount: 11200,
    isLiked: false,
    commentCount: 276,
    shareCount: 63,
    isFollowed: false,
    caption: "From Figma to frustration.",
    video: "./reels/v6.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "stack_overflowed",
    likeCount: 8450,
    isLiked: false,
    commentCount: 190,
    shareCount: 44,
    isFollowed: false,
    caption: "Copy. Paste. Pray.",
    video: "./reels/v3.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "midnightcoder",
    likeCount: 17630,
    isLiked: true,
    commentCount: 352,
    shareCount: 88,
    isFollowed: true,
    caption: "Code hits different at 2 AM.",
    video: "./reels/v1.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=930&auto=format&fit=crop"
  },
  {
    username: "uiuxdaily",
    likeCount: 9900,
    isLiked: false,
    commentCount: 215,
    shareCount: 51,
    isFollowed: false,
    caption: "Good UI hides bad code.",
    video: "./reels/v5.mp4",
    isMuted: true,
    userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=930&auto=format&fit=crop"
  }
];
let allReelsContainer = document.querySelector('.reels-container')
function addReelData() {
  let sum = '';

  reelsData.forEach((reel, idx) => {
    sum = sum + `        
          <div class="reel">
            <video id=${idx} class="reel-video" loop ${reel.isMuted ? 'muted' : ''} src="${reel.video}"></video>
            <div class="mute-btn" id=${idx}>
            ${reel.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
            </div>
            <div id=${idx} class="play-btn"><i class="ri-play-fill"></i></div>
            <div class="reel-details">
              <div class="user-details">
                <img src="${reel.userprofile}" alt="" class="userProfile">
                <h4 class="userName">${reel.username}</h4>
                <button id=${idx} class="follow-btn">${reel.isFollowed ? `Unfollow` : `Follow`}</button>
              </div>
              <h4 class="reel-caption">${reel.caption}</h4>
            </div>
            <div class="reel-stats">
              <div id=${idx} class="like">
                <h4 class="like-icon icon">${reel.isLiked ? '<i class="love ri-heart-3-fill" style="color:red"></i>' : `<i class="ri-heart-3-line" ></i>`}</h4>
                <h6 >${reel.likeCount}</h6>
              </div>
              <div id=${idx} class="comment">
                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${reel.commentCount}</h6>
              </div>
              <div id=${idx} class="share">
                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${reel.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`
  })
  allReelsContainer.innerHTML = sum
}

addReelData();

let allPlayBtnArr = document.querySelectorAll('.play-btn')

let activeVideo = ''

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play()
      activeVideo = entry.target
      console.log(`active vid idx = ${activeVideo.id}`)
    } else {
      entry.target.pause()
    }
    activeVideo.addEventListener('click', () => {
      if (activeVideo.paused) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    })
  });
}, {
  threshold: 0.8
})

function reelObserver() {
  let eachReel = document.querySelectorAll('.reel video')
  eachReel.forEach(reel => {
    observer.observe(reel)
  })
}
reelObserver();

allReelsContainer.addEventListener('click', (details) => {
  let eventTargetedAt = details.target.className
  console.log(`eventTargetedAt: ${eventTargetedAt}`)

  switch (eventTargetedAt) {

    case 'like':
      if (reelsData[details.target.id].isLiked == false) {
        reelsData[details.target.id].likeCount++
        reelsData[details.target.id].isLiked = true
      }
      else {
        reelsData[details.target.id].likeCount--
        reelsData[details.target.id].isLiked = false
      };
      addReelData();
      reelObserver();
      break;

    case 'comment':
      reelsData[details.target.id].commentCount++;
      addReelData();
      reelObserver();
      break;

    case 'share':
      reelsData[details.target.id].shareCount++;
      addReelData();
      reelObserver();
      break;

    case 'follow-btn':
      if (reelsData[details.target.id].isFollowed == false) {
        reelsData[details.target.id].isFollowed = true
      }
      else {
        reelsData[details.target.id].isFollowed = false
      };
      addReelData();
      reelObserver();
      break;

    case 'mute-btn': console.log(reelsData[details.target.id].isMuted)
      if (reelsData[details.target.id].isMuted == false) {
        reelsData[details.target.id].isMuted = true
      }
      else {
        reelsData[details.target.id].isMuted = false
      };
      addReelData();
      reelObserver();
      break;
  }
})
