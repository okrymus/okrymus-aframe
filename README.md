# OKRYMUS

This is a simple experiment periodic table via webVR. If you have no VR device, it is okey. You also can experince with 360 degree view like it bring you into a small class room.

## LIVE

Hosted by Amazon Web Services (AWS) free web server
[ Click HERE](https://okrymus.com/periodicTable)
(https://okrymus.com/periodicTable)

## Technologies

This is a project using the following technologies:

- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation
- [Aframe](https://aframe.io) for WebVR and view 360
- [webvr-ui](https://www.npmjs.com/package/webvr-ui) for creation the Enter VR button

## Requirements

- [Node.js](https://nodejs.org/en/) 6+
- [MongoDB]

```shell
npm install
```

```shell
sudo apt-get install mongodb -y
```

## Running

You need to create an user in MangoDB.
Example

```shell
use my_db_name
db.createUser({ user: "exampleUser",
                 pwd: "changeThisInfo",
                 roles: [{ role: "readAnyDatabase", db: "admin" },
                          "readWrite"] })
db.auth("exampleUser","changeThisInfo");
exit
```

Make sure to add a `config.js` file in the `config` folder. See the example `config.example.js` there for more details.

Production mode:

```shell
npm start
```

Development (Webpack dev server) mode:

```shell
npm run start:dev
```

## How to play

- Use [w][a] [d][s] to move around
- Mouseover any element in the table to reveal more information about each element
- Left click any element in the periodic table to reveal an example model and more information.
- The tile's color is dedicated for element category.
- The whiteboard on the left shows electron configuration and element category.
- The desk name on the right shows a person who discoved the element.

## Source

- [MERN-boilerplate](https://github.com/okrymus/MERN-boilerplate)
- [Peridic Table data](https://www.kaggle.com/jwaitze/tablesoftheelements)
- [3D MODELS](https://sketchfab.com)
