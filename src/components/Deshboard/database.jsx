const axios = require('axios')

const getItems = () => {
  try {
    return axios.get('https://lamp.ms.wits.ac.za/home/s2172765/home.php');
  } catch (error) {
    console.error(error)
  }
}

const Products = async () => {
  const breeds = getItems()
    .then(response => {
      if (response.data.message) {
        console.log(response.data.message);
      }
    })
    .catch(error => {
      console.log(error)
    })
}
Products();
