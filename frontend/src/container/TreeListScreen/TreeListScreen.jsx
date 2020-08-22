import React from 'react';

import Tree from '../../component/Tree/Tree';

export default function TreeListScreen( { treeData } ) {
    return (
        <div style={{ padding: '10px' }}>
            
            <Tree treeData={treeData}/>
        </div>
    )
}