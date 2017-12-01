import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
	const { placeholder, searchValue, handleUpdateSearch } = props;
	return(
		<input 
			type="text"
			placeholder={placeholder}
			value={searchValue}
			className="form-control"
			onChange={handleUpdateSearch}
		/>
	);
};

Search.propTypes = {
	placeholder: PropTypes.string,
	searchValue: PropTypes.string,
	handleUpdateSearch: PropTypes.func
};

export default Search;