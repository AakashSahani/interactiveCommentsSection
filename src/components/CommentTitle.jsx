import amyrobson from '../assets/avatars/image-amyrobson.webp';
import reply from '../assets/icon-reply.svg';

function CommentTitle() {
	return (
		<div className="comment-title">
			<div className="info">
				<img src={amyrobson} alt="Profile Picture" />
				<div>Amy Robson</div>
				<div className="status">1 month ago</div>
			</div>
			<button className="reply">
				<img src={reply} alt="Reply" /> Reply
			</button>
		</div>
	);
}

export default CommentTitle;
