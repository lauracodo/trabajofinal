const links = document.getElementsByClassName("botnav");

function toggleMobile () {
   for (let link of links) {
        if (link.classList.contains("visible")) {
            link.classList.remove("visible");
        }
        else {
            link.classList.add("visible")
        } 
    }
};