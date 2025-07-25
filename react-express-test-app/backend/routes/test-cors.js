import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
  const myHeader = req.headers["x-my-header"];
  if (myHeader)
    res.send(
      "You have reached the test-cors GET endpoint. Preflight check passed."
    );
  else res.send("You have reached the test-cors GET endpoint.");
});

router.route("/").post((req, res) => {
  res.send("You have reached the test-cors POST endpoint.");
});

export default router;
