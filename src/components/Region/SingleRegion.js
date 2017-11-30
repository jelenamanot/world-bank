import React from 'react';

import './singleRegion.scss';

const SingleRegion = (props) => {
	return(
		<div className="single-region col-md-3">
			<div className="col-md-8 offset-md-2 wrap-region">
				<p className="text-center">{props.name}</p>
			</div>
		</div>
	);
};

export default SingleRegion;