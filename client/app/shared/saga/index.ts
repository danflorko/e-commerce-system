import { all } from "redux-saga/effects";
import { getPostsWatcher } from "./products";

export default function* rootWatcher() {
  yield all([getPostsWatcher()]);
}
