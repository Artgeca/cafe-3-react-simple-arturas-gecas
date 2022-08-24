import { createContext, useMemo, useState } from 'react';

interface DefaultContextInterface {
  index: number,
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

interface Props {
  children: React.ReactNode
}

const defaultContextValues: DefaultContextInterface = {
  index: 1,
  setIndex: () => { },
};

export const ServiceNavigationContext = createContext(defaultContextValues);

const ServiceNavigationProvider = ({ children }: Props) => {
  const [index, setIndex] = useState(1);
  const context = useMemo<DefaultContextInterface>(() => ({
    index,
    setIndex,
  }), [index]);

  return (
    <ServiceNavigationContext.Provider value={context}>
      {children}
    </ServiceNavigationContext.Provider>
  );
};

export default ServiceNavigationProvider;
