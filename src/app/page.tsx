import { ThemeSwitch } from '@/components';

const Home = () => {
  return (
    <main>
      <div className="mb-5">
        <p className="text-primary text-2xl">Hello</p>
        <button className="font-bold">Button</button>
      </div>
      <ThemeSwitch />
    </main>
  );
};

export default Home;
