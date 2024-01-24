```javascript
import axios from 'axios';
import { postsSlice } from '../redux/slices/postsSlice';

const { actions } = postsSlice;

export const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchPostsStart());
  try {
    const response = await axios.get('/api/posts');
    dispatch(actions.fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchPostsFailure(error.message));
  }
};

export const createPost = (post) => async dispatch => {
  dispatch(actions.createPostStart());
  try {
    const response = await axios.post('/api/posts', post);
    dispatch(actions.createPostSuccess(response.data));
  } catch (error) {
    dispatch(actions.createPostFailure(error.message));
  }
};

export const updatePost = (id, post) => async dispatch => {
  dispatch(actions.updatePostStart());
  try {
    const response = await axios.put(`/api/posts/${id}`, post);
    dispatch(actions.updatePostSuccess(response.data));
  } catch (error) {
    dispatch(actions.updatePostFailure(error.message));
  }
};

export const deletePost = (id) => async dispatch => {
  dispatch(actions.deletePostStart());
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch(actions.deletePostSuccess(id));
  } catch (error) {
    dispatch(actions.deletePostFailure(error.message));
  }
};
```