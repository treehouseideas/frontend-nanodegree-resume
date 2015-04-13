var name = "Paolo Liwanag";
var role = "Web Developer";
var mobile = "(562) 668-0325";
var email = "liwanag.paolo@gmail.com"
var twitter = "code_paolo"
var github = "treehouseideas"
var blog =  "http://paolo.webhop.me/"
var location1= "O.C."

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


var formattedEmail = HTMLemail.replace("%data%", email);
var formattedMobile = HTMLmobile.replace("%data%", mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
var formattedGithub = HTMLgithub.replace("%data%", github);
var formattedBlog = HTMLblog.replace("%data%", blog);
var formattedLocation = HTMLlocation.replace("%data%", location1);

$("#header").prepend(formattedName, formattedRole);
//$("#header").prepend(formattedRole);

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);