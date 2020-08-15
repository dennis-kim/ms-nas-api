package com.ms.nas.api.direcotry.service;

import com.ms.nas.api.direcotry.vo.DirectoryVO;
import org.springframework.stereotype.Service;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DirectoryServiceImpl implements DirectoryService{

    //private final String BASE_PATH1 = "d:/directory/";// volume 위치가 될곳
    //private final String BASE_PATH2 = "d:/directory/";// volume 위치가 될곳

    private final String BASE_PATH1 = "/volume1/";// volume 위치가 될곳
    private final String BASE_PATH2 = "/volume2/";// volume 위치가 될곳

    private final String COMIX = BASE_PATH1 + "만화책";
    private final String DRAMA = BASE_PATH1 + "drama";
    private final String DOCUMENTARY = BASE_PATH1 + "documentary";
    private final String ANIMATION = BASE_PATH1 + "animation";

    private final String MOVIE = BASE_PATH2 + "movie";
    private final String VARIETY = BASE_PATH2 + "예능";

    private String[] mainDirectories = { MOVIE, VARIETY, COMIX, DRAMA, DOCUMENTARY, ANIMATION };

    private final String pattern = "yyyy-MM-dd hh:mm aa";
    private SimpleDateFormat simpleDateFormat;

    private final String[] exceptDirectories = {"@eaDir", ".DS_Store"};   // 제외 디렉토리

    @Override
    public List<DirectoryVO> getDirectories() {
        if(simpleDateFormat == null) {
            simpleDateFormat = new SimpleDateFormat(pattern);
        }

        List<DirectoryVO> list = new ArrayList<>();
        for(String path : mainDirectories) {
            DirectoryVO vo = getUnderDirectories(path);
            if(vo != null) {
                list.add(vo);
            }
        }

        return list;
    }

    private DirectoryVO getUnderDirectories(String path) {
        return this.getDirectoryVO(path);
    }

    private DirectoryVO getDirectoryVO(String path) {
        DirectoryVO vo;
        File directory = new File(path);
        if(directory.isDirectory() && this.isTargetDirectory(directory.getName())) {
            vo = new DirectoryVO();
            vo.setDirName(directory.getName());
            vo.setDirPath(path);
            vo.setUpdateDate(getUpdateDate(directory.lastModified()));
            vo.setChild(this.getChild(directory));
            return vo;
        }
        return null;
    }

    private List<DirectoryVO> getChild(File file) {
        List<DirectoryVO> childVO = new ArrayList<>();

        if(file.isDirectory()) {
            for(File child : file.listFiles()) {
                if(this.isTargetDirectory(child.getName())) {
                    DirectoryVO vo = new DirectoryVO();
                    vo.setDirName(child.getName());
                    vo.setDirPath(child.getPath());
                    vo.setUpdateDate(getUpdateDate(child.lastModified()));
                    vo.setChild(getChild(child));
                    childVO.add(vo);
                }
            }
        }
        return childVO;
    }

    /**
     * 디렉토리 마지막 수정시간 조회
     * @param lastModified ( File(path).lastModified() )
     * @return
     */
    private String getUpdateDate(long lastModified) {
        Date lastModifiedDate = new Date( lastModified );
        String updateDate = simpleDateFormat.format(lastModifiedDate);
        return updateDate;
    }

    /**
     * 대상 디렉토리 인지 체크
     * exceptDirectories 항목에 있는 디렉토리는 표시하지 않음.
     * @param directoryName
     * @return true : 사용가능 디렉토리
     *         false : 제외 디렉토리
     */
    private boolean isTargetDirectory(String directoryName) {
        for(String except : exceptDirectories) {
            if(except.equals(directoryName)) {
                return false;
            }
        }
        return true;
    }

}
