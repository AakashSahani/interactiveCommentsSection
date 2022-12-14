import { useState } from 'react';
import plus from '../assets/icon-plus.svg';
import minus from '../assets/icon-minus.svg';

function Rating({ score }) {
	const [rating, setRating] = useState(score);
	return (
		<div className="rating-container">
			<div className="rating">
				<button onClick={() => setRating(rating + 1)}>
					<img src={plus} alt="Add Rating" />
				</button>
				{rating}
				<button onClick={() => setRating(rating - 1)}>
					<img src={minus} alt="Subtract Rating" />
				</button>
			</div>
		</div>
	);
}

export default Rating;
