package com.softtek.noticias.service.impl;

import com.softtek.noticias.entity.ArticleEntity;
import com.softtek.noticias.repository.ArticleRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class ArticleServiceImplTest {

    @InjectMocks
    private ArticleServiceImpl articleServiceImpl;

    @Mock
    private ArticleRepository articleRepository;

    private static String mockUUID = "89cd74bb-b1d3-4248-b1fd-64aba2d6c67b";

    @Test
    public void shouldNotSaveArticle_emptyTitle(){
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            articleServiceImpl.createArticle(mockArticle_emptyTitle());
        });
        String expectedMessage = "Must provide a complete article";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    public void shouldNotFindTask_notFound(){
        when(articleRepository.findById(any()))
                .thenThrow(new EntityNotFoundException(String.format("ID %s not found", mockUUID)));

        EntityNotFoundException exception = assertThrows(EntityNotFoundException.class, () -> {
            articleServiceImpl.readArticle(UUID.fromString(mockUUID));
        });
        String expectedMessage = "not found";
        String actualMessage = exception.getMessage();
        assertTrue(actualMessage.contains(expectedMessage));
    }

    @Test
    public void shouldFindTask_Ok(){
        when(articleRepository.findById(any())).thenReturn(Optional.of(mockArticle()));
        assertNotNull(articleServiceImpl.readArticle(UUID.fromString(mockUUID)));
    }




    private ArticleEntity mockArticle() {
        return ArticleEntity.builder()
                .id(UUID.randomUUID())
                .title("title")
                .publishedAt(LocalDate.now())
                .summary("summary")
                .url("http://www.google.com/")
                .build();
    }

    private ArticleEntity mockArticle_emptyTitle() {
        ArticleEntity a = mockArticle();
        a.setTitle(null);
        return a;
    }

}