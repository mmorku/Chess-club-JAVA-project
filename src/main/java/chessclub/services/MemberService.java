package src.main.java.chessclub.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import src.main.java.chessclub.entities.Member;
import src.main.java.chessclub.repositories.MemberRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public void addMember(Member member) {
        this.memberRepository.saveAndFlush(member);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public void replaceMemberById(Long id, Member member){
        if (!memberRepository.existsById(id)) {
            return;
        }
        member.setId(id);
        this.memberRepository.saveAndFlush(member);
    }

    public void editMemberById(Long id, Member member){
        Optional<Member> oldMemberOptional = memberRepository.findById(id);
        if (!oldMemberOptional.isPresent()) {
            return;
        }
        Member oldMember = oldMemberOptional.get();

        if (member.getName() != null && !oldMember.getName().equals(member.getName())){
            oldMember.setName(member.getName());
        }
        if (member.getLastName() != null && !oldMember.getLastName().equals(member.getLastName())){
            oldMember.setLastName(member.getLastName());
        }
        if (member.getEmail() != null && !oldMember.getEmail().equals(member.getEmail())){
            oldMember.setEmail(member.getEmail());
        }
        if (member.getPersonalCode() != null && !oldMember.getPersonalCode().equals(member.getPersonalCode())){
            oldMember.setPersonalCode(member.getPersonalCode());
        }
        if (member.getChessCareerStartDate() != null && !oldMember.getChessCareerStartDate().equals(member.getChessCareerStartDate())){
            oldMember.setChessCareerStartDate(member.getChessCareerStartDate());
        }
        memberRepository.saveAndFlush(oldMember);
    }
    public Member getMemberById(Long id) {
        Optional<Member> member = memberRepository.findById(id);

        if (!member.isPresent()) {
            return null;
        }

        return member.get();
    }

    public String getNameById(Long id) {
        Optional<Member> member = memberRepository.findById(id);

        if (!member.isPresent()) {
            return null;
        }

        return member.get().getName();
    }

    private Page<Member> getAllMembersPageable(Pageable pageable) {
        Page<Member> memberPage = memberRepository.findAll(pageable);
        return memberPage;
    }

    private void addTestMembers() {
        for (int i = 0; i < 10; i++) {
            Member member = new Member();
            member.setName("Name-" + i);
            member.setLastName("Last Name-" + i);
            member.setEmail("Email-" + i);
            member.setPersonalCode(1 + i);
            member.setChessCareerStartDate(LocalDate.now());
            this.memberRepository.saveAndFlush(member);
        }
    }

    public void loadTestData() {
        addTestMembers();
    }

    public void printMembersByName(String name) {
        this.memberRepository.saveAndFlush(new Member(1L, "Marija", "Morkunaite", "marijamo@gmail.com", 496030159,
                LocalDate.now()));

        System.out.println("Member found by name: " + this.memberRepository.countByName(name));
        System.out.println(this.memberRepository.findFirstByName(name));
    }

    public void printAllMembers() {
        for (Member m : getAllMembers()) {
            System.out.println(m);
        }
    }

    public void printAllMembersPageable(Pageable pageable) {
        for (Member m : getAllMembersPageable(pageable)) {
            System.out.println(m);
        }
    }
//
//    public void deleteMemberByName(String name) {
//        this.memberRepository.deleteAllByName(name);
//    }

    public void deleteMemberById(Long id) {
        this.memberRepository.deleteById(id);
    }

    public void updateMemberNameById(Long id, String name) {
        Member member = this.memberRepository.findById(id).get();
        member.setName(name);
        this.memberRepository.saveAndFlush(member);
    }

}
