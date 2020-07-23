import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './components/header';
import Search from './components/search';

const App = () => (
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Header />
    <Search />
  </Container>
);

export default App;
