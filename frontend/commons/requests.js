const API_BASE_URL = "http://localhost:8080";

export const getStudents = async () => {
  const response = await fetch(`${API_BASE_URL}/student`);
  const students = await response.json();
  return students;
};

export const getStudentByID = async (studentId) => {
  const response = await fetch(`${API_BASE_URL}/student/${studentId}`);
  const student = await response.json();
  return student;
};

export const saveStudent = async (student) => {
  await fetch(`${API_BASE_URL}/student`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  alert("Student saved successfully!");
};

export const putStudent = async (student, id) => {
  await fetch(`${API_BASE_URL}/student/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  alert(`[Student ${id}] replaced successfully!`);
};

export const patchStudent = async (student, id) => {
  await fetch(`${API_BASE_URL}/student/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  alert(`[Student ${id}] updated successfully!`);
};

export const deleteStudentById = async (studentId) => {
  await fetch(`${API_BASE_URL}/student/${studentId}`, {
    method: "DELETE",
  });

  alert(`[Student ${studentId}] deleted successfully`);
};
