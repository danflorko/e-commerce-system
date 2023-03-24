import { all } from "redux-saga/effects";
import { getPostsWatcher } from "./products";

export default function* rootWatcher() {
  // This line runs all the sagas in parallel
  yield all([getPostsWatcher()]);
}