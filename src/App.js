
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Leyout/Main/Main';
import Error from './Leyout/Error/Error';
import Home from './Components/Home/Home';
import QuizTopics from './Components/QuizTopics/QuizTopics';


function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/home',
      loader: async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
      },
       element:<Home></Home>},
       {
        path:'/quiz/:id',
        loader: async({params})=>{
          // console.log(params.id);
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<QuizTopics></QuizTopics>
       },
      {path:'/service', element:<div>service</div>},
      {path:'/order', element:<div>order</div>}
    ]},
    {path:'*', element:<Error></Error>}
  ])
  return (
    <div className="App">
       <div>
       
       </div>
     
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
