import createStore from './createStore';
import reducer from './reducers';
import saga from './sagas';

export default createStore(reducer, saga, []);