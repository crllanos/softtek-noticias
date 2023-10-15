package com.softtek.noticias.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.persistence.EntityNotFoundException;

@Slf4j
@ControllerAdvice
public class SofttekExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<SofttekException> handleEntityNotFoundException(EntityNotFoundException e) {
        log.error(String.format("Not found: %s.", e.getMessage()));
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(SofttekException.builder()
                        .message(e.getMessage())
                        .build());
    }


    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<SofttekException> handleIllegalArgumentException(IllegalArgumentException e) {
        log.error(String.format("Bad request: %s.", e.getMessage()));
        return ResponseEntity.badRequest().body(SofttekException.builder()
                .message(e.getMessage())
                .build());
    }
}
