import amyrobson from '../assets/avatars/image-amyrobson.webp';
import reply from '../assets/icon-reply.svg';

function CommentTitle({ user, postedOn, score }) {
	const handleReply = () => {
		console.log('Clicked Reply');
	};
	return (
		<div className="comment-title">
			<div className="info">
				<img src={user.image.webp} alt="Profile Picture" />
				<div>{user.username}</div>
				<div className="status">{postedOn}</div>
			</div>
			<button className="reply">
				<img src={reply} alt="Reply" /> Reply
			</button>
		</div>
	);
}

export default CommentTitle;
