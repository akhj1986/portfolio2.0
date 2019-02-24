import React, { Component } from "react"
import { connect } from "react-redux"
import styles from "./Search.module.scss"
import { searchQuery } from "../../../../store/actions/searchQuery"
import searchTerms from "./search/searchTerms.json"
import ResultsBoard from "./search/ResultsBoard"
import ColorChoice from "./search/ColorChoice"
import RarityChoice from "./search/RarityChoice"
import Types from "./search/Types"
import SubTypes from "./search/SubTypes"
import ConvertedMC from "./search/ConvertedMC"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardName: "",
      colors: [],
      colorless: false,
      colorsCard: searchTerms.colorsCard,
      noOtherColor: false,
      rarity: [],
      rarityCard: searchTerms.rarityCard,
      typeCard: searchTerms.typeCard,
      type: "",
      subTypesCard: searchTerms.subTypesCard,
      subType: "",
      cmc: "",
      advancedSearch: false,
      advancedButtonText: "Advanced Search"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      if (prevState.advancedSearch === true) {
        return {
          advancedSearch: false,
          advancedButtonText: "Advanced Search",
          type: "",
          subType: "",
          cmc: ""
        }
      } else {
        return {
          advancedSearch: true,
          advancedButtonText: "Basic Search"
        }
      }
    })
  }

  handleChange(event) {
    const { name, value, type } = event.target
    const searchCard = [name] + "Card"
    if (type === "checkbox") {
      this.setState(prevState => {
        let arr = prevState[name]
        if (arr.includes(value)) {
          arr = arr.filter(item => item !== value)
        } else {
          arr.push(value)
        }
        return {
          [name]: arr,
          colorless: name === "colors" ? false : prevState.colorless,
          [searchCard]: prevState[searchCard].map(card => {
            if (card.value !== value) {
              return card
            }
            return {
              ...card,
              checked: !card.checked
            }
          })
        }
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleRadioChange(event) {
    const { name } = event.target
    this.setState(prevState => {
      return {
        [name]: !prevState[name],
        colors: [],
        colorsCard: prevState.colorsCard.map(card => {
          return {
            ...card,
            checked: false
          }
        })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.searchQuery(this.state)
    this.setState({
      hasSearched: true
    })
  }

  render() {
    return (
      <div className={styles.searchPage}>
        <h1>Magic: The Gathering</h1>
        <h2>Card search engine</h2>
        <form className={styles.searchForm} onSubmit={this.handleSubmit}>
          <input
            name="cardName"
            type="text"
            value={this.state.cardName}
            placeholder="Card Name"
            onChange={this.handleChange}
          />
          <ColorChoice
            colorsCard={this.state.colorsCard}
            handleChange={this.handleChange}
            colorless={this.state.colorless}
            radioChange={this.handleRadioChange}
            noOtherColor={this.state.noOtherColor}
          />
          <RarityChoice
            rarityCard={this.state.rarityCard}
            handleChange={this.handleChange}
          />
          {this.state.advancedSearch ? (
            <div className={styles.advancedSearch}>
              <Types
                typeCard={this.state.typeCard}
                handleChange={this.handleChange}
              />
              <SubTypes
                subTypeCard={this.state.subTypesCard}
                handleChange={this.handleChange}
              />
              <ConvertedMC
                cmc={this.state.cmc}
                handleChange={this.handleChange}
              />
            </div>
          ) : null}
          <button type="submit" className={styles.submitButton}>
            Search
          </button>
        </form>
        <button onClick={this.handleClick} className={styles.advancedButton}>
          {this.state.advancedButtonText}
        </button>
        {this.state.hasSearched ? (
          <h1 className={styles.searchStatus}>
            {this.props.loading
              ? "Loading results..."
              : `${this.props.results.length} results found!`}
          </h1>
        ) : null}
        <div className={styles.displayBoard}>
          {this.props.results.map(card => {
            return <ResultsBoard srcData={card} key={card.id} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.search.results,
    loading: state.search.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchQuery: results => dispatch(searchQuery(results))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
