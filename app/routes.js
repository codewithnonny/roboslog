const express = require("express");
const router = express.Router();
const { v4 } = require("uuid");

router.get('/',(req,res) => {
res.render('index');
})

router.get("/create-room", (req, res) => {
    res.redirect(`/${v4()}`);
  });
  
  router.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
  });

module.exports = router;
