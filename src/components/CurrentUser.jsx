import { useContext } from 'react';
import CommentContext from '../context/CommentContext';

function CurrentUser() {
	const { comment } = useContext(CommentContext);
	// console.log(comment.currentUser.image.webp);
	return (
		<div className="currentuser">
			<img src={comment.currentUser.image.webp} alt="Profile Picture" />
			<textarea
				name="comment"
				id="comment"
				cols="30"
				rows="3"
				className="currentuser-input"
				placeholder="Add a comment..."
			></textarea>

			<button type="submit" className="currentuser-btn">
				SEND
			</button>
		</div>
	);
}

export default CurrentUser;
