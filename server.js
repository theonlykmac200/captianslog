const express = require("express")
const app = express()
const mongoose =require("mongoose")
const methodOverride = require("method-override")




require("dotenv").config()
const PORT = process.env.PORT

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  // Database Connection Error/Success
  // Define callback functions for various events
  const db = mongoose.connection
  db.on("error", (err) => console.log(err.message + " is mongo not running?"))
  db.on("connected", () => console.log("mongo connected"))
  db.on("disconnected", () => console.log("mongo disconnected"))

  //middleware
  //Body Parder middleware 
  app.use(express.urlencoded({extended: true}))
  // method Override needs to be installed - Don't forget that!
  // captures (post)requests for put and delete and converts them from a post
  app.use(methodOverride("_method"))
  // use the books controller for books routes
  app.use(express.static("public"))


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))
app.use(methodOverride("_method"))



// Follow INDUCES
//index
app.get("/logs", (req, res) => {
    res.send("the stars look very different today")
})

app.get("/logs/new", (req, res) => {
    res.send("I'm sitting in a tin can")

})

app.get("/logs/:id", (req, res) => {
    res.send("far above the earth")
})




app.listen(PORT, () => {
    console.log("Can you hear me Major Tom?")
})

