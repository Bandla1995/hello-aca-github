const toggle = document.querySelector(".toggle");
const toggleBtn = document.querySelector(".toggle_btn");
const wrapper = document.querySelector(".wrapper");

toggle.addEventListener("click", (e) => {
    toggleBtn.classList.toggle("night-mode");
    if(toggleBtn.classList.contains("night-mode")){
        wrapper.classList.add("night");
    }else{
        wrapper.classList.remove("night");
    }


});

