const express = require("express");
const routes = express.Router();

let db = [
  { 1: { Nome: "Marcio", DataNascimento: "01/08/1975", Email:"marcio@medilab.com" }  },
  { 2: { Nome: "Marlos ", DataNascimento: "05/08/1980",Email:"marlos@medilab.com"  } },
  { 3: { Nome: "Luciane ", DataNascimento: "10/05/1970",Email:"luciane@medilab.com"  } },
  { 4: { Nome: "Wilkie ", DataNascimento: "12/03/1974",Email:"wilkie@medilab.com"  } },
];

routes.get("/", (req, res) => {
  return res.json(db);
});

routes.post("/add", (req, res) => {
  const body = req.body;

  if (!body) return res.status(400).end();

  db.push(body);
  return res.json(body);
});

routes.delete('/:id', (req, res) => {
    const id = req.params.id
    
    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB

    return res.send(newDB)
})   

module.exports = routes