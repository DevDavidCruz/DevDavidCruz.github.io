const terminal = document.getElementById('terminal')
const termDate = document.getElementById('term-date')
const commandInput = document.getElementById('commandInput')

commandInput.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    const command = commandInput.value;
    if (command) {
      printCommand(command);
    }

    commandInput.value = '';
  }
});

// Function to update the date
function updateDate() {
  const dateSpan = document.getElementById('term-date'); // Get the span element
  const currentDate = new Date(); // Get the current date

  // Format the date to a readable format (e.g., "February 20, 2025")
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Update the text content of the span with the formatted date
  dateSpan.textContent = formattedDate;
}

// Call the function to update the date when the page loads
window.onload = updateDate;

// Optional: Update the date every 24 hours (86400000 ms)

function printCommand(command) {
  //print("Enter hit: command printed")
  console.log(`Enter hit: ${command}`)
  const newLine = document.createElement('div');
  newLine.classList.add('line');
  newLine.innerHTML = `<span class="prompt">[guest@Web] $</span> ${command}`;
  const lines = terminal.getElementsByClassName('line');
  console.log(lines[lines.length - 1])
  const prevPrompt = lines[lines.length - 1];
  terminal.removeChild(prevPrompt)
  terminal.appendChild(newLine);
  handleCommand(command);
  terminal.appendChild(prevPrompt);
  //terminal.appendChild(prevPrompt);
  //terminal.appendChild(newLine);
  terminal.scrollTop = terminal.scrollHeight;
  commandInput.focus();
}

function handleCommand(command) {
  const newLine = document.createElement('div');
  newLine.classList.add('line');

  if (command === 'hello') {
    newLine.innerText = `Hello, welcome to the terminal!`;
  } else if (command === 'clear') {
    terminal.innerHTML = ``;
  }
  else if (command === '?' || command === 'help') {
    newLine.innerHTML = `<div>
      <p>[option]<br>Options:
        <table>
          <colgroup>
            <col span="2" style="text-align:center;">
            <col style="background-color:blue;">
          </colgroup>
          <tbody>
            <tr>
              <td>bio</td>
              <td>Biography Information</td>
            </tr>
            <tr>
              <td>ops</td>
              <td>Operating System Information</td>
            </tr>
            <tr>
              <td>langs</td>
              <td>Programming Languages</td>
            </tr>
            <tr>
              <td>editors</td>
              <td>IDE/Text Editors</td>
            </tr>
            <tr>
              <td>work</td>
              <td>Work History Informaiton</td>
            </tr>
            <tr>
              <td>interests</td>
              <td>Personal Interests/Hobbies</td>
            </tr>
          </tbody>
        </table>
      </p>
    </div>
    `;
  }
  else if (command === 'work') {
    newLine.innerHTML = `<ul>
      <li>
        Esri (Environmental Software Research Institute)
        <ul>
          <li>Software Engineer 2</li>
          <li>2019 - Present</li>
        </ul>
      </li>
      <li>
        Optimal State
        <ul>
          <li>Freelance Developer</li>
          <li>2018 - 2019</li>
        </ul>
      </li>
    </ul>`;
  }
  else if (command === 'bio') {
    newLine.innerHTML = `<div>
      <p>
        David Cruz<br>
        ---<br>
        1994:&emsp; Born in San-Bernardino, CA<br>
        ---<br>
        2019:&emsp;B.S Computer Science @ CSUSB<br>
        2019:&emsp;Software Engineer I @ Esri<br>
        2022:&emsp;Software Engineer II @ Esri<br>
        Present: Software Engineer II @ Esri<br>
      </p>
    </div>`;
  }
  else if (command === 'interests') {
    newLine.innerHTML = `<ul>
      <li>
        Martial Arts
      </li>
      <li>
        Video Games
      </li>
      <li>Weight-Training</li>
      <li>Mountain Biking</li>
    </ul>`;
  }
  else if (command === 'ops') {
    newLine.innerHTML = `<ul>
      <li>
        <i class="devicon-windows11-plain term-icon"> Windows 11</i>
      </li>
      <li>
        <i class="devicon-apple-plain term-icon"> MacOs</i>
      </li>
      <li>
        <i class="devicon-linux-plain term-icon"> Linux</i>
        <ul>
          <li>
            <i class="devicon-archlinux-plain term-icon"> Arch Linux</i>
          </li>
          <li>
            <i class="devicon-ubuntu-plain term-icon"> Ubuntu</i>
          </li>
        </ul>
      </li>
    </ul>`;
  }
  else if (command === 'editors') {
    newLine.innerHTML = `<ul>
      <li>
        <i class="devicon-visualstudio-plain term-icon"> Visual Studio</i>
      </li>
      <li>
        <i class="devicon-vscode-plain term-icon"> VSCode</i>
      </li>
      <li>
        <i class="devicon-xcode-plain term-icon"> XCode</i>
      </li>
      <li>
        <i class="devicon-vim-plain term-icon"> Vim</i>
        <ul>
          <li>
            <i class="devicon-neovim-plain term-icon"> NeoVim</i>
          </li>
        </ul>
      </li>
    </ul>`;
  }
  else if (command === 'langs') {
    newLine.innerHTML = `<ul>
      <li>
        <i class="devicon-cplusplus-plain term-icon"> C++(17/20)</i>
      </li>
      <li>
        <i class="devicon-csharp-plain term-icon"> C#</i>
      </li>
      <li>
        <i class="devicon-swift-plain term-icon"> Swift/SwiftUI</i>
      </li>
      <li>
        <i class="devicon-python-plain term-icon"> Python</i>
      </li>
      <li>
        <i class="devicon-bash-plain term-icon"> Bash</i>
      </li>
      <li>
        <i class="devicon-powershell-plain term-icon"> Powershell</i>
      </li>
      <li>
        <i class="devicon-rust-plain term-icon"> Rust</i>
      </li>
      <li>
        <i class="devicon-javascript-plain term-icon"> Javascript</i>
      </li>
      <li>
        <i class="devicon-html5-plain term-icon"> HTML</i>
      </li>
      <li>
        <i class="devicon-css3-plain term-icon"> CSS</i>
      </li>
    </ul>`;
  }
  else if (command === 'langs') {
    newLine.innerHTML = `<ul>
      <li>
        <i class="devicon-cplusplus-plain"> C++(17/20)</i>
      </li>
      <li>
        <i class="devicon-csharp-plain"> C#</i>
      </li>
      <li>
        <i class="devicon-python-plain"> Python</i>
      </li>
      <li>
        <i class="devicon-rust-plain"> Rust</i>
      </li>
    </ul>`;
  }
  else {

    newLine.innerText = `Command not found: !`;
  }
  terminal.appendChild(newLine);
  terminal.scrollTop = terminal.scrollHeight; // Scroll to the bottom
}

setInterval(updateDate, 86400000);
