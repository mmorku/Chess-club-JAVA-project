import { saveMember } from "../../commons/requests.js";

const handleFormSubmit = async () => {
  const form = document.getElementById("addMemberForm").querySelector("form");
  // console.log(form);
  form.addEventListener("submit", async (e) => {
    console.log(form.memberLastname.value);
    e.preventDefault();
    const member = {
      name: form.memberName.value,
      lastName: form.memberLastname.value,
      email: form.memberEmail.value,
      personalCode: form.memberPersonalCode.value,
      chessCareerStartDate: form.memberChessCareerStartDate.value,
    };
    console.log(member);
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
