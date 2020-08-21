import React, { useEffect, useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import api from '../../api';

const Tree = () => {
    const [data, setData] = useState([]);

    let nodeId = 0;

    useEffect( () => {
        api.getDirectories()
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(function () {
                console.log("finally");
            })

    }, [])

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