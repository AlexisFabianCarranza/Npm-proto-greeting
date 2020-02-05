const { writeFileSync } = require("fs");
const proto = require("./greeting");

(async () => {

    const cwd = process.cwd();

    writeFileSync(`${cwd}/greeting.proto`, proto);

    console.log("Proto created");
})();