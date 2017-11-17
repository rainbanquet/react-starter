import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./Test2.js')
});

