1.Text File Creation.

let info = new Date()
let fs = require("fs");
fs.writeFile("./date-time.txt",info.toString(),()=>{
    console.log("Executed");
})
