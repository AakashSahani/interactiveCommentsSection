import { createContext } from 'react';
import { useState } from 'react';
import CommentData from '../data/CommentData';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
	const [comments, setComments] = useState(CommentData);
	const sayHello = () => {
		console.log(comments);
	};
	return (
		<CommentContext.Provider value={{ sayHello }}>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContext;
