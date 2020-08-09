package com.ms.nas.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello(){

        File file = new File("/volume1/animation");
        System.err.println(file.isDirectory());

        return "/volume1/animation 디렉토리 체크 : " + file.isDirectory();
    }
}