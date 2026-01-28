const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (addform) => {
    const inputName = addform.target.name;
    const inputValue = addform.target.value;
    formData[inputName] = inputValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});



const formValue = localStorage.getItem("feedback-form-state");

if (formValue) {
    const useValue = JSON.parse(formValue);

    formData.email = useValue.email || "";
    formData.message = useValue.message || "";

    form.email.value = formData.email;
    form.message.value = formData.message;
} else {
    formData.email = "";
    formData.message = "";

    form.email.value = "";
    form.message.value = "";
}

form.addEventListener("submit", (check) => {
    check.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();

});

