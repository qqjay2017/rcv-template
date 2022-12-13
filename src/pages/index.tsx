import React from 'react';
import {Outlet} from 'rcv'
function Pages() {
  return (
    <div>
      Pages index
      <Outlet />
    </div>
  );
}

export default Pages;
