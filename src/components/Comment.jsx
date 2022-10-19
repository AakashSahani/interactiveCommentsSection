import Rating from './Rating';
import CommentTitle from './CommentTitle';
import CommentBody from './CommentBody';
import Reply from './Reply';

function Comment({ comment }) {
	return (
		<>
			<div key={comment.id} className="container">
				<Rating score={comment.score} />
				<div className="comment">
					<CommentTitle
						user={comment.user}
						postedOn={comment.createdAt}
						score={comment.score}
					/>
					<CommentBody content={comment.content} />
				</div>
			</div>
		</>
	);
}

export default Comment;
