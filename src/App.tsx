import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';

import routes from './routes';
import store from './store';

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider locale={locale}>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
