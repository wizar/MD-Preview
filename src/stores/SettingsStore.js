import EventEmmiter from 'events';
import AppDispatcher from '../Dispatcher';

class SettingsStore extends EventEmmiter {
    constructor() { 
        super();
        this.size = null;
    }

    getSize() {
        return this.size;
    }

    onAction(action) {
        switch (action.type) {
            case 'RESIZE': {
                console.log('Action resize', action.payload);
                this.size = action.payload;
                this.emit('change');
                break;
            }
            default: {
                console.error('Unexcepted action!', action);
            }
        }
    }
}

const settingsStore = new SettingsStore();

AppDispatcher.register(settingsStore.onAction.bind(settingsStore));

export default settingsStore;