function get_form()
{
    if (document.querySelector('#container'))
    {
	return (0);
    }
    else
    {
	var br = document.createElement('br');
	var body = document.querySelector('body');
	var container = document.createElement('div');
	container.id = "container";
	body.appendChild(container);
	var container_input = document.createElement('div');
	container.appendChild(container_input);
	var input_login = document.createElement('input');
	input_login.type = "text";
	input_login.id = "login";
	container_input.appendChild(br);
	var br = document.createElement('br');
	container_input.appendChild(document.createTextNode('Login :'));
	container_input.appendChild(br);
	container_input.appendChild(input_login);
	var br = document.createElement('br');
	container_input.appendChild(br);
	var br = document.createElement('br');
	var input_pwd = document.createElement('input');
	input_pwd.type = "password";
	input_pwd.id = "password";
	container_input.appendChild(br);
	var br = document.createElement('br');
	container_input.appendChild(document.createTextNode("Password :"));
	container_input.appendChild(br);
	container_input.appendChild(input_pwd);
	var button = document.createElement('button');
	button.setAttribute("onClick", "get_value()");
	var br = document.createElement('br');
	container_input.appendChild(br);
	var br = document.createElement('br');
	container_input.appendChild(br);
	container_input.appendChild(button);
	button.appendChild(document.createTextNode("Submit"));
    }
}

function redirect()
{
    if (document.cookie.indexOf("student") != -1)
    {
	document.location.href="schedule.html";
    }
    else
    {
	document.location.href="index.html";
    }
}

function get_value()
{
    var error = 0;
    var login = document.querySelector('#login');
    var password = document.querySelector('#password');
    var required_password = get_password();
    var regex = new RegExp("[a-z]{2,6}_[a-z0-9]");
    if (!(regex.test(login.value)))
	error = 1;
	
    if (password.value != required_password)
	error = 1;
	

    var expiration = get_expiration();
    
    
    if (error == 1)
	document.cookie = "forbidden=true; " + expiration;
    else
	document.cookie = "student=true; " + expiration;
    redirect();
}

function get_password()
{
    var d = new Date();
    if (d.getHours() >= 0 && d.getHours() <= 5)
	return ("Air");
    else if (d.getHours() >= 6 && d.getHours() <= 11)
	return ("Earth");
    else if (d.getHours() >= 12 && d.getHours() <= 17)
	return ("Fire");
    else if (d.getHours() >= 18 && d.getHours() <= 23)
	return ("Water");
}

function get_expiration()
{
    var d = new Date();
    if (d.getHours() >= 0 && d.getHours() <= 5)
    {
	d.setHours(5);
	d.setMinutes(59);
	d.setSeconds(59);
	var expire = "expires=" + d.toUTCString() + ";path=/";
	return (expire);
    }
    else if (d.getHours() >= 6 && d.getHours() <= 11)
    {
	d.setHours(11);
	d.setMinutes(59);
	d.setSeconds(59);
	var expire = "expires=" + d.toUTCString() + ";path=/";
	return (expire);
    }
	else if (d.getHours() >= 12 && d.getHours() <= 17)
    {
	d.setHours(17);
	d.setMinutes(59);
	d.setSeconds(59);
	var expire = "expires=" + d.toUTCString() + ";path=/";
	return (expire);
    }
    else if (d.getHours() >= 18 && d.getHours() <= 23)
    {
	d.setHours(23);
	d.setMinutes(59);
	d.setSeconds(59);
	var expire = "expires=" + d.toUTCString() + ";path=/";
	return (expire);
    }
}
