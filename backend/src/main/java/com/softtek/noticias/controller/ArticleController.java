package com.softtek.noticias.controller;

import com.softtek.noticias.entity.ArticleEntity;
import com.softtek.noticias.service.ArticleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/v1/articles")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200/")
public class ArticleController {

    private final ArticleService articleService;

    @GetMapping
    public List<ArticleEntity> getTaskList(){
        log.info("[GET] / ");
        List<ArticleEntity> list = articleService.readArticleList();
        log.info(String.format("response: %s", list));
        return list;
    }

    @GetMapping("/{id}")
    public ArticleEntity getTask(@PathVariable UUID id){
        log.info(String.format("[GET] /%s", id));
        ArticleEntity t = articleService.readArticle(id);
        log.info(String.format("response: %s", t));
        return t;
    }

    @PostMapping
    public ArticleEntity createTask(@RequestBody ArticleEntity article){
        log.info(String.format("[POST] / : %s", article));
        ArticleEntity a = articleService.createArticle(article);
        log.info(String.format("response: %s", a));
        return a;
    }

    @PutMapping("/{id}")
    public ArticleEntity editTask(@PathVariable UUID id, @RequestBody ArticleEntity article){
        log.info(String.format("[PUT] /%s : %s", id, article));
        ArticleEntity a = articleService.updateArticle(id, article);
        log.info(String.format("response: %s", a));
        return a;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable UUID id){
        log.info(String.format("[DELETE] /%s", id));
        articleService.deleteArticle(id);
        return ResponseEntity.ok("deleted");
    }
}
