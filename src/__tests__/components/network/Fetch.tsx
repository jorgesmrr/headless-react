import { render, waitFor } from "@testing-library/react";
import * as useRequestEffect from "../../../hooks/useRequestEffect";
import Fetch from "../../../components/network/fetch/Fetch";

describe("component renders", () => {
  test("should start fetching", async () => {
    const useRequestSpy = jest.spyOn(useRequestEffect, "useRequestEffect");

    const mockedPromise = jest.fn(
      () => new Promise<void>((resolve) => resolve())
    );

    render(
      <Fetch
        endpoint={mockedPromise}
        dependencies={[]}
        render={() => <div />}
      />
    );
    await waitFor(() => expect(useRequestSpy).toHaveBeenCalled());
  });
});
