import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/index';
import GlobalTheme from '@/styles/theme';
import TodoManager from '@/views/todoList';

ReactDOM.render(
  <ThemeProvider theme={GlobalTheme}>
    <GlobalStyle />
    <React.StrictMode>
      <TodoManager />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
