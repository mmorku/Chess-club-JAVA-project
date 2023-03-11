package src.main.java.chessclub.repositories;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import src.main.java.chessclub.entities.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

    // -------------------------------------------------------------------------------------------
    // Suranda pirma pagal varda
    Member findFirstByName(String name);

    // -------------------------------------------------------------------------------------------
    // Apskaiciuoja kieki su nurodytu vardu
    int countByName(String name);
    // -------------------------------------------------------------------------------------------
    // Istrina visus pagal varda
    @Transactional
    void deleteAllByName(String name);
    // -------------------------------------------------------------------------------------------

}
