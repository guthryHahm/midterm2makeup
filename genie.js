
// Written by mlazze@globocorp.com - email me at mlazze1337dev@gmail.com for freelance work!

window.addEventListener('DOMContentLoaded', init);

const messages = [];
let count = 0;
function init() {



  const appVersion = "1.0";
  const appName = "GloboCorp's GPT Genie";
  console.log(appName + " " + appVersion + " loaded @ " + new Date());

}

function send() {
  const input = document.getElementById('input');
  const prompt = input.value;

  if (prompt == '') {
    alert('Type something!');
    return;
  }

  count++;
  messages.push(prompt);

  const chat = document.getElementById('chatbox');
  chat.innerHTML += `<div class="usertextbox">
    <div class="message user"> 
    <p class="nameTitle"><b>YOU</b></p>
    <p>${prompt}</p>
    </div>
    </div>`;
  input.value = '';

  // TODO: Simulate the chat for now
  // replace with a to askGPTGenie(prompt)

  setTimeout(function () {
    const replies = ["Cool!", "Awesome!", "Noice", "Killer idea", "Lowkey fire", "Fire", "Goated idea", "I hear you...", "Sounds like a plan"];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    chat.innerHTML += `<div class="message bot">
    <p class="nameTitle"><b>GENIE</b></p>
    <p>${reply}</p>

    </div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);
  // End Simulate

}
