import Rating from './components/Rating';
import Comment from './components/Comment';
import { CommentProvider } from './context/CommentContext';

function App() {
	return (
		<CommentProvider>
			<div className="container">
				<Rating />
				<Comment />
			</div>
		</CommentProvider>
	);
}

export default App;
