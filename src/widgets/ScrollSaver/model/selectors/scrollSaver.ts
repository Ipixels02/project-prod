import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSaverScroll = (state: StateSchema) => state.scrollSaver.scroll;

export const getUIScrollByPath = createSelector(
    getScrollSaverScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
);
