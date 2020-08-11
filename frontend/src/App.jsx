import React from 'react';
import SearchScreen from './container/SearchScreen/SearchScreen';
// import TreeListScreen from './container/TreeListScreen/TreeListScreen';
import ListScreen from './container/ListScreen/ListScreen';

function App() {
  
  return (
    <>
      <div>
      <SearchScreen />
      </div>
      <div>
      {/* <TreeListScreen /> */}
      <ListScreen />
      </div>
    </>
  );
}

export default App;
