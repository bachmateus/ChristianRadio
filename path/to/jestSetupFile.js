// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);