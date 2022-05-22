const express = require("express");
const { get } = require("express/lib/response");
const app = express();
const PORT = process.env.PORT || 3002;
const cors =require('cors');

app.use(cors());
const database = [
  {
    usn: "4MN18EC013",
    name: "Meghana",
  },
  {
    usn: "4MN18EC007",
    name: "Harshitha",
  },{
    usn: "4MN18EC003",
    name: "Bhuvana",
  }
]

app.get("/request-data", (req, res) => {
  if (req.query.usn) {
    const item = database.find((item) => {
      if (item.usn == req.query.usn) {
        return item
      }
    });
    console.log(item)
    res.send(item);
  } else {
    res.send("NOT FOUND")
  }
})

app.listen(PORT, () => {
  console.log(`server is running at url http://localhost:${PORT}`);
})
