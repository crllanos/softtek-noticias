package com.softtek.noticias.service.impl;

import com.softtek.noticias.entity.ArticleEntity;
import com.softtek.noticias.repository.ArticleRepository;
import com.softtek.noticias.service.ArticleService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    @Override
    public ArticleEntity createArticle(ArticleEntity article) {
        validateArticle(article);
        return articleRepository.save(article);
    }

    @Override
    public ArticleEntity readArticle(UUID id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("ID %s not found", id)));
    }

    @Override
    public List<ArticleEntity> readArticleList() {
        return StreamSupport.stream(articleRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Override
    public ArticleEntity updateArticle(UUID id, ArticleEntity article) {
        validateArticle(article);
        ArticleEntity a = readArticle(id);
        a.setTitle(article.getTitle());
        a.setSummary(article.getSummary());
        a.setPublishedAt(article.getPublishedAt());
        return articleRepository.save(a);
    }

    @Override
    public void deleteArticle(UUID id) {
        articleRepository.deleteById(id);
    }



    private static void validateArticle(ArticleEntity article) {
        if(StringUtils.isBlank(article.getTitle()) || StringUtils.isBlank(article.getSummary())
                || Objects.isNull(article.getPublishedAt())){
            throw new IllegalArgumentException("Must provide a complete article!");
        }
    }


}
