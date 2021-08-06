// grab all the value in the input
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
// btn click calculate
const btn = document.getElementById("calculate-btn");
// equation display
const equation = document.getElementById("equation");
// delta display
const delta = document.getElementById("delta");
// root display
const root = document.getElementById("root");
// error display
const err = document.getElementById("err");
// total display
const total = document.getElementById("total");
// clear button
const clear = document.getElementById("clear");
btn.addEventListener("click", () => {
    const aValue = a.value;
    const bValue = b.value;
    const cValue = c.value;
    const equ = `Equation: <b>${aValue}x<sup>2</sup> + ${bValue}x + ${cValue} = 0</b>`;
    // if user doesn't put any value in input
    if (a.value === '' || b.value === '' || c.value === '') {
        err.style.display = "flex";
        total.style.display = "none";
    }
    else {
        err.style.display = "none";
        total.style.display = "block";
        equation.innerHTML = equ;
        // find delta
        const findDelta = (bValue * bValue) - (4 * aValue * cValue);
        delta.innerHTML = `Delta: <b>${findDelta}</b>`;
        const squareRootDelta = Math.sqrt(findDelta);
        let display = '';
        // delta > 0
        if (findDelta > 0) {
            const x1 = (-bValue + squareRootDelta) / (2 * aValue);
            const x2 = (-bValue - squareRootDelta) / (2 * aValue);
            display = `Roots: <b>x<sub>1</sub> = ${x1} & x<sub>2</sub> = ${x2}</b>`;
        }
        // delta = 0
        else if (findDelta === 0) {
            const x = (-bValue) / (2 * aValue);
            display = `Roots: <b>x<sub>1</sub> = x<sub>2</sub> = ${x}</b>`;
        }
        // delta < 0
        else {
            display = `Roots: <b>Equation has no root</b>`
        }
        root.innerHTML = display;
    }
})
// clear button
clear.addEventListener("click", () => {
    a.value = '';
    b.value = '';
    c.value = '';
    err.style.display = "none";
    total.style.display = "none";
})