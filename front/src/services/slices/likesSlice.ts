import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addLike, deleteLikeById, getLikes } from '../../utils/api';
import { TLike } from '../../types/types';

type TLikesState = {
  likesRequest: boolean;
  successedLike: any;
  likesData: TLike[],
};

const initialState: TLikesState = {
  likesRequest: false,
  successedLike: null,
  likesData: [],
};

export const getLikesThunk = createAsyncThunk(
  'likes/getLikes',
  async () => await getLikes(),
);

export const addLikeThunk = createAsyncThunk(
  'likes/addLike',
  async (data: TLike) => await addLike(data),
);

export const deleteLikeThunk = createAsyncThunk(
  'likes/deleteLike',
  async (id: string) => await deleteLikeById(id),
);

export const likesSlise = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setLikeState: (state, action) => state.likesData = action.payload,
  },
  selectors: {
    getLikesSelector: (state: TLikesState) => state.likesData,
    getLikesRequestSelector: (state: TLikesState) => state.likesRequest,
  },
  extraReducers(builder) {
      builder
        .addCase(getLikesThunk.pending, (state) => {
          state.likesRequest = true;
        })
        .addCase(getLikesThunk.fulfilled, (state, action) => {
          state.likesRequest = false;
          state.likesData = action.payload;
        })
        .addCase(getLikesThunk.rejected, (state) => {
          state.likesRequest = false;
        });

      builder
        .addCase(addLikeThunk.pending, (state) => {
          state.likesRequest = true;
        })
        .addCase(addLikeThunk.fulfilled, (state, action) => {
          state.likesRequest = false;
          state.successedLike = action.payload;
          state.likesData = [...state.likesData, action.payload];
        })
        .addCase(addLikeThunk.rejected, (state) => {
          state.likesRequest = false;
        });

      builder
        .addCase(deleteLikeThunk.pending, (state) => {
          state.likesRequest = true;
        })
        .addCase(deleteLikeThunk.fulfilled, (state, action) => {
          state.likesRequest = false;
          state.successedLike = action.payload;
          const newData = state.likesData.filter(item => item.cat_id !== action.meta.arg);
          state.likesData = [...newData];
        })
        .addCase(deleteLikeThunk.rejected, (state) => {
          state.likesRequest = false;
        })
  },
});

export const { getLikesSelector, getLikesRequestSelector } = likesSlise.selectors;
