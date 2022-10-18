import { useEffect, useState, useContext } from 'react';
import plus from '../assets/icon-plus.svg';
import minus from '../assets/icon-minus.svg';
import CommentContext from '../context/CommentContext';

function Rating() {
	const { sayHello } = useContext(CommentContext);
	const [rating, setRating] = useState(1);
	return (
		<div className="rating-container">
			<div className="rating">
				<button onClick={() => sayHello()}>
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
