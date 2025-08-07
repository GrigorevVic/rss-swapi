import { createRoutesFromElements, Route } from 'react-router-dom';

import { App } from '../App';
import { PageDetails } from '../pages/details/pageDetails';
import { NotFoundPage } from '../pages/404/notFoundPage';
import { MainPage } from '../pages/main/MainPage';

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="" element={<MainPage />}>
      <Route path="" element={<PageDetails />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);
