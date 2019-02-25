export const examples = [
  {
    src: "spaceblocks.jpg",
    name: "spaceblocks",
    heading: "Space Blocks Attack!",
    text:
      "A Javascript and HTML5 Canvas-drawn game, utilising Redux, a small Node.js Express app, Axios and MongoDB for posting and retrieving scores.",
    language: "javascript",
    codeText: `// crash detection and explosion -----------------------------

    function crashDetect(x, y, w, h, level) {
      for (var i = 0; i < enemies.length; i++) {
        const e = enemies[i]
        if (
          x + w - 3 >= e.x &&
          x + 3 < e.x + e.w &&
          y + h - 3 >= e.y &&
          y + 3 < e.y + e.h
        ) {
          explosion(x + w * 0.5, y + h * 0.5)
          lose(level)
        }
      }
    }

    const shrapnel = []
    const fireColor = [
      "rgba(255, 203, 5, 1)",
      "rgba(211, 84, 0, .9)",
      "rgba(248, 148, 6, 1)",
      "rgba(255, 203, 5, 1)",
      "rgba(242, 38, 19, 1)",
      "rgba(207, 0, 15, 1)"
    ]

    function makeShrapnel(x, y) {
      shrapnel.push({
        x: x,
        y: y,
        r: Math.random() * 3 + 1,
        xD: Math.random() * negPos[Math.floor(Math.random() * negPos.length)],
        yD: Math.random() * negPos[Math.floor(Math.random() * negPos.length)],
        clr: fireColor[Math.floor(Math.random() * fireColor.length + 0.1)]
      })
    }

    function explosion(x, y) {
      function explode() {
        makeShrapnel(x, y)
        makeShrapnel(x, y)
        makeShrapnel(x, y)
        makeShrapnel(x, y)
        for (var i = 0; i < shrapnel.length; i++) {
          const s = shrapnel[i]
          ctx.fillStyle = s.clr
          ctx.beginPath()
          ctx.arc(
            (s.x += s.xD),
            (s.y += s.yD),
            s.r * 0.3,
            0,
            Math.PI * 2,
            false
          )
          ctx.fill()
          if (s.x < 0) {
            shrapnel.splice(i, 1)
          }
          if (s.x > cW) {
            shrapnel.splice(i, 1)
          }
          if (s.y < 0) {
            shrapnel.splice(i, 1)
          }
          if (s.y > cH) {
            shrapnel.splice(i, 1)
          }
        }
      }

      setInterval(explode, 5)
    }`
  },

  {
    src: "mtgsearch.png",
    name: "mtgsearch",
    heading: "MTG Search Engine",
    text:
      "A ReactJS powered Magic: The Gathering card search engine, using Redux and Thunk middleware.",
    language: "javascript",
    codeText: `// ColorChoice component-------------------------

    import React from "react"
    import cn from "classnames"
    import styles from "./ColorChoice.module.scss"
    
    const ColorChoice = props => {
      return (
        <div className={styles.container}>
          {props.colorsCard.map(c => {
            return (
              <label
                key={c.identity}
                className={cn(styles.colorCheck, { [styles[c.value]]: c.value })}
              >
                <input
                  type="checkbox"
                  name="colors"
                  value={c.value}
                  checked={c.checked}
                  onChange={props.handleChange}
                  className={c.value}
                />
                {c.identity}
              </label>
            )
          })}
          <label className={styles.colorlessRadio}>
            <input
              type="radio"
              name="colorless"
              value="Colorless"
              checked={props.colorless}
              onChange={props.radioChange}
            />
            Colorless
          </label>
        </div>
      )
    }
    
    export default ColorChoice


    //ColorChoice render within parent component------------------------------

    <ColorChoice
            colorsCard={this.state.colorsCard}
            handleChange={this.handleChange}
            colorless={this.state.colorless}
            radioChange={this.handleRadioChange}
            noOtherColor={this.state.noOtherColor}
          />


    //Handle change within parent component----------------------

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
`
  }
]

