import React, { Component } from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
//import petsData from '../data/pets'

const apiURL = `/api/pets`
const dogURL = `/api/pets?type=dog`
const catURL = `/api/pets?type=cat`
const pigURL = `/api/pets?type=micropig`


class App extends Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = ({ target: { value } }) => {                ///line 26?
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }


  getData = () => {
      if (this.state.filters.type === 'all') {
        fetch(apiURL).then(response => response.json())
        .then(allData => this.setState({
          pets: allData
        }))
      }
      if (this.state.filters.type === 'cat') {
        fetch(catURL).then(response => response.json())
        .then(catData => this.setState({
          pets: catData
        }))
      }
      if (this.state.filters.type === 'dog') {
        fetch(dogURL).then(response => response.json())
        .then(dogData => this.setState({
          pets: dogData
        }))
      }
      if (this.state.filters.types === 'micropig') {
        fetch(pigURL).then(response => response.json())
        .then(pigData => this.setState({
          pets: pigData
        }))
      }
  }

  adoptPet = () => {

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.getData}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
