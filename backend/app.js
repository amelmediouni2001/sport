// import express module
const express = require("express");
// import body-Parser module
const bodyParser = require("body-parser");
// creat express application
const app = express();
//import bcrypt module
const bcrypt=require("bcrypt");
//import mongoose module
const mongoose = require("mongoose");
//import multer module : module externe dois npm install multer
const multer = require('multer');
//import axios module
const axios= require("axios");
//import json web token module
const jwt = require('jsonwebtoken');
//import express session module
const session = require('express-session');
//module interne yatba3 node
const path = require('path');
//connect express application with DataBase via mongoos
// sportDB : le nom de la database
// mongodb://127.0.0.1 : AKA : http://Localhost
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

//configuration
//send JSON Responses
app.use(bodyParser.json());
//Get object from request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//path configuration(multer)(shortcut)
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
 'image/png': 'png',
 'image/jpeg': 'jpg',
 'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
    // destination
    //Essayer ye Amel la log de ce code
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
    }
    cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
   extension;
    cb(null, imgName);
    }
   });

   //Session configuration
   const secretKey = 'Crococoder2023SessionAngular';
app.use(session({
secret: secretKey,
}));
   

//models importation
const MatchModel = require("./models/match");
// const PlayerModel = require("./models/player");
const Team = require("./models/team");
// const StadiumModel = require("./models/stadium");
const ImcModel = require("./models/imc");
const UserModel = require("./models/user");




//DB simulation

