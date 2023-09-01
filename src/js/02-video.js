import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const storageKey = 'videoplayer-current-time';
player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  const currentTime = Math.floor(event.seconds);
  localStorage.setItem(storageKey, currentTime.toString());
}

const savedTime = localStorage.getItem(storageKey);

if (savedTime) {
  player.setCurrentTime(parseInt(savedTime));
}