import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllEntities, Post } from '../api/posts';

const PostsList: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [error, setError] = useState<string | null>(null);

	const load = async () => {
		setError(null);
		try {
			const data = await getAllEntities();
			console.log('Получили из API:', data);
			if (!Array.isArray(data)) {
				throw new Error('API вернул не массив');
			}
			setPosts(data);
		} catch (err: any) {
			console.error(err);
			setError(err.message);
		}
	};

	useEffect(() => {
		load();
	}, []);

	if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
	if (!Array.isArray(posts))
		return <div>Неправильный формат данных: {JSON.stringify(posts)}</div>;

	return (
		<div>
			<h1>Посты</h1>
			<Link to="/posts/new">Создать новый</Link>
			<ul>
				{posts.map(p => (
					<li key={p.id}>
						<Link to={`/posts/${p.id}`}>{p.title}</Link>{' '}
						<button onClick={() => {/* ... */}}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsList;