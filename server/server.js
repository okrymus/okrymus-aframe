const express = require("express");
const fs = require("fs");
const historyApiFallback = require("connect-history-api-fallback");
const mongoose = require("mongoose");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const config = require("../config/config");
const webpackConfig = require("../webpack.config");

const isDev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8080;

// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Socket.io
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// var https = require("https");
// var server = https.createServer(
//   {
//     key: fs.readFileSync("/etc/letsencrypt/live/okrymus.com/privkey.pem"),
//     cert: fs.readFileSync("/etc/letsencrypt/live/okrymus.com/cert.pem"),
//     ca: fs.readFileSync("/etc/letsencrypt/live/okrymus.com/chain.pem"),
//     requestCert: false,
//     rejectUnauthorized: false
//   },
//   app
// );
// server.listen(8000);
// var io = require("socket.io").listen(server);

// Socket.io
// var http = require("https");
// var sslPath = "/etc/letsencrypt/live/okrymus.com/";
// var options = {
//   key: fs.readFileSync(sslPath + "privkey.pem"),
//   cert: fs.readFileSync(sslPath + "fullchain.pem")
// };

// var server = http.createServer(options, app);
// var io = require("socket.io").listen(server);
// server.listen(8000);

// io.on("connection", function(socket) {
//   console.log("a user connected");
//   socket.on("disconnect", function() {
//     console.log("User Disconnected");
//   });
//   socket.on("example_message", function(msg) {
//     console.log("message: " + msg);
//   });
// });

// API routes
require("./routes")(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, "../client/public"),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, "../dist")));
} else {
  app.use(express.static(path.resolve(__dirname, "../dist")));
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
    res.end();
  });
}

app.listen(port, "0.0.0.0", err => {
  if (err) {
    console.log(err);
  }

  console.info(">>> 🌎 Open http://0.0.0.0:%s/ in your browser.", port);
});

module.exports = app;
