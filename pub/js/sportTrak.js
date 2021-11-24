"use strict";
const log = console.log

const animationList = [
    {
        sport: 'basketball',
        animations: ['double team', 'pass to', 'open three', 'dunk', 'fadeaway', 'step back three']
    }
]

function sportTraker(data) {
    this.sport = data.sport
    this.team1 = data.team1
    this.team2 = data.team2
    this.team1starters = data.team1starters
    this.team2starters = data.team2starters
    this.team1bench = data.team1bench
    this.team2bench = data.team2bench
    this.team1color = data.team1color
    this.team2color = data.team2color

    // Court and player circles generated
    this.court = ''
    this.team1players = []
    this.team2players = []

    this.team1stats = data.team1stats
    this.team2stats = data.team2stats

    this.table = '';
    this.team1PlayerStats = data.team1PlayerStats
    // this.team2PlayerStats = data.team2PlayerStats

    this.highlights = data.highlights
    this.scale = 0;
    
}

sportTraker.prototype = {

    // Creates the court for each game
    // Scales the court down to a size, otherwise it will take up whole page
    makeCourt: function(scale) {
        this.scale = scale;
        
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

            const key = document.createElement('div')
            key.className = 'key'

            freeThrow.appendChild(key)
            threePointer.appendChild(freeThrow)
            halfCourt.appendChild(threePointer)
            main.appendChild(halfCourt)
        }

        court.appendChild(main)
        court.style = 'transform: scale(' + scale + ');'
        document.body.appendChild(court)
        this.court = court;
    },

    displayPlayers: function() {
        const team1 = this.team1;
        const team2 = this.team2;

        const team1starters = this.team1starters;
        const team2starters = this.team2starters;

        const team1bench = this.team1bench;
        const team2bench = this.team2bench;

        const court = this.court;

        // Generates the player circles
        Object.keys(team1starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('player');
            player.classList.add(key);
            player.classList.add('team1');
            player.style = 'background-color: ' + this.team1color + ';'

            const number = document.createElement('span');
            number.innerHTML = team1starters[key].number;
            number.className = 'number';

            const name = document.createElement('span');
            name.innerHTML = team1starters[key].name;
            name.className = 'playerName';

            player.appendChild(name);
            player.appendChild(number);
            court.appendChild(player);

            this.team1players.push(player);
        })

        // Generates team 2 player circles
        Object.keys(team2starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('player');
            player.classList.add(key);
            player.classList.add('team2');
            player.style = 'background-color: ' + this.team2color + ';'

            const number = document.createElement('span');
            number.innerHTML = team2starters[key].number;
            number.className = 'number';

            const name = document.createElement('span');
            name.innerHTML = team2starters[key].name;
            name.className = 'playerName';

            player.appendChild(name);
            player.appendChild(number);
            court.appendChild(player);

            this.team2players.push(player)
        })

        // Creates the benches

        const benchTeam1 = document.createElement('div');
        const benchHeader1 = document.createElement('h2');
        benchHeader1.innerHTML = team1;
        
        benchTeam1.appendChild(benchHeader1);

        Object.keys(team1bench).forEach(key => {
            benchTeam1.innerHTML += team1bench[key].number + ', '  + team1bench[key].name + '<br />';
        })

        benchTeam1.classList.add('team1bench');
        benchTeam1.classList.add('bench');
        court.appendChild(benchTeam1);

        const benchTeam2 = document.createElement('div');
        const benchHeader2 = document.createElement('h2');
        benchHeader2.innerHTML = team2;
        
        benchTeam2.appendChild(benchHeader2);

        Object.keys(team2bench).forEach(key => {
            benchTeam2.innerHTML += team2bench[key].number + ', '  + team2bench[key].name + '<br />';
        })

        benchTeam2.classList.add('team2bench');
        benchTeam2.classList.add('bench');
        court.appendChild(benchTeam2);
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
    },

    showStats: function() {
        const table = document.createElement('table');
        const tableHeaders = document.createElement('tr');
        const team1 = document.createElement('th');
        const statText = document.createElement('th');
        const team2 = document.createElement('th');

        team1.innerHTML = this.team1;
        team2.innerHTML = this.team2;
        statText.innerHTML = 'TEAM STATS';
        table.className = 'statsTable';

        tableHeaders.appendChild(team1);
        tableHeaders.appendChild(statText);
        tableHeaders.appendChild(team2);
        table.appendChild(tableHeaders);

        Object.keys(this.team1stats).forEach(key => {
            const row = document.createElement('tr');
            const team1stat = document.createElement('td');
            const statText = document.createElement('td');
            const team2stat = document.createElement('td');

            console.log(key);

            switch (key) {
                case 'score':
                    statText.innerHTML = "Final Score";
                    break;
                case 'fg':
                    statText.innerHTML = "Field Goals";
                    break;
                case 'fgPer':
                    statText.innerHTML = "Field Goal Percentage";
                    break;
                case 'threePtrs':
                    statText.innerHTML = "Three Pointers";
                    break;
                case 'threePtrPer':
                    statText.innerHTML = "Three Pointer Percentage";
                    break;
                case 'ft':
                    statText.innerHTML = "Free Throws";
                    break;
                case 'ftPer': 
                    statText.innerHTML = "Free Throw Percentage";
                    break;
                case 'rebounds':
                    statText.innerHTML = "Total Rebounds";
                    break;
                case 'offReb':
                    statText.innerHTML = "Offensive Rebounds";
                    break
                case 'assists':
                    statText.innerHTML = "Assists"
                    break;
                case 'block':
                    statText.innerHTML = "Blocks";
                    break
                case 'steal':
                    statText.innerHTML = "Steals";
                    break
                case 'turnover': 
                    statText.innerHTML = "Turnovers";
                    break
                case 'fouls':
                    statText.innerHTML = "Fouls";
                    break
            }

            team1stat.innerHTML = this.team1stats[key];
            team2stat.innerHTML = this.team2stats[key];

            row.appendChild(team1stat);
            row.appendChild(statText);
            row.appendChild(team2stat);
            table.appendChild(row);

        })
        
        document.body.appendChild(table);
        this.table = table;
    },

    playAnimation: function(animationNum) {
        const court = this.court;
        log(this.team1players)
        const highlight = this.highlights[animationNum];

        let animations = [];
        animationList.forEach(sport => {
            if (sport.sport == this.sport) {
                animations = sport.animations;
            }
        });
        
        const currScore = highlight.currScore;
        
        const players = []
        const playerAnimations = []
        const animationSteps = highlight.play.split(",");
        animationSteps.forEach(play => {
            animations.forEach(animation => {
                if (play.includes(animation)) {
                    playerAnimations.push(animation);
                    players.push(play.replace(animation, ""));
                }
            });
        });

        // Checks which team is attacking
        let attackingTeam = '';
        let attackingTeamNum = 0;
        let defendingTeam = '';
        Object.keys(this.team1starters).forEach(player => {
            if (this.team1starters[player].name.includes(players[0])) {
                attackingTeam = this.team1players;
                attackingTeamNum = 1;
                defendingTeam = this.team2players;
            }
        });
        if (attackingTeam === '') {
            attackingTeam = this.team2players;
            attackingTeamNum = 2;
            defendingTeam = this.team1players;
        }

        // Moves attacking team up
        for (let i = 0; i < attackingTeam.length; i++) {
            const player = attackingTeam[i]
            player.classList.add('attacking' + attackingTeamNum + Object.keys(this.team1starters)[i]);
        }

        const playersInPlay = []
        // Links players in play to the player object
        for (let i = 0; i < players.length; i++) {
            const player = players[i].trim()
            for (let j = 0; j < Object.keys(this.team1starters).length; j++) {
                const team1player = this.team1starters[Object.keys(this.team1starters)[j]].name;
                if (team1player.includes(player)) {
                    playersInPlay.push({
                        player: this.team1players[j],
                        defender: j})
                }
            }
        }

        // Creates basketball
        const basketball = createBasketball()
        playersInPlay[0].player.appendChild(basketball)

        // Animates the play
        let previousAnimation = '';
        let previousPlayer = playersInPlay[0].player;
        let playerWithBall = playersInPlay[0].player;
        for (let i = 0; i < playerAnimations.length; i++) {
            setTimeout(function() {
                let playerInAnimation = playersInPlay[i].player;
                let defendingPlayer = defendingTeam[playersInPlay[i].defender];
                
                // Do previous animation first
                if (previousAnimation !== '') {
                    switch (previousAnimation) {
                        case 'double team':
                            defendingPlayer.style.transform = "translate(" + (-previousPlayer.offsetLeft + 130)  + "px, " + (-previousPlayer.offsetTop + 140) + "px)";
                            break;
                    }
                }

                switch (playerAnimations[i]) {
                    case 'double team':
                        previousAnimation = 'double team';
                        previousPlayer = playersInPlay[i].player;
                        playerWithBall = playersInPlay[i].player;
                        break;
                    case 'pass to':
                        playerWithBall = playersInPlay[i].player;
                        const rect = playerWithBall.getBoundingClientRect();
                        // court.appendChild(newBasketball)
                        // log(rect.left)
                        // newBasketball.style = "left: " + -rect.left + "px; top: " + -rect.top + "px;";
                        previousPlayer.removeChild(basketball);
                        playerWithBall.appendChild(basketball)
                        break;
                    case 'open three':
                        playerWithBall = '';
                        basketball.classList.add('shot');
                        break;
                }
            }, 1000)

            
        }

        

        'double team', 'pass to', 'open three', 'dunk', 'fadeaway', 'step back three'

    }
}

function createBasketball() {
    const basketball = document.createElement('div');
    basketball.className = 'basketball'

    const ball = document.createElement('div');
    ball.className = 'ball'

    const lines = document.createElement('div')
    lines.className = 'lines'

    ball.appendChild(lines)
    basketball.appendChild(ball);

    return basketball;
}