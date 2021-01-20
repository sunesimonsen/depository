import { useState, useLayoutEffect } from "preact/hooks";
import { useStore, useObservable } from "@depository/preact/hooks";

const inactiveConfirmation = { isVisible: false };

export const usePrompt = (pathOrComputed) => {
  const isActive = useObservable(pathOrComputed);
  const store = useStore();

  const [confirmation, setConfirmation] = useState(inactiveConfirmation);

  useLayoutEffect(() => {
    if (isActive) {
      const unblock = store.router.block((tx) => {
        const state = tx.location.state;
        if (state && state.skipPrompt) {
          unblock();
          tx.retry();
        } else {
          setConfirmation({
            isVisible: true,
            reject: () => {
              setConfirmation(inactiveConfirmation);
            },
            approve: () => {
              unblock();
              tx.retry();
              setConfirmation(inactiveConfirmation);
            },
          });
        }
      });

      setConfirmation(inactiveConfirmation);

      return () => {
        unblock();
      };
    } else {
      setConfirmation(inactiveConfirmation);
    }
  }, [store, isActive]);

  return confirmation;
};
