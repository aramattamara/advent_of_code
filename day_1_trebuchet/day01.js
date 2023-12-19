
const fs = require("fs");

fs.readFile("day05_example.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // let resglobal = 0;
        // .map.forEach.filter.combine

        // const resglobal= data
        //     .trimEnd()
        //     .split("\n")
        //     .map((line) => {
        //         line.replaceAll(/\D/g, '')
        //     })
        //     .map((numb) => {
        //         String(numb[0] + numb[numb.length - 1])
        //     })
        //     .reduce((res, str) => {
        //         res + parseInt(str)
        //     }, 0)

        let resglobal = 0;
        const lines = data.trimEnd().split("\n");
        for (let i = 0; i < lines.length; i++) {
            let numb = lines[i].match(/\d/g);
            res = numb[0] + numb[numb.length - 1];
            resglobal += parseInt(res);
            console.log(`lines[i]=${lines[i]}, numb=${numb}, res=${res}, resglobal=${resglobal}`);
        }
        console.log(resglobal);
    }
});
