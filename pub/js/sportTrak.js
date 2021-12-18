"use strict";
const log = console.log

const animationList = [
    {
        sport: 'basketball',
        animations: ['double team', 'pass to', 'open three', 'dunk', 'fadeaway', 'step back three']
    },
    {
        sport: 'soccer',
        animations: ['scores penalty', 'saves penalty', 'cross to', 'corner', 'scores', 'yellow card', 'red card', 'tackles', 'through pass to', 'pass to', 'dribble', 'sub']
    }
];

(function(global, document) {
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

        // If sport is soccer
        if (data.sport === 'soccer') {
            this.team1formation = data.team1formation
            this.team2formation = data.team2formation
        }
    
        // Court and player circles generated
        this.court = ''
        this.team1players = []
        this.team2players = []
    
        this.team1stats = data.team1stats
        this.team2stats = data.team2stats
    
        this.table = '';
        this.team1PlayerStats = data.team1PlayerStats
        this.team2PlayerStats = data.team2PlayerStats
    
        this.highlights = data.highlights
        this.scale = 1;
        
    }

    function _logData() {
        log(this.sport)
        log(this.team1)
        log(this.team1bench)
        log(this.team1starters)
        log(this.team2)
        log(this.team2bench)
        log(this.team2starters)
        // log(this.stats)
    }

    function _createBasketball() {
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

    function _createBasketballCourt() {
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

            return court
    }

    function _displayBasketballPlayers(team1, team2, court, team1color, team2color, t1PlayerStats, t2PlayerStats) {
        const team1starters = team1;
        const team2starters = team2;

        let team1players = []
        let team2players = []

        //Generates the player circles
        Object.keys(team1starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('bballPlayer');
            player.classList.add(key);
            player.classList.add('team1');
            player.style = 'background-color: ' + team1color + ';'

            const number = document.createElement('span');
            number.innerHTML = team1starters[key].number;
            number.className = 'bballNumber';

            const name = document.createElement('span');
            name.innerHTML = team1starters[key].name;
            name.className = 'bballPlayerName';

            player.appendChild(name);
            player.appendChild(number);
            player.onclick = () => {
                _displayPlayerStats(t1PlayerStats, team1starters[key].name)
            }
            court.appendChild(player);

            team1players.push(player);
        })

        // Generates team 2 player circles
        Object.keys(team2starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('bballPlayer');
            player.classList.add(key);
            player.classList.add('team2');
            player.style = 'background-color: ' + team2color + ';'

            const number = document.createElement('span');
            number.innerHTML = team2starters[key].number;
            number.className = 'bballNumber';

            const name = document.createElement('span');
            name.innerHTML = team2starters[key].name;
            name.className = 'bballPlayerName';

            player.appendChild(name);
            player.appendChild(number);
            player.onclick = () => {
                _displayPlayerStats(t2PlayerStats, team2starters[key].name)
            }
            court.appendChild(player);

            team2players.push(player)
        })

        return [team1players, team2players];
    }

    function _basketballAnimation(court, players, defendingTeam, attackingTeam, playerAnimations, team1starters) {
        // Moves attacking team up
        for (let i = 0; i < attackingTeam.length; i++) {
            const player = attackingTeam[i]
            player.classList.add('attacking' + attackingTeamNum + Object.keys(team1starters)[i]);
        }

        const playersInPlay = []
        // Links players in play to the player object
        for (let i = 0; i < players.length; i++) {
            const player = players[i].trim()
            for (let j = 0; j < Object.keys(team1starters).length; j++) {
                const team1player = team1starters[Object.keys(team1starters)[j]].name;
                if (team1player.includes(player)) {
                    playersInPlay.push({
                        player: this.team1players[j],
                        defender: j})
                }
            }
        }

        // Creates basketball
        const basketball = _createBasketball()
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
    }

    function _createSoccerField() {
        const pitch = document.createElement('section')
        pitch.className = 'pitch'

        const leftField = document.createElement('div')
        leftField.classList.add('left')
        leftField.classList.add('field')

        const leftPenalty = document.createElement('div')
        leftPenalty.className = 'penaltyArea'

        leftField.appendChild(leftPenalty)

        const rightField = document.createElement('div')
        rightField.classList.add('right')
        rightField.classList.add('field')

        const rightPenalty = document.createElement('div')
        rightPenalty.className = 'penaltyArea'

        rightField.appendChild(rightPenalty)

        const center = document.createElement('center')
        center.className = 'center'

        pitch.appendChild(leftField)
        pitch.appendChild(rightField)
        pitch.appendChild(center)

        return pitch
    }

    function _displaySoccerPlayers(team1, team2, court, team1formation, team2formation, team1color, team2color, t1PlayerStats, t2PlayerStats) {
        const team1starters = team1;
        const team2starters = team2;

        const t1formation = 'f' + team1formation;
        const t2formation = 'f' + team2formation;

        let team1players = []
        let team2players = []

        let homeTeam = document.createElement('div');
        Object.keys(team1starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('soccPlayer');
            player.classList.add('team1');
            player.classList.add(t1formation);
            player.style = 'background-color: ' + team1color + ';'

            const number = document.createElement('span');
            number.innerHTML = team1starters[key].number;
            number.className = 'soccNumber';

            const name = document.createElement('span');
            name.innerHTML = team1starters[key].name;
            name.className = 'soccPlayerName';

            player.appendChild(name);
            player.appendChild(number);
            player.onclick = () => {
                _displayPlayerStats(t1PlayerStats, team1starters[key].name);
            }
            homeTeam.appendChild(player);
            court.appendChild(homeTeam)
            team1players.push(player);
        })

        // Generates team 2 player circles
        let awayTeam = document.createElement('div')
        awayTeam.className = 'awayTeam';
        Object.keys(team2starters).forEach(key => {
            const player = document.createElement('span');
            player.classList.add('soccPlayer');
            player.classList.add('team2');
            player.classList.add(t2formation);
            player.style = 'background-color: ' + team2color + ';'

            const number = document.createElement('span');
            number.innerHTML = team2starters[key].number;
            number.className = 'soccNumber';

            const name = document.createElement('span');
            name.innerHTML = team2starters[key].name;
            name.className = 'soccPlayerName';

            player.appendChild(name);
            player.appendChild(number);
            player.onclick = () => {
                _displayPlayerStats(t2PlayerStats, team2starters[key].name)
            }
            awayTeam.appendChild(player);
            court.appendChild(awayTeam)
            team2players.push(player)
        })

        return [team1players, team2players]
    }

    function _displayPlayerStats(teamStats, playerName) {
        // Checks if player stats is already displayed to just change the text inside
        let alreadyExists = document.getElementsByClassName('playerStatWrapper');
        let wrapper = '';
        let playerStats = '';
        let playerStatHeader = '';
        let pStats = '';
        if (alreadyExists.length === 0) {
            wrapper = document.createElement('div');
            wrapper.className = 'playerStatWrapper';

            playerStats = document.createElement('div');
            playerStats.className = 'playerStats';

            playerStatHeader = document.createElement('h2');
            playerStatHeader.className = 'playerStatHeader';

            pStats = document.createElement('span');
            pStats.className = 'pStats';

            playerStats.appendChild(playerStatHeader);
            playerStats.appendChild(pStats);
            wrapper.appendChild(playerStats);
            document.body.appendChild(wrapper)
        }
        
        else {
            wrapper = alreadyExists[0];
            playerStats = document.getElementsByClassName('playerStats')[0];
            playerStatHeader = document.getElementsByClassName('playerStatHeader')[0];
            pStats = document.getElementsByClassName('pStats')[0];
            pStats.innerHTML = '';
        }
        
        playerStatHeader.innerHTML = playerName;

        // Gets the specific player's stats
        let stats = ''
        teamStats.forEach(player => {
            if (player.name === playerName) {
                stats = player;
            }
        });

        // Displays the stats
        Object.keys(stats).forEach(key => {
            let str = '';

            switch(key) {
                case 'challengesWon':
                    str = 'Challenges Won: ' + stats[key];
                    break;
                case 'goals':
                    str = 'Goals: ' + stats[key];
                    break;
                case 'shots':
                    str = 'Shots: ' + stats[key];
                    break;
                case 'assists':
                    str = 'Assists: ' + stats[key];
                    break;
                case 'fouls':
                    str = 'Fouls: ' + stats[key];
                    break;
                case 'yellowCard':
                    str = 'Yellow Cards: ' + stats[key];
                    break;
                case 'redCard':
                    str = 'Red Cards: ' + stats[key];
                    break;
                case 'saves':
                    str = 'Saves: ' + stats[key];
                    break;
                case 'MinP':
                    str = 'Minutes Played: ' + stats[key];
                    break;
                case 'Reb':
                    str = 'Rebounds: ' + stats[key];
                    break;
                case 'Ast':
                    str = 'Assists: ' + stats[key];
                    break;
                case 'Pts':
                    str = 'Points: ' + stats[key];
                    break;
            }

            pStats.innerHTML += str + '<br />';
        })
    }

    function _createSoccerBall(court, player, attackingTeamNum) {
            const soccerBall = document.createElement('img');
            soccerBall.src = './ball_img/soccer.png';
            soccerBall.className = 'soccerBall'
            soccerBall.style.left = (player.offsetLeft + 5) + 'px';
            soccerBall.style.top = (player.offsetTop + 5) + 'px';

            if (attackingTeamNum === 2) {
                court.childNodes[4].appendChild(soccerBall)
            }
            else {
                court.childNodes[3].appendChild(soccerBall)
            }

            return soccerBall
    }

    function _soccerAnimation(court, players, playerAnimations, attackingTeam, defendingTeam, attackingTeamNum) {
        const playersInPlay = []
        // Links players in play to the player object
        for (let i = 0; i < players.length; i++) {
            const player = players[i].trim()
            for (let j = 0; j < attackingTeam.length; j++) {
                const attackingPlayer = attackingTeam[j].childNodes[0].innerHTML;
                if (attackingPlayer.includes(player)) {
                    playersInPlay.push(attackingTeam[j])
                }
            }
        }

        let p = 0;
        let ball = ''
        for (let i = 0; i < playerAnimations.length; i++) {
            switch (playerAnimations[i]) {
                case 'scores penalty':
                    ball = _animateSoccer(court, playerAnimations[i], playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum)

                    p++;
                    break;
                case 'saves penalty':
                    ball = _animateSoccer(court, playerAnimations[i], playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum)

                    p++;
                    break;
                case 'cross to':
                    ball = _animateSoccer(court, playerAnimations[i], playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum)

                    p+= 2;
                    break;
                case 'corner':
                    ball = _animateSoccer(court, playerAnimations[i], playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum)

                    p++;
                    break;
                case 'scores':
                    ball = _animateSoccer(court, playerAnimations[i], playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum)
                    
                    p++;
                    break;
            }
        }
    }

    function _animateSoccer(court, playerAnimation, playersInPlay, p, attackingTeam, defendingTeam, attackingTeamNum, i) {
        let player = '';
        let player2 = '';
        let ball = '';
        setTimeout(function() {
            switch (playerAnimation) {
                case 'scores penalty':
                    player = playersInPlay[p];
                    player.classList.add('penaltyTaker')

                    // Moves defending players out of box
                    defendingTeam[1].classList.add('penalty');
                    defendingTeam[2].classList.add('penalty');

                    ball = _createSoccerBall(court, player, attackingTeamNum);
                    setTimeout(function() {
                        ball.style.left = ball.offsetLeft + 55  + "px";
                        ball.style.top = ball.offsetTop + 20 + "px";  
                        ball.style.visibility = 'hidden'
                    }, 500)

                    break;
                case 'saves penalty':
                    player = defendingTeam[10];
                    player.classList.add('penaltyTaker')

                    // Moves defending players out of box
                    attackingTeam[1].classList.add('penalty');
                    attackingTeam[2].classList.add('penalty');

                    const goalie = playersInPlay[p];

                    ball = _createSoccerBall(court, player, attackingTeamNum);
                    setTimeout(function() {
                        ball.style.left = ball.offsetLeft + 55  + "px";
                        ball.style.top = ball.offsetTop + 20 + "px";  
                        goalie.style.top = goalie.offsetTop + 20 + "px";
                    }, 500)

                    break;
                case 'cross to':
                    player = playersInPlay[p];
                    player2 = playersInPlay[p + 1];
                    player.classList.add('crossStart');

                    if (playerAnimations[i + 1] === 'scores') {
                        player2.classList.add('inBox');
                        defendingTeam[2].style.top = defendingTeam[2].offsetTop + 10 + "px";
                    }
                    else {
                        player2.classList.add('crossRecieve')
                    }

                    ball = _createSoccerBall(court, player, attackingTeamNum);
                        setTimeout(function() {
                            ball.style.left = player2.offsetLeft + 5  + "px";
                            ball.style.top = player2.offsetTop + 5 + "px";  
                        }, 500)

                    break;
                case 'corner':
                    player = playersInPlay[p];
                    player.classList.add('corner');
                    player2 = playersInPlay[p + 1];
                    player2.classList.add('inBox');
                    defendingTeam[2].style.top = defendingTeam[2].offsetTop + 10 + "px";

                    ball = _createSoccerBall(court, player, attackingTeamNum);
                        setTimeout(function() {
                            ball.style.left = player2.offsetLeft + 5  + "px";
                            ball.style.top = player2.offsetTop + 5 + "px";  
                        }, 500)

                    break;
                case 'scores':
                    player = playersInPlay[p];
                    ball = _createSoccerBall(court, player, attackingTeamNum);
                    setTimeout(function() {
                        ball.style.left = '560px';
                        ball.style.top = ball.offsetTop - 20 + "px";
                    }, 500)
                    
                    break;
            }

            log(document.getElementsByClassName('soccerBall'))
            // // Removes old ball
            // if (document.getElementsByClassName('soccerBall').length !== 0) {
            //     if (attackingTeamNum === 2) {
            //         court.childNodes[4].removeChild(document.getElementsByClassName('soccerBall')[0])
            //     }
            //     else {
            //         court.childNodes[3].removeChild(document.getElementsByClassName('soccerBall')[0])
            //     }
            // }
        }, 1500)
    }

    // function _soccerAnimation()

    sportTraker.prototype = {

        // Creates the court for each game
        // Scales the court down to a size, otherwise it will take up whole page
        makeCourt: function(scale) {
            this.scale = scale;

            let court = ''
            
            switch(this.sport) {
                case 'basketball':
                    court = _createBasketballCourt()
                    break;
                case 'soccer':
                    court = _createSoccerField()
                    break;
            }

            court.style = 'transform: scale(' + scale + ');'
            const wrapper = document.createElement('div');
            wrapper.appendChild(court)
            wrapper.className = 'courtWrapper'
            document.body.appendChild(wrapper)
            this.court = court;
        },
    
        displayPlayers: function() {
            const team1 = this.team1;
            const team2 = this.team2;
    
            const team1bench = this.team1bench;
            const team2bench = this.team2bench;
    
            const court = this.court;
            
            // Generates player circles
            let players = []
            switch(this.sport){
                case 'basketball':
                    players = _displayBasketballPlayers(this.team1starters, this.team2starters, court, this.team1color, this.team2color, this.team1PlayerStats, this.team2PlayerStats)
                    break;
                case 'soccer':
                    players = _displaySoccerPlayers(this.team1starters, this.team2starters, court, this.team1formation, this.team2formation, this.team1color, this.team2color, this.team1PlayerStats, this.team2PlayerStats)
                    break;
            }

            this.team1players = players[0]
            this.team2players = players[1]
    
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
            document.body.appendChild(benchTeam1)
    
            const benchTeam2 = document.createElement('div');
            const benchHeader2 = document.createElement('h2');
            benchHeader2.innerHTML = team2;
            
            benchTeam2.appendChild(benchHeader2);
    
            Object.keys(team2bench).forEach(key => {
                benchTeam2.innerHTML += team2bench[key].number + ', '  + team2bench[key].name + '<br />';
            })
    
            benchTeam2.classList.add('team2bench');
            benchTeam2.classList.add('bench');
            document.body.appendChild(benchTeam2);
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
                    case 'shots':
                        statText.innerHTML = "Shots";
                        break;
                    case 'shotsOnTarget':
                        statText.innerHTML = "Shots on Target";
                        break;
                    case 'posession':
                        statText.innerHTML = "Posession";
                        break;
                    case 'passes':
                        statText.innerHTML = "Passes";
                        break;
                    case 'passAcc':
                        statText.innerHTML = "Pass Accuracy";
                        break;
                    case 'yellow':
                        statText.innerHTML = "Yellow Cards";
                        break;
                    case 'red':
                        statText.innerHTML = "Red Cards";
                        break;
                    case 'offsides':
                        statText.innerHTML = "Offsides";
                        break;
                    case 'corners':
                        statText.innerHTML = "Corners";
                        break;
                }
    
                team1stat.innerHTML = this.team1stats[key];
                team2stat.innerHTML = this.team2stats[key];
    
                row.appendChild(team1stat);
                row.appendChild(statText);
                row.appendChild(team2stat);
                table.appendChild(row);
    
            })
            
            const tableWrapper = document.createElement('div')
            tableWrapper.className = 'statTableWrapper';
            tableWrapper.appendChild(table)
            document.body.appendChild(tableWrapper);
            this.table = table;
        },
    
        playAnimation: function(animationNum) {
            const court = this.court;
            const highlight = this.highlights[animationNum];
    
            let animations = [];
            animationList.forEach(sport => {
                if (sport.sport == this.sport) {
                    animations = sport.animations;
                }
            });
            
            const currScore = highlight.currScore;
            
            // Gets the animations and the players in each highlight
            const players = []
            const playerAnimations = []
            const animationSteps = highlight.play.split(",");
            animationSteps.forEach(play => {
                let skip = false
                animations.forEach(animation => {
                    if (skip) {
                        return
                    }

                    if (play.includes(animation)) {
                        playerAnimations.push(animation);
                        let playOnlyPlayers = play.replace(animation, "");
                        let playSplit = playOnlyPlayers.split(" ");
                        playSplit.forEach(player => {
                            if (player !== '') {
                                players.push(player)
                            }
                        });
                        skip = true
                        return
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

            //Animates players
            switch (this.sport) {
                case 'soccer':
                    _soccerAnimation(court, players, playerAnimations, attackingTeam, defendingTeam, attackingTeamNum)
                    break;
                case 'basketball':
                    _basketballAnimation()
                    break;
            }

        }
    }

    global.sportTraker = global.sportTraker || sportTraker
})(window, window.document);