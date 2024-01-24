```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../services/postService';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await getPosts();
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { entities: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
```