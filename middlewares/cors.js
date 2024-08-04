import cors from "cors"; // CORS allows from browser

// Simple methods: GET, HEAD, POST
// Complex methods: PUT, PATCH, DELETE

// CORS PRE-Fligth --> for complex methods
// Make an OPTIONS request before doing a PUT, PATCH or DELETE

const ACCEPTED_ORIGINS = [
  "http://localhost:8080",
  "http://localhost:1234",
  "https://mi-sitio.com",
];

const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin) || !origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  });

export default corsMiddleware;
