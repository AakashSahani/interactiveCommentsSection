import { CommentProvider } from './context/CommentContext';
import CommentContainer from './components/CommentContainer';
import CurrentUser from './components/CurrentUser';

function App() {
	return (
		<CommentProvider>
			<CommentContainer />
			<CurrentUser />
		</CommentProvider>
	);
}

export default App;
