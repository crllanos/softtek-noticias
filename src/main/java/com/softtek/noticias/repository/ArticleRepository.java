package com.softtek.noticias.repository;

import com.softtek.noticias.entity.ArticleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ArticleRepository extends CrudRepository<ArticleEntity, UUID> {


}