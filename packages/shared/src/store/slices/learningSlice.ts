import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lesson, UserProgress } from '../../types/learning';

interface LearningState {
  currentLesson: Lesson | null;
  userProgress: UserProgress | null;
  lessons: Lesson[];
  loading: boolean;
}

const initialState: LearningState = {
  currentLesson: null,
  userProgress: null,
  lessons: [],
  loading: false,
};

export const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setCurrentLesson: (state, action: PayloadAction<Lesson>) => {
      state.currentLesson = action.payload;
    },
    setUserProgress: (state, action: PayloadAction<UserProgress>) => {
      state.userProgress = action.payload;
    },
    setLessons: (state, action: PayloadAction<Lesson[]>) => {
      state.lessons = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCurrentLesson, setUserProgress, setLessons, setLoading } = learningSlice.actions;