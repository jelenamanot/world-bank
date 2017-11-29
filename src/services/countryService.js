import Axios from 'axios';

const url = 'http://api.worldbank.org/v2/countries?format=json';

class countryService {
	getAllData() {
		return Axios({
			method: 'get',
			url
		});
	}
}

export default new countryService();