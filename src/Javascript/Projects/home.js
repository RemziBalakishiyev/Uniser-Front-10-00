const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const ageInput = document.querySelector("#age");
const idInp = document.querySelector("#idInp");

const tbody = document.querySelector(".table > tbody");
const submitBtn = document.querySelector("#addBtn");
const updateBtn = document.querySelector("#updateBtn");
const BASE_URL = "http://localhost:3000/students";
const displayStudents = function (...studentList) {
  let output = "";

  studentList.forEach((student) => {
    output += `<tr>
        <td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td><a class='btn btn-sm btn-success' onclick="getDataById(${student.id})">Edit</a></td>
        <td><a class='btn btn-sm btn-danger' onclick="removeStudent(${student.id})">Delete</a></td>
    </tr>`;
  });
  tbody.insertAdjacentHTML("beforeend", output);
};

const getStudents = async function () {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    displayStudents(...data);
  } catch (error) {}
};

getStudents();

const addNewStudent = async function () {
  const model = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
  };

  console.log(`MODEL :`, model);

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    });

    if (response.status == 200 || response.status == 201) {
      window.location.reload();
    }
  } catch (error) {
    alert("Error adding new Student");
  }
};

submitBtn.addEventListener("click", addNewStudent);

const removeStudent = async function (studentId) {
  try {
    const response = await fetch(BASE_URL + "/" + studentId, {
      method: "DELETE",
    });
  } catch (error) {
    alert("Error deleting the Student");
  }
};

const getDataById = async function (id) {
  try {
    const response = await fetch(BASE_URL + `/${id}`);
    const data = await response.json();
    firstNameInput.value = data.firstName;
    lastNameInput.value = data.lastName;
    ageInput.value = data.age;
    idInp.value = data.id;
  } catch (error) {
    console.log(error);
  }
};

const updateStudent = async function () {
  const model = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
  };

  console.log(`MODEL :`, model);

  try {
    const response = await fetch(BASE_URL + `/${idInp.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    });

    if (response.status == 200 || response.status == 201) {
      window.location.reload();
    }
  } catch (error) {
    alert("Error adding new Student");
  }
};

updateBtn.addEventListener("click", updateStudent);
