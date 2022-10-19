import { useContext } from 'react';
import CommentContext from '../context/CommentContext';
import Comment from './Comment';
import Reply from './Reply';

function CommentContainer() {
	const { comment } = useContext(CommentContext);
	return (
		<ul>
			{comment.comments.map((cmt) => (
				<li key={cmt.id}>
					<Comment comment={cmt} />
					<div className="container-reply">
						<Reply replies={cmt.replies} />
					</div>
				</li>
			))}
		</ul>
	);
}

export default CommentContainer;
