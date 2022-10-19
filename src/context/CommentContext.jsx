import { createContext } from 'react';
import { useState } from 'react';
import CommentData from '../data/CommentData';

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
	const [comment, setComment] = useState(CommentData);

	return (
		<CommentContext.Provider value={{ comment, setComment }}>
			{children}
		</CommentContext.Provider>
	);
};

export default CommentContext;
