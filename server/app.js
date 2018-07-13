const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
let db;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var uri =
  "mongodb+srv://karthikbalaji:1223445678@username.mongodb.net/football";  // mongo connection string here

MongoClient.connect(uri, function(err, client) {
  if (err) return console.log(err);
  db = client.db("football");
  app.listen(4000, () => {
    console.log("listening on 4000");
  });
});

/**
 * Endpoint : /api/getFootballersList
 * Method : GET
 * Description : Retrieves all the footballers list
 */
app.get("/api/getFootballersList", (req, res) => {
  db
    .collection("footballers")
    .find({})
    .project({Name: 1, Nationality: 1, Club: 1, Preffered_Position: 1})
    .toArray((err, result) => {
      console.log(result);
      res.send(JSON.stringify(result));
    });
});

/**
 * Endpoint : /api/getFootballerDetails
 * Method : POST
 * Description : Retrieves specific footballer details 
 */
app.post("/api/getFootballerDetails", (req, res) => {
  const userId = req.body.userId;
  console.log("data:", userId);
  db.collection("footballers").findOne({ _id: ObjectId(userId) }, (err, result) => {
    console.log(result);
    res.send(JSON.stringify(result));
  });
});
