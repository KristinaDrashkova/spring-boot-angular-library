package com.kris.library.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author kristina.drashkova
 */
@RestController
public class MainController {

    @RequestMapping("/")
    public String index() {
        return "Hello!";
    }
}
