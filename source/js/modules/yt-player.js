import './yt-iframe-api';
const playVideoButton = document.querySelector('[data-video-button]');
const videoBlock = document.querySelector('[data-video]');

let player;

export function onYouTubeIframeAPIReady() {
  if (videoBlock) {
    player = new YT.Player('player', {
      videoId: '9TZXsZItgdw',
      playerVars: {'autoplay': 0, 'controls': 0, 'modestbranding': 1, 'showinfo': 0},
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      },
    });
  }
}

function onPlayerReady(event) {
  event.target.playVideo();
}

if (playVideoButton) {
  playVideoButton.addEventListener('click', ()=>{
    player.playVideo();
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    videoBlock.classList.remove('is-active');
  }

  if (event.data === YT.PlayerState.PLAYING) {
    videoBlock.classList.add('is-active');
  }
}
