import Box from "./components/Box";
import BouncingCircle from "./components/BouncingCircle";
import SpinningIcon from "./components/SpinningIcon";
import SkewRectangle from "./components/SkewRectangle";
import ComplexAnimation from "./components/ComplexAnimation";
import SequentialBoxes from "./components/SequentialBoxes";

const App = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#0d1017]">
      <Box />
      <BouncingCircle />
      <SpinningIcon />
      <SkewRectangle />
      <ComplexAnimation />
      <SequentialBoxes />
    </section>
  );
};

export default App;
