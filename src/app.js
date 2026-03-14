import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const serviciosData = [
    { 
        nombre: "Life Insurance", 
        icono: "fa fa-users", 
        imagen: "img/service-1.jpg", 
        descripcion: "Protección completa para asegurar el futuro de tus seres queridos y tu tranquilidad." 
    },
    { 
        nombre: "Health Insurance", 
        icono: "fa fa-hospital", 
        imagen: "img/service-2.jpg", 
        descripcion: "Cuidado médico de alta calidad con cobertura en las mejores clínicas y hospitales." 
    },
    { 
        nombre: "Car Insurance", 
        icono: "fa fa-car", 
        imagen: "img/service-3.jpg", 
        descripcion: "Seguridad total en el camino ante cualquier imprevisto o asistencia vial." 
    },
    { 
        nombre: "Home Insurance", 
        icono: "fa fa-home", 
        imagen: "img/service-4.jpg", 
        descripcion: "Tu hogar y pertenencias protegidas contra robos, incendios y desastres naturales." 
    }
];


app.get("/", (req, res) => {
    res.render("index", { titulo: "Inicio | LifeSure", servicios: serviciosData, pagina: 'home' });
});

app.get("/about", (req, res) => {
    res.render("about", { titulo: "Nosotros | LifeSure", pagina: 'about' });
});

app.get("/service", (req, res) => {
    res.render("service", { titulo: "Servicios | LifeSure", servicios: serviciosData, pagina: 'service' });
});

app.get("/blog", (req, res) => {
    res.render("blog", { titulo: "Blog | LifeSure", pagina: 'blog' });
});

app.get("/team", (req, res) => {
    res.render("team", { titulo: "Equipo | LifeSure", pagina: 'team' });
});

app.get("/contact", (req, res) => {
    res.render("contact", { titulo: "Contacto | LifeSure", pagina: 'contact' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});