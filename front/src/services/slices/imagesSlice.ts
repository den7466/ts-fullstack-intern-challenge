import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TImage } from '../../types/types';
import { getImages } from '../../utils/api';

type TImagesState = {
  imagesRequest: boolean;
  imagesData: TImage[],
};

const initialState: TImagesState = {
  imagesRequest: false,
  imagesData: [],
};

export const getImagesThunk = createAsyncThunk(
  'images/getImages',
  async () => await getImages(0, 25),
);

export const imagesSlise = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  selectors: {
    getImagesSelector: (state: TImagesState) => state.imagesData,
  },
  extraReducers(builder) {
    builder
      .addCase(getImagesThunk.pending, (state) => {
        state.imagesRequest = true;
      })
      .addCase(getImagesThunk.fulfilled, (state, action) => {
        state.imagesRequest = false;
        state.imagesData = action.payload;
      })
      .addCase(getImagesThunk.rejected, (state) => {
        state.imagesRequest = false;
      });
  },
});

export const { getImagesSelector } = imagesSlise.selectors;
