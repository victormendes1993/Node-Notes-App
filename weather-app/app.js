import axios from 'axios'

const url = 'https://api.weatherstack.com/current?access_key=2cfe25ab2cb0936210c0ed06a573d6ea&query=linhares'

axios.get(url)
    .then(response => {
        //response - The full Axios response object with metadata.
        //response.data - The parsed response body (JavaScript object for JSON responses).
        console.log(response.data.location)
    });