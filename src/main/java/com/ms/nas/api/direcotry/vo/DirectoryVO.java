package com.ms.nas.api.direcotry.vo;

import java.util.List;

public class DirectoryVO {

    private String dirName;
    private String dirPath;
    private String updateDate;
    private int depth;
    private List<DirectoryVO> child;

    public String getDirName() {
        return dirName;
    }

    public void setDirName(String dirName) {
        this.dirName = dirName;
    }

    public String getDirPath() {
        return dirPath;
    }

    public void setDirPath(String dirPath) {
        this.dirPath = dirPath;
    }

    public List<DirectoryVO> getChild() {
        return child;
    }

    public void setChild(List<DirectoryVO> child) {
        this.child = child;
    }

    public String getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(String updateDate) {
        this.updateDate = updateDate;
    }

    public int getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
    }
}
