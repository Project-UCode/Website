import React, { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

import "../styles/styles.css"

function BaseLayout() {

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default BaseLayout;