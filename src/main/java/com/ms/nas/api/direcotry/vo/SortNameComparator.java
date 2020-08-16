package com.ms.nas.api.direcotry.vo;

import java.util.Comparator;

public class SortNameComparator implements Comparator {

    @Override
    public int compare(Object o1, Object o2) {
        String name1 = ((DirectoryVO)o1).getDirName();
        String name2 = ((DirectoryVO)o2).getDirName();
        //return name2.compareTo(name1); // DESC
        return name1.compareTo(name2); // ASC
    }
}
