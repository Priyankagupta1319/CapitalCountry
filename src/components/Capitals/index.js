import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },

// Write your code here

class Capitals extends Component {
    state = {
        ActiveCapitalId : countryAndCapitalsList[0].id

    
    }

    onChangeCapital = ()=>{
        this.setState({ActiveCapitalId: event.target.value})
    }
    // getCountry = ()=>{
    //     const {ActiveCapitalId}= this.state
    //     const activeCapitalCountry = countryAndCapitalsList.find(each=>(each.id == ActiveCapitalId

    getCountry = () => {
    const {ActiveCapitalId} = this.state
    const activeCapitalCountry = countryAndCapitalsList.find(
      each => each.id === ActiveCapitalId,
    )
    // console.log(activeCapitalCountry)
    return activeCapitalCountry.country     // return country for the selected capital
  }
    
        render(){
            const {ActiveCapitalId} = this.state
            const country = this.getCountry(ActiveCapitalId)
    return (
      <div className="app-container">
        <div className="container">
          <h1>Countries And Capitals</h1>
          <div>
            <select  onChange={this.onChangeCapital}
              value={ActiveCapitalId}

           >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
             </select>

            <p>{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
