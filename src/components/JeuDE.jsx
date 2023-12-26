import React from "react";

class JeuDE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: 0,
      nbrEssais: 0,
      fin: false,
    };
  }

  jouer() {
    let newState = { ...this.state };

    let randomNbr = Math.floor(Math.random() * 6) + 1;
    newState.face = randomNbr;
    newState.nbrEssais = newState.nbrEssais + 1;
    if (this.props.secret == randomNbr) {
      newState.fin = true;
    } else {
      newState.fin = false;
    }

    this.setState(newState);
  }

  initialiser() {
    this.setState({
      face: 0,
      nbrEssais: 0,
      fin: false,
    });
  }

  render() {
    return (
      <div className="jeuDE">
        <img src={"./images/imgDice" + this.state.face + ".png"} alt="Dice" />
        <h1>Jeu de Dé...{this.props.secret}</h1>
        <h2>Face : {this.state.face}</h2>
        <h2>Nombres d'essais : {this.state.nbrEssais}</h2>
        {this.state.fin == true ? (
          <p>Bravo vous avez trouvé la face cachée.</p>
        ) : (
          <button onClick={() => this.jouer()}>Jouer</button>
        )}
        <button onClick={() => this.initialiser()}>Initialiser le jeu</button>
      </div>
    );
  }
}

export default JeuDE;
