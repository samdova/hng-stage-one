import requestIp from 'request-ip';
import axios from 'axios';

class UserController {
    static async getGreeting(req, res) {
        const visitorName = req.query.visitor_name || 'Guest';
        const clientIp = requestIp.getClientIp(req) || '127.0.0.1';

        try {
            // Get location based on IP
            const locationData = await axios.get(`https://ipapi.co/${clientIp}/json/`);
            const city = locationData.data.city || 'Unknown';
            
            // Get weather based on location
            const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`);
            const temperature = weatherData.data.main.temp || 'Unknown';

            // Respond with the JSON object
            res.json({
                client_ip: clientIp,
                location: city,
                greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${city}.`
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}

export default UserController;