import "./styles.css";
import Player from "./Player";
import React from "react";
class App extends React.Component {
  // costruttore
  constructor() {
    super();
    this.state = {
      total: 10,
      points: [0, 0, 0]
    };
    this.onChange = this.onChange.bind(this);
  }
  // fine costruttore
  onChange(index, nextValue) {
    const { total, points } = this.state;
    const nextTotal = nextValue > points[index] ? total - 1 : total + 1;
    if (nextValue >= 0 && nextTotal >= 0) {
      const nextPoints = [...points]; //spread operator copia array
      nextPoints[index] = nextValue;
      this.setState({
        points: nextPoints,
        total: nextTotal
      });
    }
  }
  render() {
    const { total, points } = this.state;
    const { onChange } = this;
    return (
      <div className="App">
        <img
          className="react"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png"
          alt="React"
        />
        <h2>Punteggio Giocatori</h2>
        <h3>Totale Punti:{total}</h3>
        <Player index={0} points={points[0]} onChange={onChange} />
        <Player index={1} points={points[1]} onChange={onChange} />
        <Player index={2} points={points[2]} onChange={onChange} />
      </div>
    );
  }
}

export default App;