let matchesTab = [
    { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD", },
    { id: 2, scoreOne: 0, scoreTwo: 2, teamOne: "JUV", teamTwo: "ROM", },
    { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "ATM", teamTwo: "SEV", },
    { id: 4, scoreOne: 4, scoreTwo: 4, teamOne: "LIV", teamTwo: "INT", },
    { id: 5, scoreOne: 7, scoreTwo: 3, teamOne: "EFG", teamTwo: "ABC", }
];
let teamsTab = [
    { id: 1, name: "Ba9lewa", owner: "Ali", stadium: 1 },
    { id: 2, name: "EST", owner: "Med", stadium: 2 },

];

let playersTab = [

    { id: 1, name: "Cristiano", age: 36, position: "atq" },
    { id: 2, name: "Messi", age: 34, position: "Forward" },
    { id: 3, name: "Neymar ", age: 29, position: "Defender " }


];

//Fontion generateId
function generateId(T) {
    let max;
    if (T.length != 0) {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
        return max + 1;
    } else return 1;
};


//Business Logic : traitement des requetes matches
//Business Logic : Get All matches
app.get("/matches", (req, res) => {
    //traitement de la requete y compris la reponse
    console.log("here into BL : Get All matches");
    MatchModel.find().then(
        (data) => {
            res.json({ matches: data });

        }
    )

});


//Business Logic : Get match by id
app.get("/matches/:id", (req, res) => {
    //traitement de la requete
    console.log("here into BL : Get  match by ID");
    let id = req.params.id;
    MatchModel.findOne({ _id: id }).then(
        (data) => {
            res.json({ match: data });

        })
    // let findedMatch = matchesTab.find((elt) => {
    //     return elt.id == id;
});




//Business Logic : post add match 
app.post("/matches", (req, res) => {
    //traitement de la requete
    console.log("here into BL : Add Match", req.body);
    // match => instance de type match
    let matchObj = new MatchModel(req.body);
    //Save => methode predefinie mongoose
    matchObj.save(
        (err, doc) => {
            console.log("here retour error", err);
            console.log("here retour document", doc);
            err ? res.json({ msg: "error" }) : res.json({ msg: "Added with succeess" });



        });
    // let match = req.body;
    // match.id = generateId(matchesTab);
    // matchesTab.push(match);
    // res.json({ msg: "Added with succeess" })
});


//Business Logic : put update match  
app.put("/matches", (req, res) => {
    //traitement de la requete
    console.log("here into BL : update Match");
    let newMatch = req.body;
    MatchModel.updateOne({ _id: newMatch._id }, newMatch).then(
        (data) => {
            console.log("here data after update", data);
            data.nModified ?
                res.json({ msg: "updated with succeess" }) :
                res.json({ msg: "NOT updated" });

        })
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == newMatch.id) {
    //         matchesTab[i] = newMatch;
    //         break;
    //     }

    // }
    res.json({ msg: "Edited with succeess" });
});



//Business Logic : delete match by id
app.delete("/matches/:id", (req, res) => {
    //traitement de la requete
    console.log("here into BE : delet match by id");
    let id = req.params.id;
    MatchModel.deleteOne({ _id: id }).then(
        (data) => {
            console.log("here data after delete", data);
            data.deletedCount == 1 ?
                res.json({ msg: " : deleted with succeess" }) :
                res.json({ msg: "Not deleted" });


        });

    // let isDeleted = false;
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         matchesTab.splice(i, 1);
    //         isDeleted = true;
    //         break;
    //     }
    // }
    // isDeleted ?
    //     res.json({ msg: "Deleted with success" }) :
    //     res.json({ msg: "Not Found" });
});

// // //Business Logic : Search Matches by scoreOne==0 OR scoreTwo==1 solution 1
// app.post("/matches/search", (req, res) => {

//     //traitement de la requete
//     console.log("here into BL : search  ");
//     let obj = req.body;
//     console.log("here obj", obj);
//     let foundMatch = matchesTab.filter((elt) => {
//         return elt.scoreOne == obj.scoreOne || elt.scoreTwo == obj.scoreTwo
//     });
//     res.json({tab : foundMatch});
    
//     });

// //Business Logic : Search Matches by scoreOne==0 OR scoreTwo==1 solution 2
app.get("/matches/search/:scoreOne/:scoreTwo", (req, res) => {
    //traitement de la requete
    console.log("here into BL : search match by scoreOne==0 OR scoreTwo==1 ");
    let scoreOne = req.params.scoreOne;
    let scoreTwo = req.params.scoreTwo;
    let foundMatch = matchesTab.filter((elt) => {
        return elt.scoreOne == scoreOne || elt.scoreTwo == scoreTwo
    });
    res.json({tab : foundMatch});
    
    // if (foundMatch.length != 0) {
    //     res.json({ match: foundMatch });
    // } else {
    //     res.json({ message: "No matchs found" });
    // }
});








// //Business Logic : traitement des requetes des players
// //Business Logic : Get All players

// app.get("/players", (req, res) => {
//     //traitement de la requete
//     //traitement de la requete y compris la reponse
//     console.log("here into BL : Get All players");
//     PlayerModel.find().then(
//         (data) => {
//             res.json({ player: data });

//         }
//     )

// });

// //Business Logic : Get player by id
// app.get("/players/:id", (req, res) => {
//     //traitement de la requete
//     console.log("here into BL : Get  player by ID");
//     let id = req.params.id;
//     PlayerModel.findOne({_id: id}).then( 
//         (data)=> {
//             res.json({player : data});

//         })

//      });




//Business Logic : post add player 
app.post("/players", (req, res) => {
    //traitement de la requete
    console.log("here into BL : Add player", req.body);
    // player => instance de type player
    let playerObj = new PlayerModel(req.body);
    //Save => methode predefinie mongoose
    playerObj.save();

    res.json({ msg: "Added with succeess" })
});

// //Business Logic : put update player  
// app.put("/players", (req, res) => {
//     //traitement de la requete
//     console.log("here into BE : update Player");
//     let newPlayer = req.body;
//     PlayerModel.updateOne({_id:newPlayer._id}, newPlayer).then( 
//         (data)=> {
//             res.json({msg : "updated with succeess"});

//         })

//     res.json({ msg: "Edited with succeess" });
// });


// //Business Logic : delete player by id
// app.delete("/players/:id", (req, res) => {
//     //traitement de la requete
//     console.log("here into BE : delete player by id");
//     let id = req.params.id;
//     PlayerModel.deleteOne({_id: id}).then( 
//         (data)=> {
//             res.json({msg : "deleted with succeess"});

//         })


// });

// //Business Logic : Search player by id

// app.post("/players/searchPlayer", (req, res) => {
//     console.log("here BL : search Player", req.body);
//     let p = req.body;
//     let findedPlayer = playersTab.filter((obj) => {
//         return obj.name == p.name || obj.age == p.age;
//     });
//     res.json({ players: findedPlayer });
//     console.log("finded player : ", findedPlayer);

// });












// //Business Logic : traitement des requetes des Teams
// //Business Logic : Get All players
// app.get("/players", (req, res) => {
//     //traitement de la requete
// });
// //Business Logic : Get player by id
// app.get("/players/:id", (req, res) => {
//     //traitement de la requete
// });
// //Business Logic : post add player 
// app.post("/players", (req, res) => {
//     //traitement de la requete
// });
// //Business Logic : put update player  
// app.put("/players", (req, res) => {
//     //traitement de la requete
// });

// //Business Logic : delete player by id
// app.delete("/players/:id", (req, res) => {
//     //traitement de la requete
// });





//Business Logic : Get All teams

app.get("/teams", (req, res) => {
    //traitement de la requete
    //traitement de la requete y compris la reponse
    console.log("here into BL : Get All teams");
    Team.find().then(
        (data) => {
            res.json({ teams: data });

        }
    )

});

//Business Logic : Get team by id
app.get("/teams/:id", (req, res) => {
    //traitement de la requete
    console.log("here into BL : Get  team by ID");
    let id = req.params.id;
    TeamModel.findOne({ _id: id }).then(
        (data) => {
            res.json({ team: data });

        })

});



//Business Logic : post add team 
app.post("/teams", (req, res) => {
    //traitement de la requete
    console.log("here into BL : Add team", req.body);
    // team => instance de type team
    let teamObj = new Team(req.body);
    //Save => methode predefinie mongoose
    teamObj.save(
        (err, doc) => {
            console.log("here retour error", err);
            console.log("here retour document", doc);
            err ? res.json({ msg: "error" }) : res.json({ msg: "Added with succeess" });



        });

});


//Business Logic : put update team  
app.put("/teams", (req, res) => {
    //traitement de la requete
    console.log("here into BE : update Team");
    let newTeam = req.body;
    TeamModel.updateOne({ _id: newTeam._id }, newTeam).then(
        (data) => {
            res.json({ msg: "updated with succeess" });

        })

    res.json({ msg: "Edited with succeess" });
});


//Business Logic : delete team by id
app.delete("/teams/:id", (req, res) => {
    //traitement de la requete
    console.log("here into BE : delete team by id");
    let id = req.params.id;
    TeamModel.deleteOne({ _id: id }).then(
        (data) => {
            res.json({ msg: "deleted with succeess" });

        })


});



// //Business Logic : Get All stadiums

// app.get("/stadiums", (req, res) => {
//     //traitement de la requete
//     //traitement de la requete y compris la reponse
//     console.log("here into BL : Get All stadiums");
//     StadiumModel.find().then(
//         (data) => {
//             res.json({ stadium: data });

//         }
//     )

// });

// //Business Logic : Get stadium by id
// app.get("/stadiums/:id", (req, res) => {
//     //traitement de la requete
//     console.log("here into BL : Get  stadium by ID");
//     let id = req.params.id;
//     StadiumModel.findOne({_id: id}).then( 
//         (data)=> {
//             res.json({stadium : data});

//         })

//      });




// //Business Logic : post add stadium 
// app.post("/stadiums", (req, res) => {
//     //traitement de la requete
//     console.log("here into BL : Add stadium", req.body);
//     // stadium => instance de type stadium
//     let stadiumObj = new StadiumModel(req.body);
//     //Save => methode predefinie mongoose
//     stadiumObj.save();

//     res.json({ msg: "Added with succeess" })
// });

// //Business Logic : put update stadium  
// app.put("/stadiums", (req, res) => {
//     //traitement de la requete
//     console.log("here into BE : update Stadium");
//     let newStadium = req.body;
//     StadiumModel.updateOne({_id:newStadium._id}, newStadium).then( 
//         (data)=> {
//             res.json({msg : "updated with succeess"});

//         })

//     res.json({ msg: "Edited with succeess" });
// });


// //Business Logic : delete stadium by id
// app.delete("/stadiums/:id", (req, res) => {
//     //traitement de la requete
//     console.log("here into BE : delete stadium by id");
//     let id = req.params.id;
//     StadiumModel.deleteOne({_id: id}).then( 
//         (data)=> {
//             res.json({msg : "deleted with succeess"});

//         })


// });


// calcul l'IMC
app.post("/imc", (req, res) => {
    console.log("here into BE : calcul IMC", req.body);
    let imc = req.body.poid / (req.body.tailleEnMetres * req.body.tailleEnMetres * 0.0001);
    const obj = new ImcModel({
        name: req.body.name,
        taille: req.body.taille,
        poid: req.body.poid,
        imcValue: imc,
    });
    let msg = "";
    if (imc < 18.5) {
        msg = 'Insuffisance pondérale (maigreur)';
    } else if (imc >= 18.5 && imc < 25) {
        msg = 'Corpulence normale';
    } else if (imc >= 25 && imc < 30) {
        msg = 'Surpoids';
    } else if (imc >= 30 && imc < 35) {
        msg = 'Obésité modérée';
    } else if (imc >= 35 && imc < 40) {
        msg = 'Obésité sévère';
    } else {
        msg = 'Obésité morbide ou massive';
    }
    obj.save(
        (err, doc) => {
            if (doc) {
                res.json({ msg: msg })
            } else {
                res.json({ msg: err })

            }

        }
    )
});


//Business Logic : post add stadium 
// app.post("/stadiums", (req, res) => {
//     //traitement de la requete
//     console.log("here into BL : Add stadium", req.body);
//     // stadium => instance de type stadium
//     let stadiumObj = new StadiumModel(req.body);
//     //Save => methode predefinie mongoose
//     stadiumObj.save();

//     res.json({ msg: "Added with succeess" })
// });

//bussniss logic : signup
// Traitement logique
app.post("/users/signup",  multer({ storage: storage }).single('img'), (req, res) => {
    console.log("here into BL: sign up ", req.body);
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log("here crypted pwd", cryptedPwd);
        req.body.pwd=cryptedPwd;
        req.body.avatar="http://localhost:3000/images/"+ req.file.filename;

        let user = new UserModel(req.body);
        
        user.save(
            (err, doc) => {
               console.log(err);
                // msg = 0 => email exists
                err ? res.json({ msg: "0" }) :
                    res.json({ msg: "signup with succeess" });
    
            }
        )


    })

})


