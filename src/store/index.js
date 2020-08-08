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
      console.log(segment.num);
      console.log(segment.pic);
      segments[segment.num] = { pic: segment.pic };
      setState({segments});
      console.log(getState());
    },
  },
  // optional, mostly used for easy debugging
  name: 'mashupSegments',
});
 
//const CounterSubscriber = createSubscriber(Store);
// or
export const mashupSegments = createHook(Store);