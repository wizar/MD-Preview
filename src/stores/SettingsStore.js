import EventEmmiter from 'events';
import AppDispatcher from '../Dispatcher';

class SettingsStore extends EventEmmiter {
    constructor() { 
        super();
        this.size = null;
        this.layout = 'vertical';
    }

    getSize() {
        return this.size;
    }

    getLayout() {
        return this.layout;
    }

    onAction(action) {
        switch (action.type) {
            case 'RESIZE': {
                console.log('Action resize', action.payload);
                this.size = action.payload;
                this.emit('change');
                break;
            }
            case 'SWITCH_LAYOUT': {
                if (this.layout === 'vertical') {
                    this.layout = 'horizontal';
                } else {
                    this.layout = 'vertical';
                }

                this.emit('change');
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