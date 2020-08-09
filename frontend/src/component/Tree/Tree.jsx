import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

export default function Tree() {

    const list = {
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
    let nodeId = 0;

    const createList = (data) => {
        return (
            <>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem nodeId={nodeId++} label={data.name} >
                        {
                            data.child.map((
                                (item) =>
                                    <TreeItem nodeId={nodeId++} label={item.name}>
                                        {
                                            item.child ? 
                                            item.child.map((
                                                (item) =>
                                                    <TreeItem nodeId={nodeId++} label={item.name}>
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
            { createList(list.movie) }
            { createList(list.veriety) }
            { createList(list.comix) }
        </>
    )

}