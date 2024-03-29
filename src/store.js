import {configureStore} from '@reduxjs/toolkit';
import {persistStore,
     persistReducer,
     FLUSH,
     REHYDRATE,
     PERSIST,
     PURGE,
     REGISTER
    } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';

import { filterReducer } from 'features/filter/filter-slice';
import { positionReducer } from 'features/positions/position-slice';

const rootReducer = combineReducers({
    filters: filterReducer,
    positions: positionReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [
                FLUSH,
                REHYDRATE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
});

export const persistor = persistStore(store);