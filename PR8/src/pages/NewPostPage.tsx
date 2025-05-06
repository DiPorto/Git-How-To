import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEntity } from '../api/posts';

const NewPostPage: React.FC = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();

	const handleCreate = async () => {
		if (!title.trim()) { alert('Title обов’язкове'); return; }
		await createEntity({ title, content });
		navigate('/posts');
	};

	return (
		<div>
			<h1>Створити новий пост</h1>
			<div>
				<label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
			</div>
			<div>
				<label>Content:</label><br />
				<textarea value={content} onChange={e => setContent(e.target.value)} />
			</div>
			<button onClick={handleCreate}>Create</button>
		</div>
	);
};

export default NewPostPage;