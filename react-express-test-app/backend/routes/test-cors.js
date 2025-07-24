import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("You have reached the test-cors GET endpoint.");
});

router.route("/").post((req, res) => {
  res.send("You have reached the test-cors POST endpoint.");
});

export default router;
