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
        {name: 'RJ Barrett', MinP: 39, Reb: 6, Ast: 0, Pts: 27}, 
        {name: 'Julius Randle', MinP: 37, Reb: 9, Ast: 5, Pts: 22}, 
        {name: 'Mitchell Robinson', MinP: 28, Reb: 12, Ast: 3, Pts: 6},
        {name: 'Kemba Walker', MinP: 28, Reb: 3, Ast: 3, Pts: 15},
        {name: 'Evan Fournier', MinP: 25, Reb: 3, Ast: 2, Pts: 12},
        {name: 'Derrick Rose', MinP: 20, Reb: 1, Ast: 1, Pts: 4},
        {name: 'Immanuel Quickley', MinP: 19, Reb: 2, Ast: 5, Pts: 7},
        {name: 'Mitchell Robinson', MinP: 16, Reb: 1, Ast: 0, Pts: 5},
        {name: 'Obi Toppin', MinP: 13, Reb: 3, Ast: 0, Pts: 6},
        {name: 'Taj Gibson', MinP: 10, Reb: 0, Ast: 1, Pts: 0},
        {name: 'Jericho Sims', MinP: 5, Reb: 1, Ast: 0, Pts: 0}
    ],
    team2PlayerStats: [
        {name: 'OG Anunoby', MinP: 41, Reb: 6, Ast: 2, Pts: 36}, 
        {name: 'Pascal Siakam', MinP: 35, Reb: 5, Ast: 5, Pts: 15}, 
        {name: 'Precious Achiuwa', MinP: 17, Reb: 9, Ast: 1, Pts: 2},
        {name: 'Gary Trent Jr.', MinP: 43, Reb: 2, Ast: 2, Pts: 26},
        {name: 'Fred VanVleet', MinP: 37, Reb: 9, Ast: 8, Pts: 17},
        {name: 'Khem Birch', MinP: 31, Reb: 8, Ast: 3, Pts: 6},
        {name: 'Malachi Flynn', MinP: 11, Reb: 0, Ast: 2, Pts: 3}
    ],
    highlights: [
        {currScore: '104 - 101',
        play:  "Kemba double team, pass to RJ Barrett, RJ open three"}
    ]
}

const soccerData = {
    sport: 'soccer',
    team1: 'FC Bayern Munich',
    team2: 'Borussia Dortmund',
    team1color: 'red',
    team2color: 'yellow',
    team1starters: {
        gk: {
            name: 'Manuel Neuer',
            number: 1
        },
        cb1: {
            name: 'Dayot Upamecano',
            number: 2
        },
        cb2: {
            name: 'Niklas Sule',
            number: 4
        },
        rb: {
            name: 'Benjamin Pavard',
            number: 5
        },
        lb: {
            name: 'Alphonso Davies',
            number: 19
        },
        cdm1: {
            name: 'Joshua Kimmich',
            number: 6
        },
        cdm2: {
            name: 'Leon Goretzka',
            number: 8
        },
        rm: {
            name: 'Serge Gnabry',
            number: 7
        },
        lm: {
            name: 'Leroy Sane',
            number: 10
        },
        cam: {
            name: 'Thomas Muller',
            number: 25
        },
        st: {
            name: 'Robert Lewandowski',
            number: 9
        }
    },
    team2starters: {
        gk: {
            name: 'Gregor Kobel',
            number: 1
        },
        cb1: {
            name: 'Manuel Akanji',
            number: 16
        },
        cb2: {
            name: 'Mats Hummels',
            number: 15
        },
        rb: {
            name: 'Thomas Meunier',
            number: 24
        },
        lb: {
            name: 'Raphael Guerreiro',
            number: 13
        },
        cdm: {
            name: 'Emre Can',
            number: 23
        },
        cam: {
            name: 'Mahmoud Dahoud',
            number: 8
        },
        rm: {
            name: 'Jude Bellingham',
            number: 22
        },
        lm: {
            name: 'Julian Brandt',
            number: 19
        },
        st1: {
            name: 'Erling Haaland',
            number: 9
        },
        st2: {
            name: 'Marco Reus',
            number: 11
        }
    },
    team1formation: '4-2-3-1',
    team2formation: '4-1-3-2',
    team1bench: [{name: 'Sven Ulreich', number: 26}, {name: 'Lucas Hernandez', number: 21}, {name: 'Bouna Sarr', number: 20}, {name: 'Jamal Musiala', number: 42}, {name: 'Corentin Tolisso', number: 24}, {name: 'Marcel Sabitzer', number: 18}, {name: 'Kingsley Coman', number: 11}],
    team2bench: [{name: 'Roman Burki', number: 38}, {name: 'Dan-Axel Zagadou', number: 5}, {name: 'Giovanni Reyna', number: 7}, {name: 'Thorgan Hazard', number: 10}, {name: 'Axel Witsel', number: 28}, {name: 'Nico Schulz', number: 14}, {name: 'Donyell Malen', number: 21}],
    team1stats: {
        score: 3,
        shots: 17,
        shotsOnTarget: 6,
        posession: '53%',
        passes: 506,
        passAcc: '80%',
        fouls: 10,
        yellow: 2,
        red: 0,
        offsides: 1,
        corners: 6
    },
    team2stats: {
        score: 2,
        shots: 12,
        shotsOnTarget: 4,
        posession: '47%',
        passes: 450,
        passAcc: '77%',
        fouls: 10,
        yellow: 2,
        red: 0,
        offsides: 3,
        corners: 4
    },
    team1PlayerStats: [
        {name: 'Leon Goretzka', shots: 1, challengesWon: 4, fouls: 2},
        {name: 'Robert Lewandowski', goals: 2, shots: 2, challengesWon: 8, fouls: 1, yellowCard: 1}, 
        {name: 'Thomas Muller', shots: 1, assists: 1, challengesWon: 2}, 
        {name: 'Kingsley Coman', goals: 1, shots: 3, challengesWon: 1},
        {name: 'Dayot Upamecano', shots: 1, challengesWon: 6, fouls: 2, yellowCard: 1},
        {name: 'Benjamin Pavard', shots: 2, challengesWon: 5},
        {name: 'Leroy Sane', shots: 1, challengesWon: 2}, 
        {name: 'Corentin Tolisso', shots: 1, challengesWon: 5}, 
        {name: 'Manuel Neuer', saves: 10}, 
        {name: 'Alphonso Davies', shots: 1, challengesWon: 5}, 
        {name: 'Niklas Sule', challengesWon: 4, fouls: 2}, 
        {name: 'Serge Gnabry', shots: 2}, 
        {name: 'Jamal Musiala', shots: 1, challengesWon: 1},
        {name: 'Joshua Kimmich', challengesWon: 7}  
    ],
    team2PlayerStats: [
        {name: 'Manuel Akanji', challengesWon: 4, fouls: 1},
        {name: 'Jude Bellingham', shots: 2, assists: 2, challengesWon: 10, fouls: 2, yellowCard: 1}, 
        {name: 'Erling Haaland', goals: 1, shots: 1, challengesWon: 2, fouls: 2}, 
        {name: 'Julian Brandt', goals: 1, shots: 1, challengesWon: 2},
        {name: 'Emre Can', shots: 1, challengesWon: 6, fouls: 2, yellowCard: 1},
        {name: 'Raphael Guerreiro', shots: 2, challengesWon: 5},
        {name: 'Mats Hummels', shots: 1, challengesWon: 6, fouls: 1}, 
        {name: 'Thomas Meunier', shots: 1, challengesWon: 5}, 
        {name: 'Gregor Kobel', saves: 3}, 
        {name: 'Marco Reus', shots: 1, challengesWon: 5}, 
        {name: 'Mahmoud Dahoud', challengesWon: 4, fouls: 2}, 
        {name: 'Nico Schulz', challengesWon: 2}, 
        {name: 'Donyell Malen', shots: 2, challengesWon: 1}
    ],
    highlights: [
        {
            currScore: '2 - 2',
            time: '78',
            play: "Lewandowski scores penalty"
        },
        {
            currScore: '1 - 0',
            time: '45',
            play: "Bellingham corner, Haaland scores"
        },
        {
            currScore: '1 - 1',
            time: '55',
            play: "Gnabry cross to Lewandowski, Lewandowski scores"
        },
    ]
}

