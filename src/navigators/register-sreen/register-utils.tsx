import React, {FC, ComponentType} from 'react';
import {StoreProvider} from '../../state/provider';
import hoistNonReactStatic from 'hoist-non-react-statics';

export const WrappedComponent = (Component: ComponentType<{}>) => {
  return function inject(props: any) {
    const EnhancedComponent: FC = () => (
      <StoreProvider>
        <Component {...props} />
      </StoreProvider>
    );
    hoistNonReactStatic(EnhancedComponent, Component);
    return <EnhancedComponent />;
  };
};
