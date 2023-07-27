document.getElementById('login-form').addEventListener('submit',function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('users.json')
    .then(response => response.json())
    .then(data => {
        const user = data.find(user => user.email === email && user.password === password);

        if(user){
            alert('Login Successful! Welcome,' + user.email);
        }
        else{
            alert('Invalid Credentail. Please Try Again');
        }
    })
    .catch(error => console.error('Error loading Json File:',error));
});