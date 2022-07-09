let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];
const consoleElement = document.getElementsByClassName('console-content')[0]

const COMMANDS = {
  gcash: "<span >Whoa!!! You typed in the <span class='code'>forbidden</span> command! You are now obliged to donate a minimum amount of PHP 50.00 to my gcash account +63 935 531 0166. Just Kidding hehe</span>",
  n: "OK",
  no: "OK",
  about:
    "I am Yvan C. Sabay a Full Stack Web Developer and a UI-UX Designer. <a style='color: rgba(34, 197, 94)' href ='https://github.com/newbie2019-hub' target='_blank'> Github,</a> <a style='color: rgba(34, 197, 94)' href ='https://www.facebook.com/sabay.yvan/' target='_blank'> Facebook</a>",
  sudo: "user not in the sudoers file.  This incident will be reported.",
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">contact</span>, <span class="code">github</span>, <span class="code" style="opacity: 0.4">gcash</span>,<br>System commands: <span class="code">clear</span>, <span class="code">history</span><br>Tip: Use Up / Down arrow to go through recent commands',
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
  if (input.indexOf("sudo") >= 0) {
    input = "sudo";
  }

  if (input == "projects") {
    open("pages/projects.html");
  } else if (input === "clear" || input === "cls") {
    // clearScreen();
    terminalOutput.innerHTML = `<div class="terminal-line">
      <span class="help-msg"> Type <span class="help"> help </span> to see a list of supported
    commands.<br></div> `
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
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    userInput.focus()
    return;
  }

  userInput.innerHTML = input + e.key;
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
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
