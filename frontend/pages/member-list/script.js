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
    lastnameCell.innerText = m.lastName;
    memberRow.appendChild(lastnameCell);

    const emailCell = document.createElement("td");
    emailCell.innerText = m.email;
    memberRow.appendChild(emailCell);

    const sexCell = document.createElement("td");
    const sexNumber = m.personalCode.substring(0, 1);
    let sex = "";
    if (parseInt(sexNumber) % 2 === 0) {
      sex = "Female";
    } else sex = "Male";

    sexCell.innerText = sex;
    memberRow.appendChild(sexCell);

    //
    const getAge = (birthDate) =>
      Math.floor((new Date() - new Date(birthDate).getTime()) / 3.1557e10);
    // console.log(getAge("2001-03-02"));
    // get year 2019 or 2020
    const today = new Date(); // today date
    const todayYear = parseInt(today.getFullYear().toString().substring(2, 4)); // 2023 -> 23
    const bdayYear = parseInt(m.personalCode.substring(1, 3)); // 96
    let fullBdayDate = "";
    if (bdayYear <= todayYear) {
      fullBdayDate =
        "20" +
        m.personalCode.substring(1, 3) +
        "-" +
        m.personalCode.substring(3, 5) +
        "-" +
        m.personalCode.substring(5, 7);
    } else
      fullBdayDate =
        "19" +
        m.personalCode.substring(1, 3) +
        "-" +
        m.personalCode.substring(3, 5) +
        "-" +
        m.personalCode.substring(5, 7);
    // console.log(fullBdayDate.split("-"));

    // var arrayDate = fullBdayDate.split("-");

    // function cacl(date) {
    //   var diff_ms = Date.now() - date.getTime();
    //   var age_dt = new Date(diff_ms);

    //   return Math.abs(age_dt.getUTCFullYear() - 1970);
    // }

    // console.log(arrayDate);
    // console.log(
    //   cacl(
    //     new Date(
    //       parseInt(arrayDate[0]),
    //       parseInt(arrayDate[1]),
    //       parseInt(arrayDate[2])
    //     )
    //   )
    // );

    // console.log(getAge(m.chessCareerStartDate));

    const ageCell = document.createElement("td");
    ageCell.innerText = getAge(fullBdayDate);
    memberRow.appendChild(ageCell);

    function setExperienceText() {
      if (getAge(m.chessCareerStartDate) == 0) {
        return "Less than a Year";
      } else return getAge(m.chessCareerStartDate) + " years";
    }

    const experienceCell = document.createElement("td");
    experienceCell.innerText = setExperienceText();
    memberRow.appendChild(experienceCell);

    const actionCell = document.createElement("td");

    const editButton = document.createElement("button");
    editButton.innerText = "EDIT";
    editButton.className = "btn btn-warning";
    editButton.style = "margin-right: 10px";
    editButton.addEventListener("click", async () => {
      window.location.replace(`../edit-member/edit-member.html?id=${m.id}`);
    });
    actionCell.appendChild(editButton);

    // const replaceButton = document.createElement("button");
    // replaceButton.innerText = "REPLACE";
    // replaceButton.className = "btn btn-warning";
    // replaceButton.style = "margin-right: 10px";
    // replaceButton.addEventListener("click", async () => {
    //   window.location.replace(
    //     `../replace-member/replace-member.html?id=${m.id}`
    //   );
    // });
    // actionCell.appendChild(replaceButton);

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
