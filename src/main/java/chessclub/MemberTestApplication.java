package src.main.java.chessclub;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import src.main.java.chessclub.services.MemberService;

@SpringBootApplication
public class MemberTestApplication {
    @Autowired
    private MemberService memberService;

    public static void main(String[] args) {
        SpringApplication.run(MemberTestApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void doSomethingAfterStartup(){
        this.memberService.loadTestData();
        tests();
    }

    public void tests(){
        System.out.println("--------------------------------------");
        System.out.println("TEST: printAllItems");
        this.memberService.printAllMembers();
    }
}
