import { useEffect } from "react";
import { render, waitFor } from "@testing-library/react";
import { useRequestEffect } from "../../hooks/useRequestEffect";

const mockedData = {};

const FakeComponent = ({ watcher }: { watcher: jest.Mock<any, any> }) => {
  const mockedPromise = jest.fn(
    () => new Promise((resolve) => resolve(mockedData))
  );

  const useRequestState = useRequestEffect(mockedPromise);

  useEffect(() => watcher(useRequestState), [useRequestState]);

  return <div />;
};

test("should correctly update state", async () => {
  const stateWatcher = jest.fn();

  render(<FakeComponent watcher={stateWatcher} />);
  await waitFor(() => expect(stateWatcher).toHaveBeenCalledTimes(4));

  expect(stateWatcher).toHaveBeenNthCalledWith(1, {
    isLoading: false,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(2, {
    isLoading: true,
    error: false,
    data: undefined,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(3, {
    isLoading: true,
    error: false,
    data: mockedData,
  });

  expect(stateWatcher).toHaveBeenNthCalledWith(4, {
    isLoading: false,
    error: false,
    data: mockedData,
  });
});
