
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Leyout/Main/Main';
import Error from './Leyout/Error/Error';
import Home from './Components/Home/Home';
import QuizTopics from './Components/QuizTopics/QuizTopics';
import Static from './Components/Static/Static';
import Blog from './Components/Blog/Blog';


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
      {path:'/static', element:<Static></Static>},
      {path:'/blog', element:<Blog></Blog>}
    ]},
    {path:'*', element:<Error></Error>}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
