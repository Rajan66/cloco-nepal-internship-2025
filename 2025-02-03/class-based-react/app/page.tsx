import Image from "next/image";
import Counter from "./components/Class/Counter";
import Greeting from "./components/Class/Greeting";
import TimerComponent from "./components/Class/TimerComponent";
import ItemList from "./components/Class/ItemList";

// import Counter from "./components/Counter";

export default function Home() {
  const firstname = "Rajan"
  const lastname = "Maharjan"

  return (
    <div>
      {/* classbased */}
      <Counter />
      {/* <Greeting firstname={firstname} lastname={lastname} /> */}
      {/* <Greeting firstname={firstname} /> */}
      {/* <TimerComponent/> */}
      {/* <ItemList/> */}
      {/* <Counter /> */}
    </div>
  );
}
