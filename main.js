let todoRecord = [
  {
    todoId: 123,
    name: { subj: `WD`, inst: `Sgrignoli` },
    task: { total: 4, compl: `100%` }
  }, // 0
  {
    todoId: 345,
    name: { subj: `IP`, inst: `Masse` },
    task: { total: 7, compl: `50%` }
  }, // 1
  {
    todoId: 567,
    name: { subj: `PM`, inst: `Desgroseilliers` },
    task: { total: 9, compl: `10%` }
  } // 2
];

// Where are we putting this stuff?
let allRecords = document.getElementById("records");

function clearAllRecords() {
  // Clear out all the records
  allRecords.innerHTML = ``;
}
// 1. Add a clear button to the interface to call this above function

function showAllRecord() {
  clearAllRecords();
  allRecords.innerHTML += `<li>${todoRecord[0].name.subj} compl ${
    todoRecord[0].task.total
  }% which is an ${todoRecord[0].task.compl}</li>`;
  allRecords.innerHTML += `<li>${todoRecord[1].name.subj} compl ${
    todoRecord[1].grade.total
  }% which is an ${studentRecord[1].grade.letter}</li>`;
  allRecords.innerHTML += `<li>${todoRecord[2].name.subj} compl ${
    todoRecord[2].task.total
  }% which is an ${todotRecord[2].task.compl}</li>`;
}
// 2. Add a refresh button to the interface to call this above function

// Functions we will add:
// addNewStudent()
// deleteStudent()
// showOneStudentRecord()
// updateGrade()
