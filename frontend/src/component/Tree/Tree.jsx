import React, { useEffect } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import api from '../../api/directoryApi';
import Axios from 'axios';
import { useState } from 'react';

const Tree = () => {
    const [data, setData] = useState([]);

    let nodeId = 0;

    useEffect( () => {
        console.log(getDirectories());
    }, [])

    const getDirectories = () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
            }
        }
        const data = '';

        Axios.get("/directories")
        .then(response => {
            // response.status 200
            console.log(response)
            setData(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

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