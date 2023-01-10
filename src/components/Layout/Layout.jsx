import { AppBar } from 'components/AppBar/AppBar.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AsideBox } from '../Layout/Layout.styled.jsx';

export const Layout = () => {
  return (
    <>
      <AsideBox>
        <AppBar />
        <Suspense>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </AsideBox>
    </>
  );
};
