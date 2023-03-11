package src.main.java.chessclub.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@Getter
@Setter
public class MemberDTO {
    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String sex;
    private String experience;
}
