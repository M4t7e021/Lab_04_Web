const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

// Habilitar CORS para conectar con el frontend
app.use(cors());
app.use(express.json());

// 4. Endpoint /api/health
app.get('/api/health', (req, res) => {
    res.json({ 
        status: "success", 
        message: "¡El API está funcionando correctamente!" 
    });
});

// 5. Endpoint /api/info (con carnet, ciudad, carrera y cantidad de proyectos)
app.get('/api/info', (req, res) => {
    res.json({
        status: "success",
        integrantes: [
            {
                nombre: "Matteo Castaneda",
                carnet: "00000021",
                ciudad: "Mejicanos",
                carrera: "Ingeniería Informática",
                proyectosRealizados: 5
            }
        ]
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`\n=================================`);
    console.log(` Servidor Backend corriendo en:`);
    console.log(` http://localhost:${PORT}`);
    console.log(`=================================\n`);
});