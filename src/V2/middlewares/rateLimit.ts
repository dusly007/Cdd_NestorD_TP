import rateLimit from "rate-limit-express";
import config from "config";

// Limitation des requêtes à 100 toutes les 15 minutes
const rateLimiter = rateLimit({
  windowMs: config.get("security.rateLimit.windowMs"), 
  max: config.get("security.rateLimit.max"), 
  message: "Too many requests, please try again later."
});

export default rateLimiter;
