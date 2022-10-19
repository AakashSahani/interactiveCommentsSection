import Comment from './Comment';

function Reply({ replies }) {
	if (replies === undefined) {
		return <></>;
	} else {
		return replies.map((reply) => (
			<div key={replies.indexOf(reply)}>
				<Comment comment={reply} />
			</div>
		));
	}
}

export default Reply;
