import { Site, Launch} from "./components";

const App = () => {
  let a = 1;
  return (
    <div>
      {a==1 ? <Site /> : <Launch />} 
    </div>
  )
}

export default App