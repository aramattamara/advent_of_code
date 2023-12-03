const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
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

            const targetCountRed = 12;
            const targetCountGreen = 13;
            const targetCountBlue = 14;

            const redRegex = /(\d+) red/;
            const greenRegex =  /(\d+) green/;
            const blueRegex =  /(\d+) blue/;


            const has12RedAnd13GreenAnd14Blue = (games) => {
                const redMatch = games.match(redRegex);
                const greenMatch = games.match(greenRegex);
                const blueMatch = games.match(blueRegex);

                const redCount = redMatch ? parseInt(redMatch[1], 10) : 0;
                const greenCount = greenMatch ? parseInt(greenMatch[1], 10) : 0;
                const blueCount = blueMatch ? parseInt(blueMatch[1], 10) : 0;


                let res =  redCount <= targetCountRed && greenCount <= targetCountGreen && blueCount <= targetCountBlue;
                return res;

            }

            let lose = 0;

            for (let i = 0; i < games.length; i++){
                if (!has12RedAnd13GreenAnd14Blue(games[i])) {
                    lose += 1;
                }
            }

            if (lose === 0) {
                resglobal += gameNumber;
                console.log(`resglobal ${resglobal} gamenumber ${gameNumber} `)
            }
        }

        console.log(resglobal)

    }
});
