import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// example of mocking a local object for the test runner:
/*
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
*/

configure({ adapter: new Adapter() });

// Aparently in CRA TS something needs to be exported at the end of the file - although is not throwing any error without it
export default undefined;
