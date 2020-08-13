import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const Tree = () => {
    let nodeId = 0;

    const data = {
        movie: {
            name: 'movie',
            child: [
                {
                    name: '2020',
                    child: [
                        {
                            name: '살아있다 _2020'
                        },
                        {   
                            name: '닥터 두리틀 _2020'
                        }
                    ]
                },
                {
                    name: '[시리즈]마블'
                }
            ]
        },
        veriety: {
            name: 'veriety',
            child: [
                {
                    name: '무한도전'
                },
                {
                    name: '런닝맨'
                }                
            ]
        },
        comix: {
            name: 'comix',
            child: [
                {
                    name: '완',
                    child: [
                        {
                            name: '[~72]나루토'
                        }
                    ]
                },
                {
                    name: '미완',
                    child: [
                        {
                            name: '[~89]원피스'
                        }
                    ]
                }            
            ]

        }
    };


    const createList = (contents) => {
        return (
            <>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem key={nodeId} nodeId={(nodeId++).toString()} label={contents.name} >
                        {
                            contents.child.map((
                                (item) =>
                                    <TreeItem key={nodeId} nodeId={(nodeId++).toString()} label={item.name}>
                                        {
                                            item.child ? 
                                            item.child.map((
                                                (item) =>
                                                    <TreeItem key={nodeId} nodeId={(nodeId++).toString()} label={item.name}>
                                                    </TreeItem>
                                            )) : null
                                        }
                                    </TreeItem>
                                )
                            )
                        }
                    </TreeItem>
                </TreeView>
            </>
        )
    }

    return (
        <>
            { createList(data.movie) }
            { createList(data.veriety) }
            { createList(data.comix) }
        </>
    )

}

export default Tree;