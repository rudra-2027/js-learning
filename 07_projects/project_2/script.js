const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result');
    const isHeight = height < 0 || isNaN(height);
    const isWeight = weight < 0 || isNaN(weight);

    if (isHeight && isWeight) {
        result.innerHTML = "Please give a valid height and weight"

    } else if (isHeight) {
        result.innerHTML = "Please give a valid height"
    } else if (isWeight) {
        result.innerHTML = "Please give a valid weight"
    } else {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`;

    }
})