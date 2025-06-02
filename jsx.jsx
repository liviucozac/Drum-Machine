class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Please press a button",
      volume: 0.5,
      power: true,
      darkmode: true
    };
  }
  
onClick = (e) => {
  if (!this.state.power) return;

  const pad = e.currentTarget;
  const audio = pad.querySelector("audio");
  if (audio) {
    audio.play();
    this.setState({ display: `${pad.id} (${audio.id})` });
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 100);
  }
};

toggleDarkMode = () => {
  this.setState(prev => {
    const nextMode = !prev.darkMode;
    document.body.className = nextMode ? "light" : "";
    return { darkMode: nextMode };
  });
};


  
  togglePower = () => {
  this.setState(prev => ({ power: !prev.power, display: prev.power ? "OFF" : "ON" }));
};

handleKeyDown = (e) => {
  if (!this.state.power) return;

  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (audio) {
    audio.play();
    const pad = audio.parentElement;
    this.setState({ display: `${pad.id} (${key})` });
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 100);
  }
};

  
   setVolume = (e) => {
  const volume = parseFloat(e.target.value);
  this.setState({ volume });
  const clips = document.querySelectorAll(".clip");
  clips.forEach(audio => audio.volume = volume);
};
  
componentDidMount() {
  document.addEventListener("keydown", this.handleKeyDown);
  const clips = document.querySelectorAll(".clip");
  clips.forEach(audio => audio.volume = this.state.volume);
  clips.forEach(audio => audio.volume = this.state.volume);

}


componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyDown);
}

  
  render() {
    return (
      <div id="drum-machine">
        <button onClick={this.toggleDarkMode} className="power-btn">
  {this.state.darkMode ? "Dark Mode" : "Light Mode"}</button>
        <button onClick={this.togglePower} className="power-btn">Power</button>
        <div className="volume">
         <div className="volume-label">Volume</div>
         <div className="volume-slider">
        </div>
  <input type="range" min="0" max="1" step="0.01" onChange={this.setVolume} />
</div>
        <div id="display">{this.state.display}</div>

        <div className="drum-pad" onClick={this.onClick} value="Q" id="Heater-1">Q
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="W" id="Heater-2">W
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="E" id="Heater-3">E
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="A" id="Heater-4">A
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="S" id="Clap">S
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="D" id="Open-HH">D
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="Z" id="Kick-n'-Hat">Z
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="X" id="Kick">X
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>
  </div>
  <div className="drum-pad" onClick={this.onClick} value="C" id="Closed-HH">C
    <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>  </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
