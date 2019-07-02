import Axios from 'axios';


const getPlaces = () => {
    return Axios.get(`${process.env.REACT_APP_COCKPIT_SERVER}/api/collections/get/${process.env.REACT_APP_COCKPIT_COLLECTION}?token=${process.env.REACT_APP_COCKPIT}`)
          .then(response => response.data.entries);
}

export default getPlaces;
