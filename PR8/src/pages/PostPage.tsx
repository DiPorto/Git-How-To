import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEntityById, updateEntity, Post } from '../api/posts';

const PostPage: React.FC = () => {
	const params = useParams<{ id: string }>();
	const id = Number(params.id);
	const navigate = useNavigate();
	const [post, setPost] = useState<Post | null>(null);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	useEffect(() => {
		if (!isNaN(id)) {
			getEntityById(id).then(p => {
				if (p) {
					setPost(p);
					setTitle(p.title);
					setContent(p.content);
				}
			});
		}
	}, [id]);

	const handleSave = async () => {
		if (!title.trim()) { alert('Title обов’язкове'); return; }
		if (post) {
			await updateEntity(id, { title, content });
			navigate('/posts');
		}
	};

	return (
		<div>
			<h1>Редагувати пост</h1>
			<div>
				<label>Title: <input value={title} onChange={e => setTitle(e.target.value)} /></label>
			</div>
			<div>
				<label>Content:</label><br />
				<textarea value={content} onChange={e => setContent(e.target.value)} />
			</div>
			<button onClick={handleSave}>Update</button>
		</div>
	);
};

export default PostPage;