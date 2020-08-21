import { createStore, createHook } from 'react-sweet-state';
 
const Store = createStore({
  // value of the store on initialisation
  initialState: {
    segments: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
    },
  },
  // actions that trigger store mutation
  actions: {
    pickSegment: (segment) => ({ setState, getState }) => {
      // mutate state synchronously
      const segments = getState().segments;
      segments[segment.num] = { pic: segment.pic, version: segment.version };
      setState({segments});
    },
  },
  // optional, mostly used for easy debugging
  name: 'mashupSegments',
});
 
//const CounterSubscriber = createSubscriber(Store);
// or
export const mashupSegments = createHook(Store);