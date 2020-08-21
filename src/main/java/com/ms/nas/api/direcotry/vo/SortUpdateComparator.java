package com.ms.nas.api.direcotry.vo;

import java.util.Comparator;

public class SortUpdateComparator implements Comparator {

    @Override
    public int compare(Object o1, Object o2) {
        String update1 = ((DirectoryVO)o1).getUpdateDate();
        String update2 = ((DirectoryVO)o2).getUpdateDate();
        return update2.compareTo(update1); // DESC
        //return name1.compareTo(name2); // ASC
    }
}
