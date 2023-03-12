import { getMemberByID, patchMember } from "../../commons/requests.js";

const replaceMemberForm = document
  .getElementById("replaceMemberForm")
  .querySelector("form");

let oldMemberData;

const loadMemberData = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const memberId = urlParams.get("id");

  oldMemberData = await getMemberByID(memberId);
  replaceMemberForm.memberName.value = oldMemberData.name;
  replaceMemberForm.memberLastname.value = oldMemberData.lastname;
  replaceMemberForm.memmberEmail.value = oldMemberData.email;
};

const handleFormSubmit = async () => {
  replaceMemberForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const member = {
      name:
        oldMemberData.name !== replaceMemberForm.memberName.value
          ? replaceMemberForm.memberName.value
          : undefined,
      lastname:
        oldMemberData.lastname !== replaceMemberForm.memberLastname.value
          ? replaceMemberForm.memberLastname.value
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
