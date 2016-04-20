
var sponsors = [
 {"name": "Microsoft",
  "url": "http://www.microsoft.com",
  "logo": "sponsors/logos/MSFT.png",
  "what": "Conference Dinner"
 },
 {"name": "Google",
  "url": "http://www.google.com",
  "logo": "sponsors/logos/googlelogo_light_clr_160x56pxx.png",
  "what": "Welcome Dinner" 
 },
 {"name": "Gigya",
  "url": "http://www.gigya.com",
  "logo": "sponsors/logos/gigya.jpg",
  "what": "Barista"
 },
 {"name": "VMWare",
  "url": "https://www.vmware.com/",
  "logo": "sponsors/logos/vmware.png",
  "what": "BBQ Lunch"
 },
 {"name": "digi.me",
  "url": "https://digi.me",
  "logo": "sponsors/logos/digi.me-logo.png",
  "what": "Tables and Power"
 },
 {"name": "Kantara",
  "url": "https://kantarainitiative.org/",
  "logo": "sponsors/logos/logo_kantara.gif",
  "what": "Projectors"
 },
 {"name": "ForgeRock",
  "url": "https://www.forgerock.com/",
  "logo": "sponsors/logos/forgerock.png",
  "what": "Conference Reception"
 },
 {"name": "Janrain",
  "url": "https://www.janrain.com/",
  "logo": "sponsors/logos/janrain.png",
  "what": "Opening Reception"
 },
 {"name": "Yubico",
  "url": "https://www.yubico.com/", 
  "logo": "sponsors/logos/yubico.png",
  "what": "Afternoon Break"
 },
 {"name": "AOL",
  "url": "https://www.aol.com/", 
  "logo": "sponsors/logos/Aol.white.png",
  "what": "Afternoon Break"
 },
 {"name": "WSO2",
  "url": "https://www.wso2.com/", 
  "logo": "sponsors/logos/wso2.png",
  "what": "Morning Break"
 },
 {"name": "Cirrus Identity",
  "url": "http://www.cirrusidentity.com/",
  "logo": "sponsors/logos/cirrusidentity.png",
  "what": "Doc Center"
 },
 {"name": "Identity.com",
  "url": "http://www.identity.com",
  "logo": "sponsors/logos/iD_logo_vertical.png",
  "what": "Open Space Gifting"
 }
 // {"name": "Mozilla Foundation",
 //  "url": "https://www.mozilla.org",
 //  "logo": "sponsors/logos/mozilla_wordmark.png",
 //  "what": "Tables & Power, Welcome Reception" 
 // },
 // {"name": "Nexus Group",
 //  "url": "https://www.nexusgroup.com/",
 //  "logo": "sponsors/logos/nexus.jpeg",
 //  "what": "Barista"
 // },
 //  {"name": "OASIS ID Trust",
 //  "url": "http://www.oasis-idtrust.org/",
 //  "logo": "sponsors/logos/idtrust-logo.png",
 //  "what": "Indian Lunch"
 // },
 // {"name": "SailPoint Technologies",
 //  "url": "https://www.sailpoint.com/",
 //  "logo": "sponsors/logos/SailPoint.png",
 //  "what": "Conference Reception"
 // },
 // {"name": "Covisint",
 //  "url": "http://www.covisint.com/",
 //  "logo": "sponsors/logos/covisint-logo.png",
 //  "what": "Lightening Demos"
 // },
 // {"name": "AVG",
 //  "url": "https://www.avg.com/",
 //  "logo": "sponsors/logos/avg-icon.png",
 //  "what": "Morning Breaks"
 // },
 // {"name": "Welcomer",
 //  "url": "http://www.welcomer.me",
 //  "logo": "sponsors/logos/welcomer-logo.png",
 //  "what": "Open Space Gifting"
 // }
];

var sponsors_old = [
 {"name": "Neustar",
  "url": "http://www.neustar.com",
  "logo": "sponsors/logos/neustar.png",
  "what": "Barista"
 },
 {"name": "Nexus Group",
  "url": "https://www.nexusgroup.com/",
  "logo": "sponsors/logos/nexus.jpeg",
  "what": "Tuesday Reception"
 },
 {"name": "Yubico",
  "url": "https://www.yubico.com/", 
  "logo": "sponsors/logos/yubico.png",
  "what": "Afternoon Break"
 }



/*-----
,
 {"name": "",
  "url": "",
  "logo": "sponsors/logos/",
  "what": "",
  "color": ""
 }

-----*/


];

var colors = [
    "tile-teal",
    "tile-blue",
    "tile-pink",
    "tile-sun-flower",
    "tile-wisteria",
    "tile-carrot"
];


$( document ).ready(function() {

    var source   = $("#sponsor-template").html();
    var template = Handlebars.compile(source);
 
    var count = 0;
    jQuery.each(sponsors, function(index,value) {
	value["color"] = colors[count++ % 6];
	$("div[id='sponsors']").append(template(value)); 
    });

 
});
