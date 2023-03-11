package src.main.java.chessclub.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import src.main.java.chessclub.converters.MemberConverter;
import src.main.java.chessclub.dto.AddMemberDTO;
import src.main.java.chessclub.dto.MemberDTO;
import src.main.java.chessclub.services.MemberService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/member")
public class memberController {
    @Autowired
    private MemberService memberService;

    @GetMapping
    public List<MemberDTO> getAllMembers() {
        return MemberConverter.convertMemberEntityListToDto(this.memberService.getAllMembers());
    }

    @PostMapping
    public void addMember(@RequestBody AddMemberDTO memberDTO) {
        this.memberService.addMember(MemberConverter.convertAddMemberDtoToEntity(memberDTO));
    }

    @DeleteMapping("/{id}")
    public void deleteMemberById(@PathVariable Long id) {
        this.memberService.deleteMemberById(id);
    }

    @GetMapping("/{id}")
    public MemberDTO getMemberById(@PathVariable Long id) {
        return MemberConverter.convertMemberEntityToDto(this.memberService.getMemberById(id));
    }

    @GetMapping("/{id}/name")
    public String getMemberNameById(@PathVariable Long id) {
        return this.memberService.getNameById(id);
    }

}
