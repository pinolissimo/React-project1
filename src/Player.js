import React from "react";
import Proptypes from "prop-types";
class Player extends React.Component {
  constructor() {
    super();
    this.incrementaPunti = this.incrementaPunti.bind(this);
    this.decrementaPunti = this.decrementaPunti.bind(this);
  }

  incrementaPunti() {
    const { points, onChange, index } = this.props;
    onChange(index, points + 1);
  }
  decrementaPunti() {
    const { points, onChange, index } = this.props;
    onChange(index, points - 1);
  }
  render() {
    const { points, index } = this.props;
    const { incrementaPunti, decrementaPunti } = this;
    return (
      <div className="Player">
        <img
          src="https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOT4x01zHLL5swV9--0z0NJuBUDI5MtyfIIXjkQc0gbWgSojjuvT1rJzW355rE-RiF6zGD2P2OOtnAGYNyQjFe97IIfO=w1920-h975"
          style={{ width: "30%", verticalAlign: "middle" }}
          alt="PLAYER"
        />
        <span>
          Player {index + 1} ha:{points} punti &nbsp;
          <button onClick={incrementaPunti}>+</button>
          <button onClick={decrementaPunti}>-</button>
        </span>
      </div>
    );
  }
}
Player.proptypes = {
  points: Proptypes.number.isRequired,
  index: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired
};
export default Player;
