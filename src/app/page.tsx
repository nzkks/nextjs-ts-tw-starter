import { ThemeSwitch } from '@/components';

const Home = () => {
  return (
    <>
      <div className="mb-5 bg-primary">
        <p className="text-2xl text-primary-foreground">Hello</p>
        <button className="font-bold">Button</button>
      </div>
      <div className="mb-5 bg-secondary">
        <p className="text-2xl text-secondary-foreground">Hello</p>
        <button className="font-bold">Button</button>
      </div>
      <ThemeSwitch />
    </>
  );
};

export default Home;
