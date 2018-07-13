var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://karthikbalaji:7sv75vTLTOoJOEPj@kbgixxer1-szqdz.mongodb.net/football";
MongoClient.connect(uri, function (err, client) {
    const footabllersCollection = client.db("football").collection("footballers");
    // perform actions on the collection object
    if (err) {
        console.log("err", err);
    }
    else {
        let footballersData = [
            {
              Name: "Cristiano Ronaldo",
              Nationality: "Portugal",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Real Madrid",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Lionel Messi",
              Nationality: "Argentina",
              National_Position: "RW",
              National_Kit: 10,
              Club: "FC Barcelona",
              Club_Position: "RW",
              Club_Kit: "10",
              Club_Joining: "07/01/2004",
              Contract_Expiry: "2018",
              Rating: 93,
              Height: "170 cm",
              Weight: "72 kg",
              Preffered_Foot: "Left",
              Birth_Date: "06/24/1987",
              Age: 29,
              Preffered_Position: "RW",
              Work_Rate: "Medium / Medium",
              Weak_foot: 4,
              Skill_Moves: 4,
              Ball_Control: 95
            },
            {
              Name: "Neymar",
              Nationality: "Brazil",
              National_Position: "LW",
              National_Kit: 10,
              Club: "FC Barcelona",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2013",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Medium",
              Weak_foot: 5,
              Skill_Moves: 5,
              Ball_Control: 95
            },
            {
              Name: "Manuel Neuer",
              Nationality: "Germany",
              National_Position: "GK",
              National_Kit: 1,
              Club: "FC Bayern",
              Club_Position: "GK",
              Club_Kit: "7",
              Club_Joining: "07/01/2011",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "03/27/1986",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 1,
              Ball_Control: 48
            },
            {
              Name: "De Gea",
              Nationality: "Spain",
              National_Position: "GK",
              National_Kit: 7,
              Club: "Manchester Utd",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Robert Lewandowski",
              Nationality: "Poland",
              National_Position: "LS",
              National_Kit: 7,
              Club: "FC Bayern",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Gareth Bale",
              Nationality: "Wales",
              National_Position: "RS",
              National_Kit: 7,
              Club: "Real Madrid",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Zlatan Ibrahimović",
              Nationality: "Sweden",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Manchester Utd",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Thibaut Courtois",
              Nationality: "Belgium",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Chelsea",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Jérôme Boateng",
              Nationality: "Germany",
              National_Position: "LS",
              National_Kit: 7,
              Club: "FC Bayern",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Eden Hazard",
              Nationality: "Belgium",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Chelsea",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Luka Modrić",
              Nationality: "Croatia",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Real Madrid",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Mesut Özil",
              Nationality: "Germany",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Arsenal",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Gonzalo Higuaín",
              Nationality: "Argentina",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Juventus",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Thiago Silva",
              Nationality: "Brazil",
              National_Position: "LS",
              National_Kit: 7,
              Club: "PSG",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Sergio Ramos",
              Nationality: "Spain",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Real Madrid",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Sergio Agüero",
              Nationality: "Argentina",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Manchester City",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Paul Pogba",
              Nationality: "France",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Manchester Utd",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            },
            {
              Name: "Antoine Griezmann",
              Nationality: "France",
              National_Position: "LS",
              National_Kit: 7,
              Club: "Atlético Madrid",
              Club_Position: "LW",
              Club_Kit: "7",
              Club_Joining: "07/01/2009",
              Contract_Expiry: "2021",
              Rating: 94,
              Height: "185 cm",
              Weight: "80 kg",
              Preffered_Foot: "Right",
              Birth_Date: "02/05/1985",
              Age: 32,
              Preffered_Position: "LW/ST",
              Work_Rate: "High / Low",
              Weak_foot: 4,
              Skill_Moves: 5,
              Ball_Control: 93
            }
          ];
        
      
          /**
         * FEATURE : New User API - bulk
         * inserts new users in users collection the insert the 
         * _id as user_id in followers collection
         */
        footabllersCollection.insertMany(footballersData, function (err, result) {
            if (err) { console.log('error'); }
            else {
                console.log('success', result, result.insertedIds);
            }

            client.close();
        })
    }
});


