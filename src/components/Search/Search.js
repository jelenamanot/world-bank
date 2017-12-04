import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
	const { placeholder, searchValue, handleUpdateSearch, resetSearch } = props;
	return(
		<div className="row">
			<div className="col-md-10">
				<input 
					type="text"
					placeholder={placeholder}
					value={searchValue}
					className="form-control"
					onChange={handleUpdateSearch}
				/>
			</div>
			<div className="col-md-2">
				<button 
					onClick={resetSearch}
					className="reset-btn"
				>
					&times;
				</button>
			</div>
		</div>
	);
};

Search.propTypes = {
	placeholder: PropTypes.string,
	searchValue: PropTypes.string,
	handleUpdateSearch: PropTypes.func,
	resetSearch: PropTypes.func
};

export default Search;