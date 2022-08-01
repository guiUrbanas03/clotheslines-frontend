import { ReactNode } from 'react';

export type ProtectedProps = {
  children: ReactNode;
  fallback?: ReactNode;
  renderIf: boolean;
};
