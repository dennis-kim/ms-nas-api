package com.ms.nas.api.direcotry.controller;

import com.ms.nas.api.direcotry.service.DirectoryService;
import com.ms.nas.api.direcotry.vo.DirectoryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DirectoryController {

    @Autowired
    private DirectoryService directoryService;

    @GetMapping("/directories")
    public List<DirectoryVO> getDirectories() {
        return directoryService.getDirectories();
    }
}