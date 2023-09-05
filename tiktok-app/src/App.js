// import Home from "~/pages/Home";
// import Following from "~/pages/Following";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import {DefaultLayout} from "./Component/Layout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // khi ko co layout xac dinh thi se lay defaultlayout
            let Layout = DefaultLayout;
            if(route.Layout){
              Layout = route.Layout;
            }else if(route.Layout === null){
              Layout = Fragment;
            }

            const Page = route.component;
            return <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Layout>
                      {<Page/>}
                    </Layout>
                  }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
