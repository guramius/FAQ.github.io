let div_1 = document.getElementById('div1');
let div_2 = document.getElementById('div2');
let div_3 = document.getElementById('div3');
let div_4 = document.getElementById('div4');
let div_5 = document.getElementById('div5');

let p_1 = document.getElementById('p1');
let p_2 = document.getElementById('p2');
let p_3 = document.getElementById('p3');
let p_4 = document.getElementById('p4');
let p_5 = document.getElementById('p5');

let svg_1 = document.getElementById('svg1');
let svg_2 = document.getElementById('svg2');
let svg_3 = document.getElementById('svg3');
let svg_4 = document.getElementById('svg4');
let svg_5 = document.getElementById('svg5');

p_1.addEventListener('click', () => {
    div_1.classList.toggle('active');
    div_1.style.transition = 0.3 + 's';
    div_2.classList.remove('active');
    div_3.classList.remove('active');
    div_4.classList.remove('active');
    div_5.classList.remove('active');

    p_1.classList.toggle('font');
    p_2.classList.remove('font');
    p_3.classList.remove('font');
    p_4.classList.remove('font');
    p_5.classList.remove('font');

    svg_1.classList.toggle('paragraphSVG');
    svg_2.classList.remove('paragraphSVG');
    svg_3.classList.remove('paragraphSVG');
    svg_4.classList.remove('paragraphSVG');
    svg_5.classList.remove('paragraphSVG');
    

});

p_2.addEventListener('click', () => {
    div_2.classList.toggle('active');
    div_2.style.transition = 0.3 + 's'; 
    div_1.classList.remove('active');
    div_3.classList.remove('active');
    div_4.classList.remove('active');
    div_5.classList.remove('active');

    p_1.classList.remove('font');
    p_2.classList.toggle('font');
    p_3.classList.remove('font');
    p_4.classList.remove('font');
    p_5.classList.remove('font');

    svg_1.classList.remove('paragraphSVG');
    svg_2.classList.toggle('paragraphSVG');
    svg_3.classList.remove('paragraphSVG');
    svg_4.classList.remove('paragraphSVG');
    svg_5.classList.remove('paragraphSVG');
});

p_3.addEventListener('click', () => {
    div_3.classList.toggle('active');
    div_3.style.transition = 0.3 + 's';
    div_1.classList.remove('active');
    div_2.classList.remove('active');
    div_4.classList.remove('active');
    div_5.classList.remove('active');

    p_1.classList.remove('font');
    p_2.classList.remove('font');
    p_3.classList.toggle('font');
    p_4.classList.remove('font');
    p_5.classList.remove('font');

    svg_1.classList.remove('paragraphSVG');
    svg_2.classList.remove('paragraphSVG');
    svg_3.classList.toggle('paragraphSVG');
    svg_4.classList.remove('paragraphSVG');
    svg_5.classList.remove('paragraphSVG');
    
});

p_4.addEventListener('click', () => {
    div_4.classList.toggle('active');
    div_4.style.transition = 0.3 + 's';
    div_1.classList.remove('active');
    div_2.classList.remove('active');
    div_3.classList.remove('active');
    div_5.classList.remove('active');
    
    p_1.classList.remove('font');
    p_2.classList.remove('font');
    p_3.classList.remove('font');
    p_4.classList.toggle('font');
    p_5.classList.remove('font');

    svg_1.classList.remove('paragraphSVG');
    svg_2.classList.remove('paragraphSVG');
    svg_3.classList.remove('paragraphSVG');
    svg_4.classList.toggle('paragraphSVG');
    svg_5.classList.remove('paragraphSVG');
});

p_5.addEventListener('click', () => {
    div_5.classList.toggle('active');
    div_5.style.transition = 0.3 + 's';
    div_1.classList.remove('active');
    div_2.classList.remove('active');
    div_3.classList.remove('active');
    div_4.classList.remove('active');

    p_1.classList.remove('font');
    p_2.classList.remove('font');
    p_3.classList.remove('font');
    p_4.classList.remove('font');
    p_5.classList.toggle('font');

    svg_1.classList.remove('paragraphSVG');
    svg_2.classList.remove('paragraphSVG');
    svg_3.classList.remove('paragraphSVG');
    svg_4.classList.remove('paragraphSVG');
    svg_5.classList.toggle('paragraphSVG');
});