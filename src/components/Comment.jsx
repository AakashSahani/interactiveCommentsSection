import CommentTitle from './CommentTitle';
import Rating from './Rating';

function Comment() {
	return (
		<div className="comment">
			<Rating />
			<CommentTitle />
		</div>
	);
}

export default Comment;
