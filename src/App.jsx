import { useEffect, useState } from "react";
import { logInRequest, validateJWT } from "./Requests/auth.request";
import { socketConnection } from "./socket/socket-config";

function App() {
  // const [valid, setValid] = useState(false)

  useEffect(() => {
    const logear = async () => {
      const result = await logInRequest({
        email: "port@gmail.com",
        password: "Portillo-10",
      });
      console.log(result);
    };
    logear();
  }, []);

  return <></>;
}

export default App;
