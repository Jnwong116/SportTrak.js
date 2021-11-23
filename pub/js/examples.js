"use strict";

const basketballData = {
    sport: 'basketball',
    team1: 'Toronto Raptors',
    team2: 'New York Knicks',
    team1starters: {
        pg: 'Kemba Walker',
        sg: 'Evan Fournier',
        sf: 'RJ Barrett',
        pf: 'Julius Randle',
        c: 'Mitchell Robinson'
    },
    team2starters: {
        pg: 'Fred VanVleet',
        sg: 'Gary Trent Jr.',
        sf: 'OG Anunoby',
        pf: 'Pascal Siakam',
        c: 'Precious Achiuwa'
    },
    team1bench: ['Derrick Rose', 'Immanuel Quickley', 'Alec Burks', 'Obi Toppin', 'Taj Gibson', 'Nerlens Noel', 'Quentin Grimes', 'Jericho Sims'],
    team2bench: ['Scottie Barnes', 'Goran Dragic', 'Yuta Watanabe', 'Chris Boucher', 'Khem Birch', 'Malachi Flynn']
}

const sportTracker = new sportTraker(basketballData)
sportTracker.makeCourt()
sportTracker.logData()
