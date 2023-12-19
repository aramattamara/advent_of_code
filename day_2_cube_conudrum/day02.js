const fs = require("fs");

fs.readFile("day05.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let resglobal = 0;

        const lines = data.trimEnd().split("\n");

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            const match = line.match(/Game (\d+):/);
            const gameNumber = parseInt(match[1], 10);

            const games = line.substring(match[0].length).split(";");
            console.log(gameNumber)

            const has12RedAnd13GreenAnd14Blue = (games) => {
                const redMatch = games.match(/(\d+) red/);
                const greenMatch = games.match(/(\d+) green/);
                const blueMatch = games.match(/(\d+) blue/);

                const redCount = redMatch ? parseInt(redMatch[1], 10) : 0;
                const greenCount = greenMatch ? parseInt(greenMatch[1], 10) : 0;
                const blueCount = blueMatch ? parseInt(blueMatch[1], 10) : 0;

                return redCount <= 12 && greenCount <= 13 && blueCount <= 14;
            }


            const allGamesValid = games.reduce(
                (p, g) => p + has12RedAnd13GreenAnd14Blue(g),
                0);

            if (allGamesValid === games.length) {
                resglobal += gameNumber;
                console.log(`resglobal ${resglobal} gamenumber ${gameNumber} `)
            }


            // let loseGames = true;
            //
            // for (let i = 0; i < games.length; i++){
            //     if (!has12RedAnd13GreenAnd14Blue(games[i])) {
            //         loseGames = false;
            //     }
            // }
            //
            // if (loseGames) {
            //     resglobal += gameNumber;
            //     console.log(`resglobal ${resglobal} gamenumber ${gameNumber} `)
            // }
        }

        console.log(resglobal)

    }
});
