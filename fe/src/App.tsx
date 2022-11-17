import { Header } from './components/Header';
import { Orders } from './components/Orders';

import { GlobalStyles } from './styles/globalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}

