const API_BASE_URL = "http://localhost:8082";

export const getMembers = async () => {
  const response = await fetch(`${API_BASE_URL}/member`);
  const members = await response.json();
  return members;
};

export const getMemberByID = async (memberId) => {
  const response = await fetch(`${API_BASE_URL}/member/${memberId}`);
  const member = await response.json();
  return member;
};

export const saveMember = async (member) => {
  await fetch(`${API_BASE_URL}/member`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  alert("Member saved successfully!");
};

export const putMember = async (member, id) => {
  await fetch(`${API_BASE_URL}/member/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  alert(`[Member ${id}] replaced successfully!`);
};

export const patchMember = async (member, id) => {
  await fetch(`${API_BASE_URL}/member/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  alert(`[Member ${id}] updated successfully!`);
};

export const deleteMemberById = async (memberId) => {
  await fetch(`${API_BASE_URL}/member/${memberId}`, {
    method: "DELETE",
  });

  alert(`[Member ${memberId}] deleted successfully`);
};
