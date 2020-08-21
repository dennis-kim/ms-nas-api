import React, { useState } from 'react';
import SearchScreen from './container/SearchScreen/SearchScreen';
import List from './container/ListScreen/ListScreen';
import Tree from './container/TreeListScreen/TreeListScreen';

function App() {
  const [action, setAction] = useState('update');
  const [actionName, setActionName] = useState('업데이트');
  const [searchWord, setSearchWord] = useState('');


  // Listner
  const handlerListClick = () => {
    if(action === 'update') {
      setAction('list')
      setActionName('전체');
    }else {
      setAction('update');
      setActionName('업데이트')
    }
  }

  const handlerTextFieldChange = (value) => {
    if(value.length <= 15) {
      setSearchWord(value);
    }
  }
  const handlerEnter = () => {
    alert('검색');
  }

  const switchScreen = () => {
    switch (action) {
      case 'update':
        return <Tree />
    
      default:
        return <List />
    }
  }
  return (
    <>
      <div>
        <SearchScreen 
          actionName={actionName} 
          searchWord={searchWord} 
          handlerEnter={handlerEnter} 
          handlerTextFieldChange={handlerTextFieldChange} 
          handlerListClick={handlerListClick} 
        />
      </div>
      <div>
        { switchScreen() }
      </div>
    </>
  );
}

export default App;
