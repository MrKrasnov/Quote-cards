import { quotes } from "./quotes.js";

function toggleLight() {
    let toggle = document.getElementById('toggle');

    toggle.onclick = (e) => {

        if (e.target.classList.contains('toggle_night')) {
            document.body.style.background = "#484343";
            e.target.classList.remove('toggle_night');
            e.target.classList.add('toggle_sun');
        } else {
            document.body.style.background = "#ffffff";
            e.target.classList.remove('toggle_sun');
            e.target.classList.add('toggle_night');
        }

    }
}
toggleLight()

function quoteWritter() {
    return new Promise(resolve => {
        document.querySelector('.preloader').style.display = "none";
        let num = Math.floor(Math.random() * (quotes.length - 0) + 0);
        resolve([quotes[num][0], quotes[num][1]]);
    })
        .then(quote => {
            if (document.querySelector('p') || document.querySelector('small')) {
                document.querySelector('p').remove();
                document.querySelector('small').remove();
            }
            let p = document.createElement('p');
            p.textContent = quote[0];
            let small = document.createElement('small');
            small.textContent = quote[1];
            document.querySelector('.scene').append(p);
            document.querySelector('.scene').append(small);
            setTimeout(quoteWritter, 5000)
        });
}

document.querySelector('.btn').onclick = () => {
    document.querySelector('.btn').remove();
    document.querySelector('.preloader').style.display = "block";
    setTimeout(quoteWritter, 500)
};