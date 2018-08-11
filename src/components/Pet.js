import React, { Component } from 'react'

class Pet extends Component {

genderSymbol = () => {
  if (this.props.petInfo.gender === 'male') {
    return "♂"
  }
  else return "♀"
}

isPetAdopted = () => {
  if (this.props.petInfo.isAdopted === true) {
    return <button className="ui disabled button">Already adopted</button>
  }
  else return <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
}

adoptPet = () => {
  console.log(this.props.petInfo.id)
}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p> Gender: {this.genderSymbol()}</p>
            <p> Name: {this.props.petInfo.name} </p>
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.isPetAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
