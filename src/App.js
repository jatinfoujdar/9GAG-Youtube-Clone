import { Provider } from "react-redux";
import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
