import api from './api';

export interface Post {
	id: number;
	title: string;
	content: string;
}

// GET /posts
export const getAllEntities = async (): Promise<Post[]> => {
	const { data } = await api.get<Post[]>('/posts');
	return data;
};

// GET /posts/:id
export const getEntityById = async (id: number): Promise<Post> => {
	const { data } = await api.get<Post>(`/posts/${id}`);
	return data;
};

// POST /posts
export const createEntity = async (
	body: Omit<Post, 'id'>
): Promise<Post> => {
	const { data } = await api.post<Post>('/posts', body);
	return data;
};

// PUT /posts/:id
export const updateEntity = async (
	id: number,
	body: Omit<Post, 'id'>
): Promise<Post> => {
	const { data } = await api.put<Post>(`/posts/${id}`, body);
	return data;
};

// DELETE /posts/:id
export const deleteEntity = async (id: number): Promise<void> => {
	await api.delete(`/posts/${id}`);
};