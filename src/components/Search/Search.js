import React from 'react';


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

export default Search;