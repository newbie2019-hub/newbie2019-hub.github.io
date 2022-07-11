let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];
const consoleElement = document.getElementsByClassName('console-content')[0]

const COMMANDS = {
  gcash: "<span >Whoa!!! You typed in the <span class='code'>forbidden</span> command! You are now obliged to donate a minimum amount of PHP 50.00 to my gcash account +63 935 531 0166. Just Kidding hehe</span>",
  hello: "Hi! :)",
  hi: "Hello! :)",
  no: "OK",
  about:
    "I am Yvan C. Sabay a Full Stack Web Developer and a UI-UX Designer. <a style='color: rgba(34, 197, 94)' href ='https://github.com/newbie2019-hub' target='_blank'> Github,</a> <a style='color: rgba(34, 197, 94)' href ='https://www.facebook.com/sabay.yvan/' target='_blank'> Facebook</a>",
  sudo: "user not in the sudoers file.  This incident will be reported.",
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">contact</span>, <span class="code">github</span>, <span class="code" style="opacity: 0.4">gcash</span>, <span class="code">darkmode</span> <br>System commands: <span class="code">clear</span>, <span class="code">history</span><br>Tip: Use Up / Down arrow to go through recent commands',
  contact:
    "Email: <a class='link' href='mailto:sabayyvan2018@gmail.com'>sabayvan2018@gmail.com</a><br>Mobile: (+63) 935 531 0166<br>",
};

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  input = input.toLowerCase();

  lastCommands.push(input);

  let output;

  if (input.length === 0) {
    return;
  }

  if (input == "darkmode") {
    if (JSON.parse(localStorage.getItem('darkMode'))) {
      localStorage.setItem('darkMode', false)
      document.documentElement.classList.remove('dark')
      document.getElementById('moon').classList.toggle('hidden')
      document.getElementById('sun').classList.toggle('hidden')
      terminalOutput.innerHTML += "<div class='link'> <span class='directory'>~</span> Dark Mode Disabled </div> "
    }
    else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', true)
      document.getElementById('sun').classList.toggle('hidden')
      document.getElementById('moon').classList.toggle('hidden')
      terminalOutput.innerHTML += "<div class='link'> <span class='directory'>~</span> Dark Mode Enabled </div> "
    }
  }
  else if (input == "projects") {
    // open("pages/projects.html");
    terminalOutput.innerHTML = `<div class="terminal-line"> 
    <span class="help-msg"> Coming soon... Type <span class="help"> help </span> to see a list of supported
  commands.<br></div> `
  } else if (input === "clear" || input === "cls") {
    // clearScreen();
    terminalOutput.innerHTML = `<div class="terminal-line">
    <span class="help-msg">Hello! You can type <span class="help">help</span> to see a list of supported
    commands and <span class="help">clear</span> to reset the terminal.</span></div> `
  } else if (input === "history") {
    showHist();
  } else if (input === "github") {
    open("https://github.com/newbie2019-hub");
  } else {
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${ input }</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">command not found: ${ input }</div>`;
    } else {
      output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${ terminalOutput.innerHTML }<div class="terminal-line">${ output }</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;

  }
};

const key = (e) => {
  console.log(e)
  const input = userInput.innerHTML;

  if (e.keyCode == 8) {
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
    return;
  }

  if (e.key === "Enter" || e.key === 13) {
    execute(input);
    userInput.innerHTML = "";
    userInput.focus()
    return;
  }
  userInput.innerHTML = input + e.key;
};

const virtualKey = (e) => {
  console.log(e)
  const input = userInput.innerHTML;

  if (e.inputType == 'deleteContentBackward') {
    // console.log('once')
    // userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
    return;
  }

  userInput.innerHTML = input + e.data;
};

const virtualKeyEnter = (e) => {
  const input = userInput.innerHTML;
  if (e.key === "Enter" || e.key === 13) {
    execute(input);
    userInput.innerHTML = "";
    userInput.focus()
    return;
  }
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

function showHist() {
  terminalOutput.innerHTML = `${ terminalOutput.innerHTML
    }<div class="terminal-line">${ lastCommands.join(", ") }</div>`;
}

let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
};

document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  document.getElementById('dummyKeyboard').addEventListener('input', virtualKey)
  document.addEventListener("keydown", virtualKeyEnter);
} else {
  document.addEventListener("keypress", key);
}
document.addEventListener("DOMContentLoaded", app);
