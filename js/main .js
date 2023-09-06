import WebSocket from 'ws';
const ws = null;

const connBtn = document.querySelector('#connectServer');
const randomMatchBtn = document.querySelector('#randomMatch');
const withAIBtn = document.querySelector('#withAI');
const withFriendBtn = document.querySelector('#withFriend');

connBtn.addEventListener('click', () => {
    ws = new WebSocket('ws://localhost:3000');
    ws.on('error', console.error);
    ws.on('open', () => {
        alert('Connect Server Success!');
        connBtn.disabled = true;
        randomMatchBtn.disabled = false;
        withAIBtn.disabled = false;
        withFriendBtn.disabled = false;
    })
});