const soccerSportTracker = new sportTraker(soccerData);
// const basketballSportTracker = new sportTracker(basketballData)

function showStats() {
    clearPage();
    sportTracker.showStats();
}

function clearPage() {
    const court = document.getElementsByClassName('courtWrapper')[0];
    if (court !== undefined) {
        document.body.removeChild(court);
    }
    const benches = document.getElementsByClassName('bench');
    // log(benches)
    while (benches.length !== 0) {
        document.body.removeChild(benches[0])
    }
    const table = document.getElementsByClassName('statTableWrapper')[0];
    if (table !== undefined) {
        document.body.removeChild(table);
    }
    
}

const example1 = document.getElementById('example1');
const example2 = document.getElementById('example2');
const example3 = document.getElementById('example3');

function showHighlight(num) {
    let court = document.getElementsByClassName('courtWrapper')[1];
    let b1 = document.getElementsByClassName('team1bench')[1];
    let b2 = document.getElementsByClassName('team2bench')[1];
    example3.removeChild(court)
    example3.removeChild(b1)
    example3.removeChild(b2)

    let field2 = soccerSportTracker.makeCourt(1.5)
    let benches = soccerSportTracker.displayPlayers();
    let bench12 = benches[0]
    let bench22 = benches[1]

    example3.appendChild(field2);
    example3.appendChild(bench12);
    example3.appendChild(bench22);

    soccerSportTracker.playAnimation(num);
}   



function showExamples() {
    clearPage();
    let field1 = soccerSportTracker.makeCourt(1.5)
    let benches = soccerSportTracker.displayPlayers();
    let bench1 = benches[0]
    let bench2 = benches[1]

    example1.appendChild(field1);
    example1.appendChild(bench1);
    example1.appendChild(bench2);

    let statTable = soccerSportTracker.showStats();
    example2.appendChild(statTable);

    let field2 = soccerSportTracker.makeCourt(1.5)
    benches = soccerSportTracker.displayPlayers();
    let bench12 = benches[0]
    let bench22 = benches[1]

    example3.appendChild(field2);
    example3.appendChild(bench12);
    example3.appendChild(bench22);


}

function openTab(evt, tab, exampleNum) {
    let tabContent = document.getElementsByClassName(tab)[exampleNum - 1];
    let allTabs = document.getElementsByClassName('tabcontent')

    for (let i = 0; i < allTabs.length; i++) {
        allTabs[i].style.display = "none";
    }
    
    let tablinks = document.getElementsByClassName("tablink");
    let hide = true;
    
    if (evt.currentTarget.className.includes("active") === false) {
        hide = false;
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if (hide === false) {
        tabContent.style.display = "block";
        evt.currentTarget.className += " active";
    }

    

}



showExamples();

