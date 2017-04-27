import EventEmmiter from 'events';
import AppDispatcher from '../Dispatcher';

class TextStore extends EventEmmiter {
  constructor() {
    super();
    this.text = `
# Quam iusto

## Femina o squamis aera festas concutiens advolat

Lorem markdownum tegit hoc quemquam bimembres citharam capillos, arte umbras
pudor terrae! Unum saepe geminata frugis, ad esse adesset redibam: atque.
Totoque nec sucis erat ubi dives lacertos velocis, facienda, limine Dianae
dederat dolentem **dederat Chariclo volucris** grata, sic. Genualia cutem! Nam
me tecta sanguine.

1. Te anno quid velut peracta
2. Novercae habet exit Acesten
3. Populisque timebant
4. Loquor simulacraque ardeat virtutis subit adspirate sacri`;

  this.size = null;

  }

  getText() {
    return this.text;
  }

  getWrapLimit() {
    return this.size;
  }

  onAction(action) {
    switch (action.type) {
      case 'UPDATE': {
        this.text = action.payload;
        this.emit('change');
        break;
      }
      case 'RESIZE': {
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

const textStore = new TextStore();

AppDispatcher.register(textStore.onAction.bind(textStore));

export default textStore;
