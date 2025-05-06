import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PostsList from './pages/PostsList';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/PostPage';

const App: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Navigate to="/posts" replace />} />
			<Route path="/posts" element={<PostsList />} />
			<Route path="/posts/new" element={<NewPostPage />} />
			<Route path="/posts/:id" element={<PostPage />} />
		</Routes>
	</Router>
);

export default App;