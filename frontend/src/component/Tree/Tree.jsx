import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const Tree = () => {
    let nodeId = 0;

    const data = [
        {
           dirName:"movie",
           dirPath:"d:/directory/movie",
           child:[
              {
                 dirName:"2020",
                 dirPath:"d:\\directory\\movie\\2020",
                 child:[
                    {
                       dirName:"살아있다 _2020",
                       dirPath:"d:\\directory\\movie\\2020\\살아있다 _2020",
                       child:[
     
                       ]
                    }
                 ]
              },
              {
                 dirName:"[시리즈]마블",
                 dirPath:"d:\\directory\\movie\\[시리즈]마블",
                 child:[
     
                 ]
              }
           ]
        }
    ];

    const createItem = (contents) => {
        return (
            <>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                >
                    <TreeItem key={nodeId} nodeId={(nodeId++).toString()} label={contents.dirName} >
                        {
                            createItems(contents)
                        }
                    </TreeItem>
                </TreeView>
            </>
        )
    }

    const createItems = (vo) => {
        return (
            <>
                {
                    vo.child ? 
                    vo.child.map((
                        (item) =>
                            <TreeItem key={nodeId} nodeId={(nodeId++).toString()} label={item.dirName}>
                                {
                                    createItems(item)
                                }
                            </TreeItem>
                        )
                    ) : <></>
                }
            </>
        )
    }

    return (
        <>
            { data.map((item) => createItem(item)) }
        </>
    )

}

export default Tree;