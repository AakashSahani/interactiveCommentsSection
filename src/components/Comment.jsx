import CommentTitle from './CommentTitle';
import Rating from './Rating';
import CommentBody from './CommentBody';

function Comment() {
	return (
		<div className="comment">
			<CommentTitle />
			<CommentBody />
		</div>
	);
}

export default Comment;
