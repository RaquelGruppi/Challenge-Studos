import React from 'react';
import PropTypes from 'prop-types';

import { LightDarkThemeProvider } from './useLightDarkTheme';
import { TasksProvider } from './useTasks';

export const AppProvider = ({ children }) => {
  return (
    <LightDarkThemeProvider>
      <TasksProvider>{children}</TasksProvider>
    </LightDarkThemeProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
