const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    // function parse(data){
    let [seeds, ...maps] = data.trim().split('\n\n');

    // seeds = seeds.split(': ')[1].split(' ').map(Number);
    seeds = seeds.split(' ').slice(1).map(Number);

    maps = maps.map(m =>
        m
            .split('\n')
            .slice(1)
            .map(r => r.split(' ').map(Number))
    )
    // console.log('seeds:', seeds);
    // console.log('maps:', maps);


    //create a function which will check if number in range between one number + n number
    const between = (x, min, max) => {
        return x >= min && x <= max;
    }

    const vals = [seeds];

    for (let k = 0; k < maps.length; k++) {
        const cur = vals[vals.length - 1];
        const next = [];
        vals.push(next);

        l1: for (let i = 0; i < cur.length; i++) {

           for (let j = 0; j < maps[k].length; j++) {

                let difference = maps[k][j][0] - maps[k][j][1];

                if (between(cur[i], maps[k][j][1], (maps[k][j][1] + maps[k][j][2]))) {
                    // console.log(cur[i] + " in range " + true);

                    let newSeed = cur[i] + difference;
                    next.push(newSeed);
                    continue l1;
                }

                // } else {
                //     // console.log(cur[i] + " not in range " + false);
                // }
            }

            next.push(cur[i]);
        }
    }

    let res = Math.min(...vals[vals.length -1])
    console.log(res)
});
