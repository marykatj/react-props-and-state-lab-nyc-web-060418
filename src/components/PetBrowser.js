import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


petMapper = () => {
  return this.props.pets.map(pet => <Pet key={pet.id} petInfo={pet} adoptPet={this.props.adoptPet}/>)
}


  render() {
    return (
      <div className="ui cards">
        {this.petMapper()}
      </div>
    )
  }
}

export default PetBrowser

//Should receive an onAdoptPet prop. This callback prop gets passed to its TAGPetTAG children components.
