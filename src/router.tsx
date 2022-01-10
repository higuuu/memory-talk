import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { CardHomeTalkCollection,Share,OnlyLike } from './ui-components';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardHomeTalkCollection />} />
        <Route path="/page1" element={<Share />} />
        <Route path="page2/*" element={<OnlyLike />} />
        {/* Not Found */}
        <Route element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;