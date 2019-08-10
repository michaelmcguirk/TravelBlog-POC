import Axios from 'axios';


const getPlacesO = () => {
    return Axios.get(`${process.env.REACT_APP_COCKPIT_SERVER}/api/collections/get/${process.env.REACT_APP_COCKPIT_COLLECTION}?token=${process.env.REACT_APP_COCKPIT}`)
          .then(response => response.data.entries);
}

const getPlaces = async () => {
    const resp = await Axios.get(`${process.env.REACT_APP_COCKPIT_SERVER}/api/collections/get/${process.env.REACT_APP_COCKPIT_COLLECTION}?token=${process.env.REACT_APP_COCKPIT}`)
    return resp.data.entries
}

export default getPlaces;
