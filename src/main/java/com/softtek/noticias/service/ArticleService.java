package com.softtek.noticias.service;

import com.softtek.noticias.entity.ArticleEntity;

import java.util.List;
import java.util.UUID;

public interface ArticleService {
    ArticleEntity createArticle(ArticleEntity article);
    ArticleEntity readArticle(UUID id);
    List<ArticleEntity> readArticleList();
    ArticleEntity updateArticle(UUID id, ArticleEntity article);
    void deleteArticle(UUID id);
}
