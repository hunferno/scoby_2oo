const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", function (req, res, next) {
  Item.find()
    .then((respondApi) => {
      res.status(200).send(respondApi);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/:id", function (req, res, next) {
  Item.findById(req.params.id)
    .then((respondApi) => {
      res.status(200).send(respondApi);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/", function (req, res, next) {
  req.body.id_user = req.session.currentUser;
  // console.log("---------------->");
  // console.log(req.session);

  Item.create(req.body)
    .then((resApi) => {
      res.status(200).send(resApi);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});

router.patch("/:id", function (req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((respondApi) => {
      res.status(200).send(respondApi);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/:id", function (req, res, next) {
  Item.findOneAndDelete(req.params.id)
    .then((respondApi) => {
      res.status(200).send("item deleted");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
