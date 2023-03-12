import { deleteMemberById, getMembers } from "../../commons/requests.js";

const renderMemberTableRows = async (members) => {
  const memberTable = document.getElementById("memberTable");
  const memberTableBody = memberTable.querySelector("tbody");
  members.forEach((m) => {
    const memberRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = m.name;
    memberRow.appendChild(nameCell);

    const lastnameCell = document.createElement("td");
    lastnameCell.innerText = m.lastname;
    memberRow.appendChild(lastnameCell);

    const actionCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.className = "btn btn-warning";
    editButton.style = "margin-right: 10px";
    editButton.addEventListener("click", async () => {
      window.location.replace(`../edit-member/edit-member.html?id=${m.id}`);
    });
    actionCell.appendChild(editButton);

    const replaceButton = document.createElement("button");
    replaceButton.innerText = "REPLACE";
    replaceButton.className = "btn btn-warning";
    replaceButton.style = "margin-right: 10px";
    replaceButton.addEventListener("click", async () => {
      window.location.replace(
        `../replace-member/replace-member.html?id=${m.id}`
      );
    });
    actionCell.appendChild(replaceButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", async () => {
      await deleteMemberById(m.id);
      window.location.reload();
    });
    actionCell.appendChild(deleteButton);

    memberRow.appendChild(actionCell);

    memberTableBody.appendChild(memberRow);
  });
};

const handleAddNewMemberButton = () => {
  document.getElementById("addMember").addEventListener("click", () => {
    window.location.replace("../add-member/add-member.html");
  });
};

(async () => {
  handleAddNewMemberButton();
  const member = await getMembers();
  renderMemberTableRows(member);
})();
