import React from 'react';
import useGlobal from '../../store';

export default Component => (

  function WrappedComponent(props) {

    const [
      globalState,
      globalActions,
    ] = useGlobal();

    return (
      <Component
        {...props}
        state={globalState}
        actions={globalActions}
      />
    );
  }
);
