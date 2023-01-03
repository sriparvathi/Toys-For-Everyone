require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Toys = require('./models/toys.js');
//set a variable of port to 3000
const PORT = process.env.PORT || 3000;
// set express and configure(middleware and more) to a variable
const app = express();// make webserver // create express application server 
app.use(express.static(__dirname + '/public'));// inorder to link these files we need to call app.use
app.use(methodOverride('_method'));
app.use(express.static('public'));// this serves the public folder
// middleware runs btwn req sent to server and res sent to the user usaully created to logging out in console
app.use((req, res, next) => {
  console.log("I run for all routes");
  next(); // this next function says run the next function in line. 
});
app.use(express.urlencoded({ extended: false }));// this will allow us to acess information coming from forms.
app.set('view engine', 'jsx');//telling our app to use the view engine
app.engine('jsx', require("express-react-views").createEngine());
// Setting up Mongoose
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
//INDUCES setting up the routes for the application
// Index = Show all records
app.get("/", (req, res) => {
  res.render("Home");
});
app.get("/toys", (req, res) => {
  Toys.find({}, (error, allToys) => {
    res.render("Index", {
      toys: allToys, // getting all toys from db to pass as props
    });
  });
});

// New - Get a form to create a new record
app.get("/toys/new", (req, res) => {
  res.render("New");
});
// Delete - Delete this one record
app.delete("/toys/:id", (req, res) => {
  Toys.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/toys");
  });
});
// Update - Modifying a record
app.put("/toys/:id", (req, res) => {
  console.log(req.body);
  if (req.body.quantity === "BUY") {
    Toys.findByIdAndUpdate(req.params.id, { $inc: { "quantity": -1 }, }, (err, updatedToy) => {
      console.log(true);
      res.redirect(`/toys/${req.params.id}`) // redirecting to the Show page 
    })
  } else {
    Toys.findByIdAndUpdate(req.params.id, req.body, (err, updatedToy) => {
      console.log(false);
      res.redirect(`/toys/${req.params.id}`) // redirecting to the Show page
    })
  }
});
// Create - send the filled form to db and create a new record
app.post("/toys", (req, res) => {
  Toys.create(req.body, (error, createdToys) => {
    res.redirect("/toys");
  });
});
// Edit - Get the form with the record to edit
app.get("/toys/:id/edit", (req, res) => {
  Toys.findById(req.params.id, (err, foundToy) => {
    //find the fruit
    if (!err) {
      res.render("Edit", {
        Toys: foundToy, //pass in the found toy so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Show route - Show me a particular record
app.get("/toys/:id", function (req, res) {
  Toys.findById(req.params.id, (err, foundToy) => {
    res.render("Show", {
      Toys: foundToy,
    });
  });
});
//set your app to listen to port and console log listening
app.listen(PORT, () => {
  console.log("listening");
});




