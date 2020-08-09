import React from 'react';
import SearchScreen from '../SearchScreen/SearchScreen';
import Tree from '../../component/Tree/Tree';

export default function TreeListScreen() {
    return (
        <div style={{ padding: '10px' }}>
            <SearchScreen />
            <Tree />
        </div>
    )
}