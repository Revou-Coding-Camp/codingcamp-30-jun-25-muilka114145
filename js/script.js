// Function to validate the form
function validateForm() {
    // Get the input element by its ID
    const nameInput = document.getElementById('name-input');
    const tanggalInput = document.getElementById('tanggal-input');
    const kelaminInput = document.getElementById('kelamin');
    const komentarInput = document.getElementById('komentar-input');

    if (nameInput.value === '') {
        // If the input is empty, alert the user
        alert('Please enter your name!');
    } else {
        // If the input is valid, display the name in the result form
        document.getElementById('result-name-form').innerHTML = nameInput.value;
    }

     if (tanggalInput.value === '') {
        // If the input is empty, alert the user
        alert('Please enter your date!');
    } else {
        // If the input is valid, display the name in the result form
        document.getElementById('result-date-form').innerHTML = tanggalInput.value;
    }

     
        // If the input is valid, display the name in the result form
        document.getElementById('result-gender-form').innerHTML = kelaminInput.value;
    

     if (komentarInput.value === '') {
        // If the input is empty, alert the user
        alert('Please enter your gender!');
    } else {
        // If the input is valid, display the name in the result form
        document.getElementById('result-komentar-form').innerHTML = komentarInput.value;
    }
}