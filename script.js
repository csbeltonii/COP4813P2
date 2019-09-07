var states = "States: <select name=state id=statereq> <option selected=selected value=SelectState>Select State</option> <option value=AL>Alabama</option> <option value=AK>Alaska</option> <option value=AZ>Arizona</option> <option value=AR>Arkansas</option> <option value=CA>California</option> <option value=CO>Colorado</option> <option value=CT>Connecticut</option> <option value=DE>Delaware</option> <option value=DC>District Of Columbia</option> <option value=FL>Florida</option> <option value=GA>Georgia</option> <option value=HI>Hawaii</option> <option value=ID>Idaho</option> <option value=IL>Illinois</option> <option value=IN>Indiana</option> <option value=IA>Iowa</option> <option value=KS>Kansas</option> <option value=KY>Kentucky</option> <option value=LA>Louisiana</option> <option value=ME>Maine</option> <option value=MD>Maryland</option> <option value=MA>Massachusetts</option> <option value=MI>Michigan</option> <option value=MN>Minnesota</option> <option value=MS>Mississippi</option> <option value=MO>Missouri</option> <option value=MT>Montana</option> <option value=NE>Nebraska</option> <option value=NV>Nevada</option> <option value=NH>New Hampshire</option> <option value=NJ>New Jersey</option> <option value=NM>New Mexico</option> <option value=NY>New York</option> <option value=NC>North Carolina</option> <option value=ND>North Dakota</option> <option value=OH>Ohio</option> <option value=OK>Oklahoma</option> <option value=OR>Oregon</option> <option value=PA>Pennsylvania</option> <option value=RI>Rhode Island</option> <option value=SC>South Carolina</option> <option value=SD>South Dakota</option> <option value=TN>Tennessee</option> <option value=TX>Texas</option> <option value=UT>Utah</option> <option value=VT>Vermont</option> <option value=VA>Virginia</option> <option value=WA>Washington</option> <option value=WV>West Virginia</option> <option value=WI>Wisconsin</option> <option value=WY>Wyoming</option> </select><br><br>";

var credit =
"First Name: <input type=text name=first id=fname required><br><br>\
Last Name: <input type=text name=last id=lname required><br><br>\
Address: <input type=text name=last id=lname required><br><br>\
City: <input type=text name=city id=city required><br><br>\
"+ states + "\
Zip: <input type=text name=zipcode id=zcode required><br><br>\
Email Address: <input type=text name=email id=email required><br><br>\
Name on Card: <input type=text name=noc id=noc required><br><br>\
Card Number: <input type=text name=cdnum id=cdnum required><br><br>\
<a href='https://en.wikipedia.org/wiki/Card_security_code' target=_blank>CVV2/CVCC</a>: <input type=text name=cv id=cv required><br><br>\
Expiration Date: <input type=month value=2017-12 min=2017-01 max=12-2020 name=exp id=exp required><br><br>";

var paypal =
"PayPal Email: <input type=email name=ppemail id=ppemail><br><br>\
Password: <input type=password name=pass id=password><br><br>";

function getPage(){
	document.getElementById("payinfo").innerHTML = credit;
	document.getElementById("credit").checked = true;
	document.getElemetnById("paypal").checked = false;
}

function testLength(value, length, exactLength)
{
	if (exactLength == true)
	{
		if (value.length == length)
			return exactLength;
		else
			return false;
	}
	else
	{
		if (value.length >= length)
		{
			exactLength = true;
			return exactLength;
		}
		else
			return false;
	}
}

function testNumber(value)
{
	return (!isNaN(value));
}

function updateForm(control)
{
	if (control.id == "credit")
	{
		document.getElementById("payinfo").innerHTML = credit;
	}
	else if (control.id == "paypal")
	{
		document.getElementById("payinfo").innerHTML = paypal;
	}
}
/*
function validateControl(control, name, length)
{
	if (!testLength(control, length, true)
	{
		alert(name + " is not the appropriate length.");
		return false;
	}
	if (!testNumber(control)
	{
		alert("Please enter a number.");
		return false;
	}
	
	if (testLength(control, length, true) && testNumber(control))
		return true;
	else
		return false;
}

function validateCreditCard(value)
{
	var digit = value.charAt(0);
	value = value.replace(/\s\g,'');
	
	if (testNumber)
	{
		if (digit == 3)
		{
			if (testLength(value, 15, true))
				return true;
			else
			{
				alert("Please enter a valid credit card number.");
				return false;
			}
		else if (digit == 6 || digit == 5 || digit == 4)
			if (testLength(value,16,true)
				return true;
			else
			{
				alert("Please enter a valid credit card number.");
				return false;
			}
		}
		else
		{
			alert("Please enter a valid credit card number.");
			return false;
		}
	}
	else
	{
		alert("Please enter a valid credit card number.");
		return false;
	}
}

function validDate(value)
{
	var date = document.getElementById("exp").value;
	var verify = new Date(date);
	var today = new Date();
	var timeStamp = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
	today.setHours(0,0,0,0);
	
	if (timestamp < varDate)
	{
		alert("Expiration date cannot be before today's date.");
		return false;
	}
	else if (timeStamp > varDate)
		return true;
}

function validPassword(value, minLength)
{
	if (testLength(value,10,false))
		return true;
	else
	{
		alert("Please enter a password at least 10 characters long.");
		return false;
	}
}

function validateForm()
{
}*/