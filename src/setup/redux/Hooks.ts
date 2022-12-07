import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from './Store';
import { AppDispatch } from './Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;