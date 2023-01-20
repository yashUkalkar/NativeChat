// Packages
import express, { Express, Request, Response } from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

// Socket types
import socketInit from "./socket/socket.js";

// Socket event handlers
import { sendMessageHandler } from "./socket/messageEvents.js";

// Routes
import authRoutes from "./routes/authRoutes.js";

// Initializations
const app: Express = express();
const httpServer = createServer(app);
const io = socketInit(httpServer);

// Globals
const PORT = process.env.PORT || 5001;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
  })
);

// * Route mapping
app.use("/auth", authRoutes);

//* Base endpoint
// TODO: add a page to send saying unaccessible/unauthorized
app.all("/", (req: Request, res: Response) => {
  res.send("Nativechat express server!");
});

// Socket handlers
io.on("connection", (socket) => {
  console.log(`User connected to socket with id: ${socket.id}`);

  // * Add all event handlers
  sendMessageHandler(socket);
});

httpServer.listen(PORT, () => {
  console.log(
    `Server and socket started on ${PORT} and client url is ${CLIENT_URL}`
  );
});
