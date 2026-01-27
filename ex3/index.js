const express = require('express');
const app = express();

app.get('/weather', async (req, res) => { 
    const lat = req.query.lat;
    const lon = req.query.lon;
    const API_KEY = 'a0672933183f646750604fddd8b9d951';

    
    if (!lat || !lon) {
        return res.status(400).json({
            error: 'Faltan parametros',
            message: 'Debes enviar lat y lon'
        });
    }

   
    if (isNaN(lat) || isNaN(lon)) {
        return res.status(400).json({
            error: 'Parametros invalidos',
            message: 'lat y lon deben ser numeros'
        });
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            return res.status(data.cod).json({
                error: 'Error de OpenWeather',
                mensaje: data.message
            });
        }


        res.json({
            ciudad: data.name,
            temperatura: data.main.temp,
            descripcion: data.weather[0].description,
            humedad: data.main.humidity,
            viento: data.wind.speed
        });

    } catch (error) {
        res.status(500).json({
            error: 'Error del servidor',
            mensaje: error.message
        });
    }
}); 

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});




