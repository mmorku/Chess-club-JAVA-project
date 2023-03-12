import { saveMember } from "../../commons/requests.js";

const handleFormSubmit = async () => {
  const form = document.getElementById("addMemberForm").querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const member = {
      name: form.memberName.value,
      lastName: form.memberLastName.value,
      email: form.memberEmail.value,
      personalCode: form.memberPersonalCode.value,
      chessCareerStartDate: form.memberChessCareerStartDate.value,
    };
    await saveMember(member);
    window.location.reload();
  });
};

const handleCancelButton = () => {
  document.getElementById("cancelButton").addEventListener("click", () => {
    window.location.replace("../member-list/member-list.html");
  });
};

(async () => {
  handleCancelButton();
  await handleFormSubmit();
})();
