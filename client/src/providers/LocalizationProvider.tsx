import React from 'react';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers';

type LocalizationProviderProps = {
  children: React.ReactNode;
};

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  return (
    <MUILocalizationProvider dateAdapter={AdapterMoment}>
      {children}
    </MUILocalizationProvider>
  );
};
