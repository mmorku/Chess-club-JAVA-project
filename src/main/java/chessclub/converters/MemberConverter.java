package src.main.java.chessclub.converters;

import src.main.java.chessclub.dto.AddMemberDTO;
import src.main.java.chessclub.dto.EditMemberDTO;
import src.main.java.chessclub.dto.MemberDTO;
import src.main.java.chessclub.entities.Member;

import java.util.ArrayList;
import java.util.List;

public abstract class MemberConverter {

    public static Member convertEditMemberDtoToEntity(EditMemberDTO memberDTO){
        Member member = null;
        if (memberDTO != null){
            member = new Member();
            member.setName(memberDTO.getName());
            member.setLastName(memberDTO.getLastName());
            member.setEmail(memberDTO.getEmail());
            member.setPersonalCode(memberDTO.getPersonalCode());
            member.setChessCareerStartDate(memberDTO.getChessCareerStartDate());
        }
        return member;
    }
    public static Member convertAddMemberDtoToEntity(AddMemberDTO memberDTO){
        Member member = null;
        if (memberDTO != null){
            member = new Member();
            member.setName(memberDTO.getName());
            member.setLastName(memberDTO.getLastName());
            member.setEmail(memberDTO.getEmail());
            member.setPersonalCode(memberDTO.getPersonalCode());
            member.setChessCareerStartDate(memberDTO.getChessCareerStartDate());
        }
        return member;
    }
    public static MemberDTO convertMemberEntityToDto(Member member){
        MemberDTO memberDTO = null;
        if (member != null){
            memberDTO = new MemberDTO();
            memberDTO.setName(member.getName());
            memberDTO.setLastName(member.getLastName());
            memberDTO.setEmail(member.getEmail());
            memberDTO.setPersonalCode(member.getPersonalCode());
            memberDTO.setChessCareerStartDate(member.getChessCareerStartDate());
        }
        return memberDTO;
    }

    public static List<MemberDTO> convertMemberEntityListToDto(List<Member> memberList){
        List<MemberDTO> memberDTOList = null;
        for (Member m: memberList) {
            if (memberDTOList == null){
                memberDTOList = new ArrayList<>();
            }
            memberDTOList.add(MemberConverter.convertMemberEntityToDto(m));
        }
        return memberDTOList;
    }
}
