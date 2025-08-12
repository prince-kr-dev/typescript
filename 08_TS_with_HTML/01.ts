function getInfo(){
    const nameInput = document.getElementById('username') as HTMLInputElement;

    const name = nameInput.value;

    const emailInput = document.getElementById('email') as HTMLInputElement;

    const email = emailInput.value;

    const ageInput = document.getElementById('age') as HTMLInputElement;

    const age = ageInput.value;

    console.log(name, email, age);
    
}