package com.softtek.noticias.exception;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SofttekException {
    private String message;
}
