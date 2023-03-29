let fs = require("node:fs");
let http = require("node:http");
const path = require("node:path");
let url = require("node:url")
let app = http.createServer((req, res) => {

    let { pathname } = url.parse(req.url);
    if (pathname == "/") {
        res.write("Server is running successfully");
        res.end()
    }
    if (pathname == "/createfile") {
        fs.writeFileSync(`${date.getDate()}-${date.getHours()}.txt`, `Hello content! at date = ${date.getDate()} time = ${date.getHours()}`, (err) => {

            if (err) {

                res.write("File is not created");
                res.end()
            }


        });
        res.write("File is created");
        res.end()

    }
    if (pathname == "/readfile") {


        fs.readFile(`${date.getDate()}-${date.getHours()}.txt`, "utf-8", (err, msg) => {
            if (msg) {
                res.write(msg);
                res.end()
            } else {
                res.write("File not readed");
                res.end()
            }
        })
    }
})

app.listen(4000, () => {
    console.log("Server is ruunning succesfully");
})
let date = new Date()


