const inputs = document.querySelectorAll('.controls input');

const changeValue = input => {
    var suffix = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value + suffix);
}

inputs.forEach(input => {
    let valueCss = getComputedStyle(document.documentElement).getPropertyValue(`--${input.name}`);

    if (input.dataset.sizing) valueCss = valueCss.slice(0, -input.dataset.sizing.length);
    input.value = ''+ valueCss;

    input.addEventListener('input', e => changeValue(e.target))
});