// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser")
// const path = require("path");

// const userModel = require("./models/user");

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// //index page
// app.get('/', (req, res) => {
//     res.render("index")
// })

// //signup page
// app.get("/signup", (req, res) => {
//     res.render("signup.ejs")
// })

// app.post('/signup', (req, res) => {
//     let { username, email, password } = req.body;

//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(req.body.password, salt, async(err, hash) => {
//                 let createdUser = await userModel.create({
//                 username,
//                 email,
//                 password: hash,
//             })

//             let token = jwt.sign({email}, "ukululelule");
//             res.cookie("token", token);

//             res.redirect("/index")
//         })
//     })
// })

// //login page
// app.get('/login', (req, res) => {
//     res.render("login")
// })

// app.post("/login", async (req, res) => {
//     let user = await userModel.findOne({email: req.body.email});
//     if(!user) return res.send("something went wrong");

//     bcrypt.compare(req.body.password, user.password, (err, result) => {
//         if(result) {
//             let token = jwt.sign({email: user.email}, "ukululelule");
//             res.cookie("token", token);
//              res.redirect("/index");
//         } else {
//             res.send("something went wrong2")
//         }
//     })
// })

// app.get('/logout', (req, res) => {
//     res.cookie("token", "");
//     res.redirect("/index")
// })

// app.listen(3000);