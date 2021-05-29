import { DependencyList } from "react";
import {
  useRequestEffect,
  UseRequestState,
  RequestEndpoint,
} from "../../../hooks";

interface FetchProps<T> {
  endpoint: RequestEndpoint<T>;
  dependencies?: DependencyList;
  render: (state: UseRequestState<T>) => React.ReactElement;
}

function Fetch<T>({
  endpoint,
  dependencies,
  render,
}: FetchProps<T>): React.ReactElement {
  return render(useRequestEffect(endpoint, dependencies));
}

export default Fetch;
