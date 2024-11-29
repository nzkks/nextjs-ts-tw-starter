import { Button } from '@nextui-org/react';

import { ThemeSwitch } from '@/components';

const Home = () => {
  return (
    <>
      <ThemeSwitch />

      <p className="text-primary-900">Hello</p>
      <Button className="bg-primary-900 font-bold text-primary-100">
        Button
      </Button>
    </>
  );
};

export default Home;
