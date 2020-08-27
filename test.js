const axios = require("axios");

const testfunc = async () =>{

const res = await axios.get("https://jobs.github.com/positions.json")
 console.log("RES!!!", res)
}

testfunc()
