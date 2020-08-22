import React, { useState, useEffect } from 'react';
import SearchScreen from './container/SearchScreen/SearchScreen';
import List from './container/ListScreen/ListScreen';
import Tree from './container/TreeListScreen/TreeListScreen';
import api from './api';

function App() {
  const [action, setAction] = useState('update');
  const [actionName, setActionName] = useState('업데이트');
  const [searchWord, setSearchWord] = useState('');
  const [tree, setTree] = useState([]);
  const [contents, setContents] = useState([]);


  useEffect( () => {
    api.getDirectories()
        .then((response) => {
          setTree(response.data);
        })
        .catch((e) => {
        })
        .finally(function () {
        })
  }, [])

  useEffect( () => {
    api.getContents()
          .then((response) => {
            setContents(response.data);
          })
          .catch((e) => {
          })
          .finally(function () {
          })
  }, [])  

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
        return <Tree treeData={tree} />
    
      default:
        return <List contentsData={contents}/>
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
