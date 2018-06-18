var menuClick, dropList, container;

container = document.querySelector(".container");
menuClick = document.querySelector(".menu");
dropList = '<div class="drop_list"><div class="drop_list_menu"><div></div><div></div><div></div></div>';

menuClick.addEventListener("click", function(){
    wrapper = document.querySelector(".wrapper");
    menuClick.classList.toggle("open");
    if (menuClick.classList.contains("open")){
        container.style.opacity = "0";
        wrapper.insertAdjacentHTML("afterbegin", dropList);
    } else {
        container.style.opacity = "1";
        wrapper.removeChild(wrapper.childNodes[0]);
    }
});