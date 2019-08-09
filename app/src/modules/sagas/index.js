import { all, fork } from 'redux-saga/effects';
import kittens from './kittens';

const sagas = [
  kittens,
];

export default function* mainSaga() {
  yield all(sagas.map((saga) => fork(saga)))
}
