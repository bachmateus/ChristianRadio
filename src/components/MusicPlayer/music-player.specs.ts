import React from 'react';
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
// import '@types/jest';
// import App from '../../../App';
import App from "./index";

// jest.mock('redux-persist', () => {
//   const real = jest.requireActual('redux-persist');
//   return {
//     ...real,
//     persistReducer: jest
//       .fn()
//       .mockImplementation((config, reducers) => reducers),
//   };
// });
test("check if player button is shown", () => {
  render(<App/>)
  // const app = renderer.create(<App/>).toJSON();
  // expect(app).toMatchSnapshot();
  
});