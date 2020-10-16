$(document).ready(function() {
    setTimeout(tryShowPage, 150);
    // setTimeout(tryAddModal, 150);
    setTimeout(tryRemoveCover, 500);

    const a = document.getElementById("resume-a");
    if (a) {
        a.addEventListener("mouseover", function() {
            $(".logo-container").addClass("portfolio-glow")
        })
    
        a.addEventListener("mouseout", function() {
            $(".logo-container").removeClass("portfolio-glow")
        })
    }


    // flashcard modal
    // const modalContainer = document.getElementById("modal-container");
    // const modal = document.getElementById("modal");
    // modal.addEventListener("click", function(e) {
    //     // e.preventDefault();
    //     // e.stopPropagation();
    // });
    // modalContainer.addEventListener("click", hideFlashcard)
});

function tryShowPage() {
    const page = document.getElementById("page");
    if (page) {
        page.classList.remove("hidden")
    }
    else {
        setTimeout(tryShowPage, 200);
    }
}

function tryRemoveCover() {
    const kp = document.getElementById("cover");
    const page = document.getElementById("page");
    if (kp && page && !page.classList.contains("hidden")) {
        kp.classList.add("cover-out");
    }
    else {
        setTimeout(tryRemoveCover, 1000)
    }
}

// function tryAddModal() {
//     const modalContainer = document.getElementById("modal-container");
//     modalContainer.style.display = "flex";
// }

// function showFlashcard() {
//     document.getElementById("modal-container").classList.add("show-modal-container");
// }

// function hideFlashcard() {
//     document.getElementById("modal-container").classList.remove("show-modal-container");
// }