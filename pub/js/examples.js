"use strict";

const basketballData = {
    sport: 'basketball',
    team1: 'New York Knicks',
    team2: 'Toronto Raptors',
    team1color: 'blue',
    team2color: 'red',
    team1starters: {
        pg: {
            name: 'Kemba Walker',
            number: 8
        },
        sg: {
            name: 'Evan Fournier',
            number: 13
        },
        sf: {
            name: 'RJ Barrett',
            number: 9
        },
        pf: {
            name: 'Julius Randle',
            number: 30
        },
        c: {
            name: 'Mitchell Robinson',
            number: 23
        }
    },
    team2starters: {
        pg: {
            name: 'Fred VanVleet',
            number: 23
        },
        sg: {
            name: 'Gary Trent Jr.',
            number: 33
        },
        sf: {
            name: 'OG Anunoby',
            number: 3
        },
        pf: {
            name: 'Pascal Siakam',
            number: 43
        },
        c: {
            name: 'Precious Achiuwa',
            number: 5
        }
    },
    team1bench: [{name: 'Derrick Rose', number: 4}, {name: 'Immanuel Quickley', number: 5}, {name: 'Alec Burks', number: 18}, {name: 'Obi Toppin', number: 1}, {name: 'Taj Gibson', number: 67}, {name: 'Quentin Grimes', number: 6}, {name: 'Nerlens Noel', number: 3}, {name: 'Jericho Sims', number: 45}],
    team2bench: [{name: 'Scottie Barnes', number: 4}, {name: 'Goran Dragic', number: 1}, {name: 'Yuta Watanabe', number: 18}, {name: 'Chris Boucher', number: 25}, {name: 'Khem Birch', number: 24}, {name: 'Malachi Flynn', number: 22}],
    team1stats: {
        score: 104,
        fg: '35/76',
        fgPer: 46.1,
        threePtrs: '16/38',
        threePtrPer: 42.1,
        ft: '18/24',
        ftPer: 75,
        rebounds: 41,
        offReb: 7,
        assists: 20,
        block: 4,
        steal: 3, 
        turnover: 16,
        fouls: 13
    },
    team2stats: {
        score: 113,
        fg: '43/99',
        fgPer: 43.4,
        threePtrs: '14/42',
        threePtrPer: 33.3,
        ft: '13/14',
        ftPer: 92.9,
        rebounds: 48,
        offReb: 13,
        assists: 24,
        block: 4,
        steal: 12, 
        turnover: 8,
        fouls: 20
    },
    team1PlayerStats: [
        {name: 'RJ Barrett', MinP: 39, Reb: 6, Ast: 0, Pts: 27}, {name: 'Julius Randle', MinP: 37, Reb: 9, Ast: 5, Pts: 22}, {name: 'Mitchell Robinson', MinP: 28, Reb: 12, Ast: 3, Pts: 6},
    ],
    highlights: [
        {currScore: '104 - 101',
        play:  "Kemba double team, pass to RJ Barrett, RJ open three"}
    ]
}

const sportTracker = new sportTraker(basketballData)

function showLineup() {
    clearPage();
    sportTracker.makeCourt(0.5)
    sportTracker.displayPlayers();
}

function showStats() {
    clearPage();
    sportTracker.showStats();
}

function clearPage() {
    const court = document.getElementsByClassName('court')[0];
    if (court !== undefined) {
        document.body.removeChild(court);
    }
    const table = document.getElementsByClassName('statsTable')[0];
    if (table !== undefined) {
        document.body.removeChild(table);
    }
    
}

function showHighlight(num) {
    sportTracker.playAnimation(num);
}

