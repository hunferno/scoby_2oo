const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.patch("/me", function (req, res, next) {
  User.findByIdAndUpdate(req.session.currentUser, req.body, {new : true})
      .then((respondApi) => {
        res.status(200).send(respondApi);
      })
      .catch((error) => {
        console.log(error);
      });
});

router.get("/me", function (req, res, next) {
  User.findById(req.session.currentUser)
      .then((respondApi) => {
        res.status(200).send(respondApi);
      })
      .catch((error) => {
        console.log(error);
      });
});



module.exports = router;