export const snippets = [
  {
    name: "reduxReducer",
    heading: "A Redux reducer",
    language: "javascript",
    codeText: `
    // Reducer for Space Blocks Attack score -------------------

    const initState = {
      score: 0,
      playerName: "",
      submitting: false,
      toTable: false,
      errRender: false
    }
    
    const scoreReducer = (state = initState, action) => {
      switch (action.type) {
        case "LOG_TO_STORE":
          return {
            ...state,
            score: action.score
          }
        case "POST_STARTED":
          return {
            ...state,
            submitting: true
          }
        case "POST_SUCCESS":
          return {
            ...state,
            playerName: "",
            score: 0,
            submitting: false,
            toTable: true
          }
        case "POST_ERROR":
          return {
            ...state,
            playerName: "",
            submitting: false,
            errRender: true
          }
        default:
      }
      return state
    }
    
    export default scoreReducer`
  },
  {
    name: "reduxAction",
    heading: "A Redux action creator",
    language: "javascript",
    codeText: `
    // Action creator for posting Space Blocks Attack scores 
    // (making use of Thunk)-------------------------------

    const axios = require("axios")

    export const logToStore = score => {
      console.log(score)
      return {
        type: "LOG_TO_STORE",
        score
      }
    }
    
    const postStarted = {
      type: "POST_STARTED"
    }
    
    const postSuccess = {
      type: "POST_SUCCESS"
    }
    
    const postError = err => {
      console.log("Error:", err)
      return {
        type: "POST_ERROR"
      }
    }
    
    export const postScore = (playerName, score) => {
      return dispatch => {
        dispatch(postStarted)
        axios
          .post("https://spaceblocksattack.herokuapp.com/api/scores", {
            name: playerName,
            score: score
          })
          .then(() => {
            dispatch(postSuccess)
          })
          .catch(err => {
            dispatch(postError(err))
          })
      }
    }`
  },
  {
    name: "scoretable",
    heading: "Fetching high scores: a React component",
    language: "javascript",
    codeText: ` 
    //Fetching Space Blocks Attack! scores, via Express app hosted on Heroku -------------------

    import React, { Component } from "react"
    import TableEntry from "./TableEntry"
    import { Link } from "react-router-dom"
    import Conditional from "./Conditional"
    import styles from "./highScoreTable.module.scss"

    const axios = require("axios")

    class HighScoreTable extends Component {
      constructor(props) {
        super(props)
        this.state = {
          scores: [],
          isLoading: true,
          error: false
        }
        this.loaded = this.loaded.bind(this)
      }

      componentDidMount() {
        axios
          .get("https://spaceblocksattack.herokuapp.com/api/scores")
          .then(res => {
            this.setState({
              scores: res.data
            })
          })
          .then(() => {
            this.loaded()
          })
          .catch(err => {
            console.log("Error:", err)
            this.setState({
              error: true,
              isLoading: false
            })
          })
      }

      loaded() {
        this.setState({
          isLoading: false
        })
      }

      handleClick() {
        window.close()
      }

      render() {
        return (
          <div className={styles.scoreTable}>
            <h1>Space Blocks Attack!</h1>
            <h2>High Scores</h2>
            <ul>
              {this.state.scores
                .sort((a, b) => b.score - a.score)
                .slice(0, 10)
                .map((info, i) => {
                  let classID = ""
                  i % 2 === 0 ? (classID = "even") : (classID = "odd")
                  return (
                    <TableEntry
                      key={info._id}
                      elementClass={classID}
                      name={info.name}
                      score={info.score}
                      date={info.create_date}
                    />
                  )
                })}
            </ul>
            {this.state.error ? (
              <h1 className={styles.failed}>Failed to fetch scores from server!</h1>
            ) : null}
            <Conditional submitting={this.state.isLoading} />
            <br />
            <Link to="/spaceblocks">
              <button>Back to menu</button>
            </Link>
            <button onClick={this.handleClick}>Exit Game</button>
          </div>
        )
      }
    }

    export default HighScoreTable`
  },
  {
    name: "navbar",
    heading: "Builing a NavBar",
    language: "javascript",
    codeText: `
    //Use of array.prototype.map() to build a NavBar component---------- 

    import React, { Component } from "react"
    import NavLink from "./NavLink"
    import data from "../Header/data.json"
    import styles from "./navBar.module.scss"
    
    class NavBar extends Component {
      constructor(props) {
        super(props)
        this.state = {
          routes: data.routes
        }
        this.handleClick = this.handleClick.bind(this)
      }
    
      handleClick(name) {
        this.setState(prevState => {
          const updatedState = prevState.routes.map(route => {
            route.active = route.routeName === name ? true : false
            return route
          })
          return {
            routes: updatedState
          }
        })
      }
    
      render() {
        const routes = this.state.routes.map(route => (
          <NavLink
            key={route.routeName}
            name={route.routeName}
            path={route.path}
            exact={route.exact}
            text={route.text}
            id={route.routeName}
            handleClick={this.handleClick}
          />
        ))
    
        return (
          <div className={styles.navBar}>
            <ul id="navigation" className={styles.navList}>
              {routes}
            </ul>
          </div>
        )
      }
    }
    
    export default NavBar`
  },
  {
    name: "scss",
    heading: "SCSS with CSS Grid",
    language: "scss",
    codeText: `
    //An SCSS Module making use of CSS Grid-------------------------

    .imageContainer {
    max-width: 1100px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 20px auto repeat(2, 80px);
    grid-template-areas:
      "header header header header image image"
      "mid-left mid-left mid-mid mid-mid image image"
      "mid-left mid-left mid-mid mid-mid image image"
      "bottom-left bottom-left mid-mid mid-mid image image";
    grid-column-gap: 20px;
    grid-row-gap: 5px;
    border: solid black 1px;
    background: white;
    color: black;
  
    img {
      width: 150px;
    }
  
    h3 {
      grid-row: 3/5;
      grid-column: 1/3;
      font-size: 12px;
      font-style: italic;
      font-weight: bold;
    }
  
    p {
      font-size: 15px;
      grid-area: mid-mid;
      align-self: center;
    }
  }
  
  .imageHeader {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    grid-area: header;
    a {
      text-decoration: none;
      color: black;
    }
    h1 {
      font-size: 22px;
      margin: 0 15px 0 0;
    }
    h2 {
      margin: 0 15px 0 0;
    }
    h4 {
      font-size: 12px;
    }
  }
  
  .imageLink {
    justify-self: end;
    grid-area: image;
  }
  
  .printings {
    grid-row: 2/3;
    grid-column: 1/3;
    display: flex;
    flex-wrap: wrap;
    p {
      font-size: 10px;
      margin: 0 10px 5px 0;
    }
  }
  `
  }
]
