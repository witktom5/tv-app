// React 18 Strict mode makes use effect run twice,
// workaround from https://dev.to/ag-grid/react-18-avoiding-use-effect-getting-called-twice-4i9e

import { useEffect, useRef } from 'react';

export const useEffectOnce = (effect) => {
  const destroyFunc = useRef();
  const calledOnce = useRef(false);
  const renderAfterCalled = useRef(false);

  if (calledOnce.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    calledOnce.current = true;
    destroyFunc.current = effect();

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }

      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, [effect]);
};
