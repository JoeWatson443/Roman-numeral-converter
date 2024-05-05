const navToggle = document.getElementById("menu-icon");
const menu = document.querySelector(".menu");
const menuLink = document.getElementById("menu-link")

const pricing = document.getElementById("pricing")
const contact = document.getElementById("contact")
const contactBtn = document.getElementById("contact-btn")
const cta = document.getElementById("cta")


navToggle.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    
    if (visibility === "false") {
        menu.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        menu.setAttribute("data-visible", false)
    }

    navToggle.classList.toggle("close-menu")
    
})

pricing.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Just for the low low price of $XXII a month!!");

    const visibility = menu.getAttribute("data-visible");
    
    if (visibility === "false") {
        menu.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        menu.setAttribute("data-visible", false)
    }

    navToggle.classList.toggle("close-menu")

    return;
})

contact.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Text us at +XXXIV DCXVII CCLXVIII CXXIV \nor email at joewatson443@gmail.com");

    const visibility = menu.getAttribute("data-visible");
    
    if (visibility === "false") {
        menu.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        menu.setAttribute("data-visible", false)
    }

    navToggle.classList.toggle("close-menu")

    return;
})

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Text us at +XXXIV DCXVII CCLXVIII CXXIV \nor email at joewatson443@gmail.com");

    const visibility = menu.getAttribute("data-visible");
    
    if (visibility === "false") {
        menu.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        menu.setAttribute("data-visible", false)
    }

    navToggle.classList.toggle("close-menu")

    return;
})

menuLink.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    
    if (visibility === "false") {
        menu.setAttribute("data-visible", true)
    } else if (visibility === "true"){
        menu.setAttribute("data-visible", false)
    }

    navToggle.classList.toggle("close-menu")
})

cta.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
    })
});



const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = num => {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join('');
};

const isValid = (str, int) => {
    let errText = '';

    if (!str || str.match(/[e.]/g)) {
        errText = 'Please enter a valid number.';
    } else if (int < 1) {
        errText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
        errText = 'Please enter a number less than or equal to 3999';
    } else {
        // No errors detected
        return true;
    }

    output.innerText = errText;
    output.classList.add('alert');

    return false;
};

const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert')
}

form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
    window.scrollTo({
        top: document.body.scrollHeight,
    })
});

convertButton.addEventListener('click', () => {
    updateUI()
});

const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);

    output.classList.remove('hidden');

    clearOutput();

    if (isValid(numStr, int)) {
        output.innerText = convertToRoman(int);
    }
};