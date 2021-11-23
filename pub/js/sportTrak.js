"use strict";
const log = console.log


function sportTraker(data) {
    this.sport = data.sport
    this.team1 = data.team1
    this.team2 = data.team2
    this.team1starters = data.team1starters
    this.team2starters = data.team2starters
    this.team1bench = data.team1bench
    this.team2bench = data.team2bench

    // this.stats = data.stats

    // this.highlights = data.highlights
    
}

sportTraker.prototype = {

    // Creates the court for each game
    makeCourt: function() {
        const court = document.createElement('section')
        court.className = 'court'

        const main = document.createElement('main')

        for (let i = 0; i < 2; i++) {
            const halfCourt = document.createElement('div')
            halfCourt.className = 'half-court'

            const threePointer = document.createElement('div')
            threePointer.className = 'three-pointer'

            const freeThrow = document.createElement('div')
            freeThrow.className = 'free-throw'

            const key = document.createElement('key')
            key.className = 'key'

            freeThrow.appendChild(key)
            threePointer.appendChild(freeThrow)
            halfCourt.appendChild(threePointer)
            main.appendChild(halfCourt)
        }

        court.appendChild(main)
        document.body.appendChild(court)

    },

    logData: function() {
        log(this.sport)
        log(this.team1)
        log(this.team1bench)
        log(this.team1starters)
        log(this.team2)
        log(this.team2bench)
        log(this.team2starters)
        // log(this.stats)
    }
}