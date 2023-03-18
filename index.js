const form = document.getElementById("newTask");
const newTask = document.getElementById("newTaskInput");
const emptyTask = document.getElementById("emptyTask");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //impide que el boton submitee

  const task = newTask.value; //agarramos el valor del form

  if (!task) {
    //si "no task" - es lo mismo que task == "";
    emptyTask.classList.remove("hidden");
    setTimeout(() => {
      emptyTask.classList.add("hidden");
    }, 3000);
    return;
  }

  const taskElement = document.createElement("div");
  taskElement.classList.add("container"); //le agregamos la clase -  pero ambos NO SE RELACIONAN

  const taskInput = document.createElement("input");
  taskInput.classList.add("taskInput");
  taskInput.value = task; //con la "task" guardada
  taskInput.setAttribute("readonly", "readonly");

  //unir
  taskElement.append(taskInput);
  taskList.append(taskElement);

  //botones:
  const taskBtns = document.createElement("div");
  taskBtns.classList.add("btns");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  const strikeBtn = document.createElement("button");
  strikeBtn.classList.add("scrap");
  const eraseBtn = document.createElement("button");
  eraseBtn.classList.add("erase");

  taskBtns.append(editBtn, eraseBtn, strikeBtn);
  taskElement.append(taskBtns);

editBtn.addEventListener("click", (e) => {
  if (editBtn.classList.contains("edit")){
    editBtn.classList.remove("edit");
    editBtn.classList.add("save")

    strikeBtn.classList.add("notDisplay") //quitar botón de "strike" durante la edicion

    taskInput.classList.remove("done")  //hacer modificable el input
    taskInput.removeAttribute("readonly");
    taskInput.focus();
  } else {
    editBtn.classList.add("edit")
    editBtn.classList.remove("save")
    strikeBtn.classList.remove("notDisplay")
    taskInput.setAttribute("readonly", "readonly")
  }
}
)

//   funcionalidad del boton de "terminar task"
strikeBtn.addEventListener("click", (e) => {
    taskInput.classList.add("done")
    strikeBtn.classList.add("notDisplay");
  })

//   funcionalidad "borrar"
  eraseBtn.addEventListener("click", (e) => {
    taskElement.remove();
})
})

/* !Quiero dejar esto como lección de que siempre se puede approachear a una funcionalidad de forma mas sencilla.

  //funcionalidad del botón de "edit"
  editBtn.addEventListener("click", (e) => {

    scrapBtn.classList.toggle("notDisplay") //desaparece scrap
    editBtn.classList.toggle("notDisplay"); //desaparece boton de editar
    confirmBtn.classList.toggle("notDisplay"); //y aparece botón "confirmar edit"
    taskInput.removeAttribute("readonly");

    if(taskInput.classList.contains("done")){  // si quiero editar algo que ya está hecho:
        taskInput.classList.remove("done") // se va a transformar en incompleto.
        confirmBtn.classList.remove("notDisplay"); //aparece la opcion de "confirmar edit"
        scrapBtn.classList.add("notDisplay");
    }
  });
  //funcionalidad "confirmar edit"
  confirmBtn.addEventListener("click", (e) => {

    confirmBtn.classList.toggle("notDisplay");
    editBtn.classList.toggle("notDisplay");
    taskInput.setAttribute("readonly", "readonly");
    scrapBtn.classList.remove("notDisplay")

  });
*/