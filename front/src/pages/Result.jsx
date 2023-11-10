import { useMyContext } from "../MyContext";

const Result = () => {
  const {result, setResult} = useMyContext()
  return <>
    <h1 style={{textAlign: "center"}}>Your plants' Health Report:</h1>
    {result && result.map(image => <img key={image} src={'data:image/jpeg;base64,' + image} />)}
  </>;
};

export default Result;