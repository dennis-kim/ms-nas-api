package com.ms.nas.api.direcotry.service;

import com.ms.nas.api.direcotry.vo.DirectoryVO;
import com.ms.nas.api.direcotry.vo.SortNameComparator;
import com.ms.nas.api.direcotry.vo.SortUpdateComparator;
import org.springframework.stereotype.Service;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class DirectoryServiceImpl implements DirectoryService {

    private final String pattern = "yyyy-MM-dd hh:mm aa";
    private SimpleDateFormat simpleDateFormat;

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

    private String[] mainDirectories = {    // 메인 컨텐츠 path
            MOVIE,
            VARIETY,
            COMIX,
            DRAMA,
            DOCUMENTARY,
            ANIMATION
    };

    private int[][] updateTargetDepth = {   // 업데이트 목록에 표시할 각 컨텐츠의 depth 위치(mainDirectories 와 길이가 같아야함)
            {3},
            {2, 3},
            {3},
            {2},
            {2},
            {3,4}
    };

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

    @Override
    public List<DirectoryVO> getContents() {
        if(simpleDateFormat == null) {
            simpleDateFormat = new SimpleDateFormat(pattern);
        }

        List<DirectoryVO> list = new ArrayList<>();
        for(int i=0; i<mainDirectories.length; i++) {
            String path = mainDirectories[i];
            DirectoryVO contentVO = this.getUnderDirectories(path);

            for(int ii=0; ii<updateTargetDepth[i].length; ii++) {
                this.setContents(list, contentVO, updateTargetDepth[i][ii]);
            }
        }

        Collections.sort(list, new SortUpdateComparator());

        return list;
    }

    /**
     * 트리를 제외한 컨텐츠만을 추출
     * @param data
     * @param vo
     * @param depth 컨텐츠로 사용할 depth
     */
    private void setContents(List<DirectoryVO> data, DirectoryVO vo, int depth) {
        if(vo != null) {
            for(DirectoryVO directoryVO : vo.getChild()) {
                if(directoryVO.getDepth() == depth) {
                    data.add(directoryVO);
                }
                this.setContents(data, directoryVO, depth);
            }
        }
    }

    /**
     * 해당 컨텐츠(path)의 하위 목록 조회
     * @param path
     * @return
     */
    private DirectoryVO getUnderDirectories(String path) {
        DirectoryVO vo;
        File directory = new File(path);
        if(directory.isDirectory() && this.isTargetDirectory(directory.getName())) {
            vo = new DirectoryVO();
            vo.setDirName(directory.getName());
            vo.setDirPath(path);
            vo.setUpdateDate(getUpdateDate(directory.lastModified()));
            vo.setDepth(1);
            vo.setChild(this.getChild(directory, (vo.getDepth() + 1) ));
            return vo;
        }
        return null;
    }

    /**
     * 디렉토르의 하위 디렉토리 리스트 조회
     * @param file
     * @param depth
     * @return
     */
    private List<DirectoryVO> getChild(File file, int depth) {
        List<DirectoryVO> childVO = new ArrayList<>();

        for(File child : file.listFiles()) {
            if(child.isDirectory() && this.isTargetDirectory(child.getName())) {
                DirectoryVO vo = new DirectoryVO();
                vo.setDirName(child.getName());
                vo.setDirPath(child.getPath());
                vo.setUpdateDate(getUpdateDate(child.lastModified()));
                vo.setDepth(depth);
                vo.setChild(this.getChild(child, (depth + 1)));
                Collections.sort(vo.getChild(), new SortNameComparator());
                childVO.add(vo);
            }
        }
        Collections.sort(childVO, new SortNameComparator());
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
