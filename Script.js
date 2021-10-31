const ulTage = document.querySelector("ul");
let totalpages = 20;

function element(totalPages, page) {
    let liTage = "";
    let activeLi;
    let beforePages = page - 1; // 5 - 1 = 4
    let afterPages = page + 1; // 5 + 1 = 6

    if (page > 1) { // if page value is greater than 1 then add new li which is previous button
        liTage += `<li class="btn prev" onclick="element(totalpages, ${page - 1})"><span> Prev</span></li>`;
    }

    if (page > 2) { // if page value  is greater than 2 then add new li tag with 1 value
        liTage += `<li class="numb" onclick="element(totalpages, 1)"><span>1</span></li>`;
        if (page > 3) { // if page value is greater then 3 then add new li tage with (...)
            liTage += `<li class="dots"><span>...</span></li>`;
        }
    }
    //PAGES OR LI SHOW BEFORE THE CURRENT LI
    if (page == totalPages) {
        beforePages = beforePages - 2
    }
    else if (page == totalPages - 1) {
        beforePages = beforePages - 1
    }

    // PAGES OR LI SHOW AFTER THE CURRENT LI
    if (page == 1) {
        afterPages = afterPages + 2
    }
    else if (page == 2) {
        afterPages = afterPages + 1
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
        if (pageLength > totalPages) {
            continue;
        }
        if (pageLength == 0) { // if pagelength is equal to 0 then add + 1 to the pagelength value
            pageLength = pageLength + 1
        }
        if (page == pageLength) { // if page value is equal to pagelength then assign active string in the activeLi variable
            activeLi = "active";
        }
        else { // else leave empty string to the activeLi variable
            activeLi = "";
        }
        liTage += `<li class="numb ${activeLi}" onclick="element(totalpages, ${pageLength})"><span>${pageLength}</span></li>`;

    }

    if (page < totalpages - 1) { // if page value  is less than totalpages by -1 then show the last li or page which is 20
        if (page < totalPages - 2) { // if page value is less then totalpages  by -2  then show the last (...) before last
            liTage += `<li class="dots"><span>...</span></li>`;
        }
        liTage += `<li class="numb" onclick="element(totalpages, ${totalPages})"><span>${totalpages}</span></li>`;
    }
    if (page < totalPages) { // if page value is less than totalpages value then add new li which is next button
        liTage += `<li class="btn next" onclick="element(totalpages, ${page + 1})"><span>Next</span></li>`;
    }

    ulTage.innerHTML = liTage;
}
element(totalpages, 5); // calling above function with passing values