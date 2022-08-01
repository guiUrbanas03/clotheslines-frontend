import React, { FC } from 'react';
import { ProtectedProps } from './Protected.types';
import { observer } from 'mobx-react';

const Protected: FC<ProtectedProps> = observer(
  ({ children, fallback = null, renderIf }) => {
    if (!renderIf) {
      return <>{fallback}</>;
    }

    return <>{children}</>;
  },
);

export default Protected;
