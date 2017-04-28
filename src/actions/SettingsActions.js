import AppDispatcher from '../Dispatcher';

export function resize(newSize) {
    AppDispatcher.dispatch({
        type: 'RESIZE',
        payload: newSize
    });
}