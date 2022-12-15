import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import TopicDetails from "../Pages/TopicDetails";

export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home>
            },
          
            
            {
                path:'/details/:id',
                element : <TopicDetails ></TopicDetails>,
                loader : () => fetch('./data.json')
            },
         

        ]
       
        
    },
    {path: '*',element: <div>Error 404 !</div>}
])