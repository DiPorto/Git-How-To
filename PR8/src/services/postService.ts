export interface Post {
	id: number;
	title: string;
	content: string;
}

let mockPosts: Array<Post> = [
	{ id: 1, title: 'First Post', content: 'This is a sample post.' },
	{ id: 2, title: 'Second Post', content: 'Another one!' }
];

export const getAllEntities = async (): Promise<Array<Post>> => Promise.resolve(mockPosts);


export const getEntityById = async (id: number): Promise<Post | null> => {
	const found = mockPosts.find(p => p.id === id);
	return Promise.resolve(found ?? null);
};

export const createEntity = async (data: Omit<Post, 'id'>): Promise<Post> => {
	const newPost: Post = { id: Date.now(), ...data };
	mockPosts.push(newPost);
	return Promise.resolve(newPost);
};

export const updateEntity = async (id: number, data: Omit<Post, 'id'>): Promise<Post | null> => {
	const post = mockPosts.find(p => p.id === id);
	if (!post) return null;
	const updatedPost: Post = { id: post.id, ...data };
	const index = mockPosts.findIndex(p => p.id === id);
	mockPosts[index] = updatedPost;
	return Promise.resolve(updatedPost);
};

export const deleteEntity = async (id: number): Promise<void> => {
	mockPosts = mockPosts.filter(p => p.id !== id);
	return Promise.resolve();
};