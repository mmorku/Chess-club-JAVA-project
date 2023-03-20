import { getMemberByID, patchMember } from "../../commons/requests.js";

const editMemberForm = document
  .getElementById("editMemberForm")
  .querySelector("form");

let oldMemberData;

const loadMemberData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get("id");

  oldMemberData = await getMemberByID(memberId);
  editMemberForm.memberName.value = oldMemberData.name;
  editMemberForm.memberLastname.value = oldMemberData.lastName;
  editMemberForm.memberEmail.value = oldMemberData.email;
  editMemberForm.memberPersonalCode.value = oldMemberData.personalCode;
  editMemberForm.memberChessCareerStartDate.value =
    oldMemberData.chessCareerStartDate;
};

const handleFormSubmit = async () => {
  editMemberForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const member = {
      name:
        oldMemberData.name !== editMemberForm.memberName.value
          ? editMemberForm.memberName.value
          : undefined,
      lastName:
        oldMemberData.lastName !== editMemberForm.memberLastname.value
          ? editMemberForm.memberLastname.value
          : undefined,
      email:
        oldMemberData.email !== editMemberForm.memberEmail.value
          ? editMemberForm.memberEmail.value
          : undefined,
      personalCode:
        oldMemberData.personalCode !== editMemberForm.memberPersonalCode.value
          ? editMemberForm.memberPersonalCode.value
          : undefined,
      chessCareerStartDate:
        oldMemberData.chessCareerStartDate !==
        editMemberForm.memberChessCareerStartDate.value
          ? editMemberForm.memberChessCareerStartDate.value
          : undefined,
    };

    await patchMember(member, oldMemberData.id);
    window.location.replace("../member-list/member-list.html");
  });
};

const handleCancelButton = () => {
  document.getElementById("cancelButton").addEventListener("click", () => {
    window.location.replace("../member-list/member-list.html");
  });
};

(async () => {
  await loadMemberData();
  handleCancelButton();
  await handleFormSubmit();
})();
