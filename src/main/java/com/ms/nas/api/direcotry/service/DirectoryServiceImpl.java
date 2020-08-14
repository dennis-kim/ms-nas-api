package com.ms.nas.api.direcotry.service;

import com.ms.nas.api.direcotry.vo.DirectoryVO;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class DirectoryServiceImpl implements DirectoryService{

    private final String BASE_PATH = "d:/directory/";// volume 위치가 될곳

    private final String MOVIE = "movie";
    private final int lastDepthForMovie = 3;


    private final String VARIETY = "예능";




    @Override
    public List<DirectoryVO> getDirectories() {
        List<DirectoryVO> list = new ArrayList<>();
        list.add(getUnderDirectories());

        return list;
    }

    private DirectoryVO getUnderDirectories() {
        return this.getDirectoryVO();
    }

    private DirectoryVO getDirectoryVO() {
        DirectoryVO movieVO = new DirectoryVO();
        String moviePath = BASE_PATH + MOVIE;
        movieVO.setDirName(MOVIE);
        movieVO.setDirPath(moviePath);
        movieVO.setChild(this.getChild(new File(moviePath)));
        return movieVO;
    }


    private List<DirectoryVO> getChild(File file) {
        List<DirectoryVO> childVO = new ArrayList<>();

        if(file.isDirectory()) {
            for(File child : file.listFiles()) {
                DirectoryVO vo = new DirectoryVO();
                vo.setDirName(child.getName());
                vo.setDirPath(child.getPath());
                vo.setChild(getChild(child));
                childVO.add(vo);
            }
        }

        return childVO;
    }








}
