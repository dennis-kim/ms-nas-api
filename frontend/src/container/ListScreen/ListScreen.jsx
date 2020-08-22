import React from 'react';
import List from '../../component/List/List';

export default function ListScreen( { contentsData } ) {

    return (
        <>
            <List contentsData={contentsData} />
        </>
    )
}