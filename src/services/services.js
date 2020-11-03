import axios from 'axios';

const getData = async (city) => {
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=15111268423bd37aca3f9c5d5b9d86f0`;
    const response = await axios.get(baseUrl);
    const data = response.data;
    return { name: data.name, temp: data.main.temp }
}

export default { getData }