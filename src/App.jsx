import Container from "react-bootstrap/Container";
import { data } from "./component/Deta";
import DetaCoont from "./component/DetaCoont";
import DetaMaid from "./component/DetaMaid";
import DetaButten from "./component/DetaButten";
import { useState } from "react";

const App = () => {
  const [Data, setData] = useState(data);
  const Delete = () => {
    setData([]);
  };
  const View = () => {
    setData(data);
  };
  console.log(setData);

  return (
    <div className="sakhy">
      <Container>
        <DetaCoont Data={Data} setData={setData} />
        <DetaMaid Data={Data} setData={setData} />
        <DetaButten Delete={Delete} View={View} />
      </Container>
    </div>
  );
};

export default App;
