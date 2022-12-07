import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './RootReducer'


const store = configureStore({
  reducer: rootReducer,
  middleware :(getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store
