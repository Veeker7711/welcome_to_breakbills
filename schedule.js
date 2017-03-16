function get_today()
{
    var http = new XMLHttpRequest();
    http.open("GET", "http://40.115.42.10/api/gendar_t/bbfccb70-10e2-48c1-bc43-abeb7c1dc4c6/schedule", true);
    var today = document.querySelector('.contener  #today');
    http.onload = function() {
	var text = http.responseText;
	var array = JSON.parse(text);
	order(array);
	for (i in array)
	{
	    var div = document.createElement('div');
	    div.id = "today_div" + i;
	    today.appendChild(div);
	    var p = document.createElement('p');
	    div.appendChild(p);
	    p.appendChild(document.createTextNode(array[i]['date'] + ",  Cours : "  + array[i]['name']))
	}
    }
    http.send(null);
}

function order(array)
{
    var key = 0;
    var j = 0;
    for (k in array)
	j++;
    while (key == 0)
    {
	key = 1;
	for (i = 1; i < j; i++)
	{
	    var d1 = Date.parse(array[i - 1]['date']);
	    var d2 = Date.parse(array[i]['date']);
	    if (d1 > d2)
	    {
		key = 0;
		var tmp = array[i];
		array[i] = array[i - 1];
		array[i - 1] = tmp;
	    }
	}
    }
}

function get_tommorow()
{
    var http = new XMLHttpRequest();
    http.open("GET", "http://40.115.42.10/api/gendar_t/bbfccb70-10e2-48c1-bc43-abeb7c1dc4c6/classes", true);
    var tomorrow = document.querySelector('.contener  #tomorrow');
    http.onload = function() {
	var array = JSON.parse(http.responseText);
	order(array);
	var registered = document.querySelector(".contener #registered");
	var not_registered = document.querySelector(".contener #notregistered");
	for (i in array)
	{
	    if (array[i]['registered'] == true)
	    {
		var div = document.createElement('div');
		div.id = "tomorrow" + i;
		registered.appendChild(div)
		div.appendChild(document.createTextNode(array[i]['date'] + ",  Cours : "  + array[i]['name']));
	    }
	    else
	    {
		var div = document.createElement('div');
		div.id = "tomorrow" + i;
		not_registered.appendChild(div);
		div.appendChild(document.createTextNode(array[i]['date'] + ",  Cours : "  + array[i]['name']));
	    }
	    var button = document.createElement('button');
	    button.setAttribute('onclick', 'swap("tomorrow' + i  + '")');
	    button.style = "margin-left: 5px;";
	    div.appendChild(button);
	    button.appendChild(document.createTextNode("Swap"))
	}
    }
    http.send(null);
}

function swap(id)
{
    var registered = document.querySelector(".contener #registered");
    var not_registered = document.querySelector(".contener #notregistered");
    var target = document.getElementById(id);
    if (target.parentNode.id == "registered")
	not_registered.appendChild(target);
    else
	registered.appendChild(target);
}
