import { CommentProvider } from './context/CommentContext';
import CommentContainer from './components/CommentContainer';

function App() {
	return (
		<CommentProvider>
			<CommentContainer />
		</CommentProvider>
	);
}

export default App;
