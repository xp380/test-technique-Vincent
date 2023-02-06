const router = require("express").Router();
const Todo = require("../models/Todo");

// Après avoir défini les models , on le importe dans des routes qui seront affichées en JSON.
router.get("/", (req, res) => {
  Todo.find((err, result) => {
    // la query find permet de retrouver tous les documents dans la BDD.
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) throw new Error(err);
    res.json(result);
  });
});

router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.datasetid },
    req.body,
    (err, result) => {
      // findOneAndUpdate permet de trouver le 1er doc qui correspond aux conditions en appliquant le changement.
      if (err) throw new Error(err);
      // console.log(result);
      res.json(result);
    }
  );
});

router.delete("/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.datasetid }, (err, result) => {
    if (err) throw new Error(err);
    res.end();
  });
});

module.exports = router;
