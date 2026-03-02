import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port =process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("views",path.join(__dirname,"views"))
app.set("view engine", "ejs");

app.get("/",(req,res) =>{
    res.render("index")
})
app.get("/about",(req,res) =>{
    res.render("about")
})
app.get("/service",(req,res) =>{
    res.render("service")
})
app.get("/team",(req,res) =>{
    res.render("team")
})
app.get("/blog",(req,res) =>{
    res.render("blog")
})
app.get("/contact",(req,res) =>{
    res.render("contact")
})
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})