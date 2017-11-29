import Axios from 'axios';

const url = 'http://api.worldbank.org/v2/regions?format=json';

class regionService {
	getAllData() {
		return Axios({
			method: 'get',
			url
		});
	}
}

export default new regionService();