import React from 'react';
import CounterWuthCustomHook from './01-useState/CounterWuthCustomHook';
import SimpleForm from './02-useEffect/SimpleForm';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook';
import MultipleCustomHook from './03-examples/MultipleCustomHook';
import FocusSecreen from './04-useRef/FocusSecreen';
import Layout from './05-useLayaoutEffect/Layout';
import Memorise from './06-memos/Memorise';
import MemoHook from './06-memos/MemoHook';
import CallbackHook from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
//import CounterApp from './01-useState/CounterApp';

import '../src/08-useReducer/intro-reducer'
import TodoApp from './08-useReducer/TodoApp';
import MainApp from './09-useContext/MainApp';
import { UserProvider } from './09-useContext/context/UserProvider';

const HooksApp = () => {

    
    return (
        <UserProvider>
        <div className='container'>
          {/* <CounterApp/> */}
          {/* <CounterWuthCustomHook/> */}
          {/* <SimpleForm/> */}
          {/* <FormWithCustomHook/> */}
          {/* <MultipleCustomHook/> */}
          {/* <FocusSecreen/> */}
          {/* <Layout/> */}
          {/* <Memorise/> */}
          {/* <MemoHook/> */}
          {/* <CallbackHook/> */}
          {/* <Padre/> */}
          <TodoApp/>
          {/* <MainApp/> */}
        </div>
        </UserProvider>
    );
}

export default HooksApp;



