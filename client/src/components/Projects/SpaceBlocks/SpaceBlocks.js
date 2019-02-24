import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import styles from "./spaceBlocks.module.scss"
import { connect } from "react-redux"
import { logToStore } from "../../../store/actions/scoreLog"

import data from "./enemies.json"

class SpaceInvaders extends Component {
  constructor(props) {
    super(props)
    this.c = React.createRef()
    this.state = {
      endGame: false,
      score: 0
    }
  }

  updateScore = score => {
    this.setState({
      score
    })
  }

  componentDidMount() {
    const canvas = this.c.current
    const ctx = canvas.getContext("2d")
    const cH = ctx.canvas.height
    const cW = ctx.canvas.width
    const negPos = [-1, 1]

    //  Background stars ------------------------------------------------------------------------------------------------

    const stars = []

    function addStar() {
      const x = Math.floor(Math.random() * cW + 1)
      const y = Math.floor(Math.random() * cH)
      const s = Math.floor(Math.random() * 10 + 1)
      if (stars.length < 1000) {
        stars.push({ x: x, y: y, s: s })
      }
    }
    function spaceFly(clr) {
      addStar()
      addStar()
      addStar()
      addStar()
      addStar()

      for (let i = 0; i < stars.length; i++) {
        ctx.fillStyle = clr
        ctx.beginPath()
        //arc(x, y, radius, start-angle, endAngle, anticlockwise)
        ctx.arc(
          stars[i].x,
          (stars[i].y += stars[i].s * 0.03),
          stars[i].s * 0.09,
          0,
          Math.PI * 2,
          false
        )
        ctx.fill()
        if (stars[i].y > cH) {
          stars.splice(i, 1)
        }
      }
    }

    // Enemy objects ------------------------------------------------------------------------------------------------------
    const colors = data.colors
    const yTen = data.yTen
    const yForty = data.yForty
    const ySeventy = data.ySeventy
    const yHundred = data.yHundred
    const yHundredThirty = data.yHundredThirty
    const yHundredSixty = data.yHundredSixty
    const yHundredNinety = data.yHundredNinety
    const yTwoHundredTwenty = data.yTwoHundredTwenty
    const yTwoHundredFifty = data.yTwoHundredFifty
    const yPlusTen = data.yPlusTen
    const yPlusForty = data.yPlusForty
    const yPlusSeventy = data.yPlusSeventy
    const yTwoHundredFiftyTriple = data.yTwoHundredFiftyTriple
    const yThreeHundredTimesFive = data.yThreeHundredTimesFive

    let speed = 0.5
    const enemyWidth = 43
    const enemyColumns = 9
    const xDeterminer =
      (cW - enemyColumns * enemyWidth) / (enemyColumns + 1) / cW
    const xAdd = xDeterminer + enemyWidth / cW

    const enemiesTemplate = []
    let enemiesMap = []
    enemiesMap.push.apply(enemiesMap, yTen)

    let enemies = []

    function pushEnemies(level) {
      if (level === "two") {
        enemiesMap = enemiesTemplate.concat(yTen, yForty)
      }
      if (level === "three") {
        enemiesMap = enemiesTemplate.concat(yTen, yForty, ySeventy, yHundred)
      }
      if (level === "four") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundredThirty,
          yHundredSixty
        )
      }
      if (level === "five") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety
        )
      }
      if (level === "six") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety
        )
      }
      if (level === "seven") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundredThirty,
          yHundredSixty,
          yTwoHundredTwenty,
          yTwoHundredFifty
        )
      }
      if (level === "eight") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety
        )
      }
      if (level === "nine") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty
        )
      }
      if (level === "ten") {
        enemiesMap = enemiesTemplate.concat(
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty,
          yTwoHundredFifty
        )
      }
      if (level === "eleven") {
        enemiesMap = enemiesTemplate.concat(
          yPlusForty,
          yPlusTen,
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety
        )
      }
      if (level === "twelve") {
        enemiesMap = enemiesTemplate.concat(
          yPlusSeventy,
          yPlusForty,
          yPlusTen,
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty
        )
      }
      if (level === "thirteen") {
        enemiesMap = enemiesTemplate.concat(
          yPlusForty,
          yPlusTen,
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty,
          yTwoHundredFiftyTriple
        )
      }
      if (level === "fourteen") {
        enemiesMap = enemiesTemplate.concat(
          yPlusSeventy,
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty,
          yTwoHundredFiftyTriple,
          yThreeHundredTimesFive
        )
      }
      if (level === "fifteen") {
        enemiesMap = enemiesTemplate.concat(
          yPlusSeventy,
          yPlusForty,
          yPlusTen,
          yTen,
          yForty,
          ySeventy,
          yHundred,
          yHundredThirty,
          yHundredSixty,
          yHundredNinety,
          yTwoHundredTwenty,
          yTwoHundredFifty,
          yTwoHundredFiftyTriple,
          yThreeHundredTimesFive
        )
      }
    }

    function createEnemies(color) {
      enemies = enemiesMap.map(obj => ({
        x: cW * (xDeterminer + xAdd * obj.x),
        y: obj.y,
        w: enemyWidth,
        h: 15,
        clr: color
      }))
    }

    function Enemies(level) {
      for (var i = 0; i < enemies.length; i++) {
        const e = enemies[i]
        ctx.fillStyle = e.clr
        ctx.fillRect(e.x, (e.y += speed), e.w, e.h)
        if (e.y >= cH) {
          lose(level)
        }
      }
    }

    // player object and render -----------------------------------------------------------------------------------------

    const playerOne = { x: cW * 0.5, y: cH - 40, w: 40, h: 20, dir: "" }
    function playerRender(level) {
      const p = playerOne
      ctx.fillStyle = "#3e6f9d"
      ctx.fillRect(p.x, p.y, p.w, p.h)
      if (p.dir === "left" && p.x > -20) {
        p.x -= 10
      }
      if (p.dir === "right" && p.x < cW - 20) {
        p.x += 10
      }
      if (p.dir === "up" && p.y > -10) {
        p.y -= 5
      }
      if (p.dir === "down" && p.y < cH - 10) {
        p.y += 5
      }
      crashDetect(p.x, p.y, p.w, p.h, level)
    }

    // missile shot detection and projection ----------------------------------------------------------------------------
    let charge = 0
    const missiles = []
    let shots = 0
    let tempScore = 0
    let totalCharge = 0
    let chargeMissiles = []
    const finalRelease = []

    function chargeUp() {
      if (charge < 40) {
        const c = charge + 1
        charge = c
        totalCharge = charge
        document.getElementById("charge").innerHTML = `Charge: ${Math.floor(
          totalCharge / 2
        )}`
        chargeMissiles.push({
          id: totalCharge
        })
      }
    }

    function Missile(level) {
      for (var i = 0; i < missiles.length; i++) {
        const m = missiles[i]
        ctx.fillStyle = "#ff5a00"
        ctx.fillRect(m.x, (m.y -= 8), m.w, m.h)
        hitDetect(missiles[i], i, missiles, level)
      }
    }

    function chargeMissile(level) {
      for (var i = 0; i < finalRelease.length; i++) {
        const m = finalRelease[i]
        ctx.fillStyle = "#ff5a00"
        ctx.fillRect((m.x += m.xD), (m.y -= m.yD), m.w, m.h)
        hitDetect(finalRelease[i], i, finalRelease, level)
      }
    }

    let releasedCharge = []
    function releaseCharge() {
      releasedCharge = chargeMissiles
        .splice(0, chargeMissiles.length / 2)
        .map(() => ({
          x: playerOne.x + playerOne.w * 0.5,
          y: playerOne.y,
          xD:
            Math.random() *
            negPos[Math.floor(Math.random() * negPos.length)] *
            2,
          yD: Math.random() + 5,
          w: 3,
          h: 3
        }))
      Array.prototype.push.apply(finalRelease, releasedCharge)
      chargeMissiles = []
      totalCharge = 0
      charge = 0
      document.getElementById("charge").innerHTML = `Charge: 0`
    }

    const hitDetect = (m, mi, missileArray, level) => {
      for (var i = 0; i < enemies.length; i++) {
        const e = enemies[i]
        if (
          m.x + m.w >= e.x &&
          m.x < e.x + e.w &&
          m.y + m.h >= e.y &&
          m.y < e.y + e.h
        ) {
          missileArray.splice(mi, 1)
          enemies.splice(i, 1)
          enemiesTemplate.splice(i, 1)
          tempScore += Math.round(10 - 0.025 * e.y)
          document.getElementById("score").innerHTML = "Score: " + tempScore
        }
        if (enemies.length === 0) {
          win(level)
        }
      }
    }

    // crash detection and explosion ---------------------------------------------------------------------------------------

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
    }

    // animation functions -----------------------------------------------------------------------------------------------
    function animate(colour, level) {
      ctx.clearRect(0, 0, cW, cH)
      spaceFly(colour)
      playerRender(level)
      Missile(level)
      chargeMissile(level)
      Enemies(level)
    }

    let starColor = "rgba(255,255,255,0.75"
    let levelDeterminer = "one"

    const animateInit = setInterval(
      () => animate(starColor, levelDeterminer),
      30
    )

    let animateInitTwo = ""
    let animateInitThree = ""
    let animateInitFour = ""
    let animateInitFive = ""
    let animateInitSix = ""
    let animateInitSeven = ""
    let animateInitEight = ""
    let animateInitNine = ""
    let animateInitTen = ""
    let animateInitEleven = ""
    let animateInitTwelve = ""
    let animateInitThirteen = ""
    let animateInitFourteen = ""
    let animateInitFifteen = ""

    // Movement controls ------------------------------------------------------------------------------------------------

    document.addEventListener("keyup", function(event) {
      const keyStop = event.keyCode
      if (keyStop === 37 && playerOne.dir === "left") {
        playerOne.dir = ""
      }
      if (keyStop === 38 && playerOne.dir === "up") {
        playerOne.dir = ""
      }
      if (keyStop === 39 && playerOne.dir === "right") {
        playerOne.dir = ""
      }
      if (keyStop === 40 && playerOne.dir === "down") {
        playerOne.dir = ""
      }
      if (keyStop === 32) {
        missiles.push({
          x: playerOne.x + playerOne.w * 0.5,
          y: playerOne.y,
          w: 3,
          h: 7
        })
        shots = shots + 1
      }
    })

    document.addEventListener("keydown", function(event) {
      const keyNum = event.keyCode
      if (keyNum === 37) {
        playerOne.dir = "left"
      }

      if (keyNum === 39) {
        playerOne.dir = "right"
      }

      if (keyNum === 38) {
        playerOne.dir = "up"
      }
      if (keyNum === 40) {
        playerOne.dir = "down"
      }
      if (keyNum === 32) {
        chargeUp()
      }
      if (keyNum === 67) {
        releaseCharge(totalCharge)
      }
    })

    window.addEventListener(
      "load",
      createEnemies(colors[Math.floor(Math.random() * colors.length)])
    )

    // lose and win functions -------------------------------------------------------------------------------------------

    const lose = level => {
      this.updateScore(tempScore)
      if (level === "one") {
        clearInterval(animateInit)
      }
      if (level === "two") {
        clearInterval(animateInitTwo)
      }
      if (level === "three") {
        clearInterval(animateInitThree)
      }
      if (level === "four") {
        clearInterval(animateInitFour)
      }
      if (level === "five") {
        clearInterval(animateInitFive)
      }
      if (level === "six") {
        clearInterval(animateInitSix)
      }
      if (level === "seven") {
        clearInterval(animateInitSeven)
      }
      if (level === "eight") {
        clearInterval(animateInitEight)
      }
      if (level === "nine") {
        clearInterval(animateInitNine)
      }
      if (level === "ten") {
        clearInterval(animateInitTen)
      }
      if (level === "eleven") {
        clearInterval(animateInitEleven)
      }
      if (level === "twelve") {
        clearInterval(animateInitTwelve)
      }
      if (level === "thirteen") {
        clearInterval(animateInitThirteen)
      }
      if (level === "fourteen") {
        clearInterval(animateInitFourteen)
      }
      if (level === "fifteen") {
        clearInterval(animateInitFifteen)
      }
      ctx.fillStyle = "#FFA5E1"
      ctx.font = "bold 60px Arial, sans serif"
      ctx.fillText("You lose!", cW * 0.2, cH * 0.4, 400)
      ctx.fillStyle = "white"
      ctx.font = "bold 40px Arial, sans serif"
      ctx.fillText(`You scored ${tempScore} points`, cW * 0.2, cH * 0.5)
      ctx.fillStyle = "blue"
      ctx.font = "bold 30px Arial, sans serif"
      ctx.fillText("Press enter to continue", cW * 0.2, cH * 0.57, 400)

      document.addEventListener("keydown", event => {
        const key = event.keyCode
        if (key === 13) {
          this.props.logToStore(this.state.score)
          setTimeout(
            this.setState({
              endGame: true
            }),
            1000
          )
        }
      })
    }

    const win = level => {
      ctx.font = "bold 40px Arial, sans serif"
      ctx.fillStyle = "#A5E1FF"
      ctx.fillText(`Level ${level} complete!`, cW * 0.5 - 200, cH * 0.4, 400)
      ctx.fillStyle = "#A5FFE5"
      ctx.font = "bold 20px Arial, sans serif"
      ctx.fillText(
        "Be sure to charge up now by holding SPACE",
        cW * 0.5 - 200,
        cH * 0.55,
        400
      )
      ctx.font = "bold 15px Arial, sans serif"
      ctx.fillText(
        "Then press ENTER or C to continue (C releases charge at start of next level)",
        cW * 0.5 - 200,
        cH * 0.65,
        400
      )
      missiles.splice(0, missiles.length)
      finalRelease.splice(0, finalRelease.length)

      // level two initialisation --------------------------------------------------------------------------------------

      if (level === "one") {
        clearInterval(animateInit)
        speed += 0.1
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "one") ||
            (key === 67 && levelDeterminer === "one")
          ) {
            levelDeterminer = "two"
            pushEnemies(levelDeterminer)
            animateInitTwo = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Three initialisation ---------------------------------------------------------------------------------------

      if (level === "two") {
        clearInterval(animateInitTwo)
        speed += 0.1
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "two") ||
            (key === 67 && levelDeterminer === "two")
          ) {
            levelDeterminer = "three"
            pushEnemies(levelDeterminer)
            animateInitThree = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Four initialisation ----------------------------------------------------------------------------------------
      if (level === "three") {
        clearInterval(animateInitThree)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "three") ||
            (key === 67 && levelDeterminer === "three")
          ) {
            levelDeterminer = "four"
            pushEnemies(levelDeterminer)
            animateInitFour = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Five initialisation ----------------------------------------------------------------------------------------

      if (level === "four") {
        clearInterval(animateInitFour)
        speed += 0.08
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "four") ||
            (key === 67 && levelDeterminer === "four")
          ) {
            levelDeterminer = "five"
            pushEnemies(levelDeterminer)
            animateInitFive = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Six initialisation ----------------------------------------------------------------------------------------

      if (level === "five") {
        clearInterval(animateInitFive)
        speed += 0.05
        starColor = "rgba(207, 0, 15, 0.75)"
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "five") ||
            (key === 67 && levelDeterminer === "five")
          ) {
            levelDeterminer = "six"
            pushEnemies(levelDeterminer)
            animateInitSix = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Seven initialisation ---------------------------------------------------------------------------------------

      if (level === "six") {
        clearInterval(animateInitSix)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "six") ||
            (key === 67 && levelDeterminer === "six")
          ) {
            levelDeterminer = "seven"
            pushEnemies(levelDeterminer)
            animateInitSeven = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Eight initialisation ----------------------------------------------------------------------------------------

      if (level === "seven") {
        clearInterval(animateInitSeven)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "seven") ||
            (key === 67 && levelDeterminer === "seven")
          ) {
            levelDeterminer = "eight"
            pushEnemies(levelDeterminer)
            animateInitEight = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Nine initialisation -----------------------------------------------------------------------------------------

      if (level === "eight") {
        clearInterval(animateInitEight)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "eight") ||
            (key === 67 && levelDeterminer === "eight")
          ) {
            levelDeterminer = "nine"
            pushEnemies(levelDeterminer)
            animateInitNine = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Ten initialisation -----------------------------------------------------------------------------------------

      if (level === "nine") {
        clearInterval(animateInitNine)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "nine") ||
            (key === 67 && levelDeterminer === "nine")
          ) {
            levelDeterminer = "ten"
            pushEnemies(levelDeterminer)
            animateInitTen = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }

      // level Eleven initialisation -----------------------------------------------------------------------------------------
      if (level === "ten") {
        clearInterval(animateInitTen)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "ten") ||
            (key === 67 && levelDeterminer === "ten")
          ) {
            levelDeterminer = "eleven"
            pushEnemies(levelDeterminer)
            animateInitEleven = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }
      // level Twelve initialisation -----------------------------------------------------------------------------------------
      if (level === "eleven") {
        clearInterval(animateInitEleven)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "eleven") ||
            (key === 67 && levelDeterminer === "eleven")
          ) {
            levelDeterminer = "twelve"
            pushEnemies(levelDeterminer)
            animateInitTwelve = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }
      // level thirteen initialisation -----------------------------------------------------------------------------------------
      if (level === "twelve") {
        clearInterval(animateInitTwelve)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "twelve") ||
            (key === 67 && levelDeterminer === "twelve")
          ) {
            levelDeterminer = "thirteen"
            pushEnemies(levelDeterminer)
            animateInitThirteen = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }
      // level fourteen initialisation -----------------------------------------------------------------------------------------
      if (level === "thirteen") {
        clearInterval(animateInitThirteen)
        speed += 0.05
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "thirteen") ||
            (key === 67 && levelDeterminer === "thirteen")
          ) {
            levelDeterminer = "fourteen"
            pushEnemies(levelDeterminer)
            animateInitFourteen = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }
      // level fifteen initialisation -----------------------------------------------------------------------------------------
      if (level === "fourteen") {
        clearInterval(animateInitFourteen)
        speed -= 0.1
        document.addEventListener("keydown", function(event) {
          const key = event.keyCode
          if (
            (key === 13 && levelDeterminer === "fourteen") ||
            (key === 67 && levelDeterminer === "fourteen")
          ) {
            levelDeterminer = "fifteen"
            pushEnemies(levelDeterminer)
            animateInitFifteen = setInterval(
              () => animate(starColor, levelDeterminer),
              30
            )
            createEnemies(colors[Math.floor(Math.random() * colors.length)])
          }
        })
      }
      //-------------------------------Victory!
      if (level === "fifteen") {
        ctx.clearRect(0, 0, cW, cH)
        ctx.fillText(
          "You are victorious! Congratulations!",
          cW * 0.5 - 200,
          cH * 0.4,
          400
        )
        ctx.fillText(
          "Press enter to submit your score!",
          cW * 0.5 - 200,
          cH * 0.55,
          400
        )
        this.updateScore(tempScore)
        clearInterval(animateInitFifteen)
        levelDeterminer = "win"
        document.addEventListener("keydown", event => {
          const key = event.keyCode
          if (key === 13 && levelDeterminer === "win") {
            this.props.logToStore(this.state.score)
            setTimeout(
              this.setState({
                endGame: true
              }),
              2000
            )
          }
        })
      }
    }
  }

  render() {
    if (this.state.endGame === true) {
      return <Redirect exact to="/spaceblocks/input" />
    }
    return (
      <div className={styles.container}>
        <canvas
          className={styles.gameCanvas}
          id="game-canvas"
          ref={this.c}
          width="700"
          height="500"
          style={{ background: "black" }}
        />
        <div className={styles.gameStatusBar}>
          <div>
            <h3 id="score">Score: 0</h3>
            <h3 id="charge">Charge: 0</h3>
          </div>
          <Link to="/spaceblocks">
            <button>Quit</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logToStore: score => dispatch(logToStore(score))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SpaceInvaders)
