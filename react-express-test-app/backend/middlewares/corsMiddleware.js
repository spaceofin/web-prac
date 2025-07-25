export function corsMiddleware(req, res, next) {
  const allowedOrigin = process.env.CLIENT_ORIGIN;

  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Authorization,X-my-header"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
}