//bussniss logic : LOGIN by pass and email

app.post("/users/login", (req, res) => {
    let user ;
    console.log("here into BL login", req.body);
  
    // Find the user by email and password
    UserModel.findOne({ email :req.body.email}).then(
        (doc) => {
            if (!doc) {
                res.json({msg : "please check ur email"});
                
            } else {
                user = doc;
                return bcrypt.compare(req.body.pwd, doc.pwd);

                
            }   
          }).then((pwdResult)=> {
                console.log("here pwdResult : ", pwdResult);
                if (!pwdResult) {
                    res.json({msg : "please check ur pwd"});

                }
                
                 else {
                    let userToSend ={
                        id : user._id,
                        fName: user.firstName,
                        lName: user.lastName,
                        role: user.role,
                    };
                    const token = jwt.sign(userToSend , secretKey, { expiresIn:'1h' });                        
                    res.json({result : token , msg: "Success"});


                }

            }
          )
  });

  app.post("/weather", (req, res) => {
    console.log("here city", req.body);
    const key = "9f5782d7c5689fc3ccf5f0f68fbab0b9";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key} `;
    
    axios.get(weatherURL).then((apiResponse) => {
        console.log("API Response: ", apiResponse.data.weather);
        const weather = apiResponse.data.main;
        console.log('Here weather main', weather);
        const result = {
            temp: weather.temp,
            pressure: weather.pressure,
            humidity: weather.humidity,
            wind: apiResponse.data.wind.speed,
            icon: apiResponse.data.weather // Fixed the 'data.weather' part here
        };
        
        res.status(200).json({
            result: result
        });
    });
});


 

//make app importable from another files : exportation de l'application
module.exports = app;




