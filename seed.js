const Job = require('./server/db/models/job')
const axios = require("axios");

const apiCall = async () =>{
  const {data} = await axios.get("https://jobs.github.com/positions.json")
  //  console.log("RES!!!", res)
   return data;
  }

  const jobsFromApi = async () =>{
   const data = await apiCall()
    data.map(async (obj) => {
    console.log("OBJ!!!", obj)
    const foundItem = await Job.findByPk(obj.id);
   if (!foundItem) {
        // Item not found, create a new one
        const item = await Job.create(obj)
        return  {item, created: true};
    }
    //Found an item, update it
    const item = await Job.update(obj, {
      where: {
        id: obj.id,
        company: obj.company,
        url: obj.url,
        location: obj.location,
        title: obj.title,
        description: obj.description
      }
    });  //update not sure if it works ok
    return {item, created: false};
   })
  }

  jobsFromApi()
