// ---------------------- UPDATE THIS INFORMATION ----------------------
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

var autofill = 
`
{
    "meetings_and_events": {
        "project_meetings": {
            "dates": [
                "Wednesdays 5:30pm",
                "Thursdays 5:30pm"
            ],
            "location": "TBE-B 162"
        },
        "general_meetings": {
            "dates": [
                "Date 1",
                "Date 2",
                "Date 3"
            ],
            "location": "Great Hall"
        },
        "upcoming_launches": {
            "dates": [
                "2/15/2020",
                "3/20/2020",
                "4/18/2020"
            ],
            "location": "Jean Roach Dry lake"
        }
    }, 
    "contact": {
        "email": {
            "url": "seds@unlv.edu"
        },
        "instagram": {
            "url": "https://www.instagram.com/sedsunlv/"
        },
        "facebook": {
            "url": "https://www.facebook.com/sedsunlv/"
        },
        "youtube": {
            "url": "https://www.youtube.com/channel/UCsZVNjRN5Dt3QDY0_PHx53A"
        },
        "address": "SEDS UNLV 4505 S. Maryland Pkwy MS 4027, Las Vegas NV 89154"
    }
}

`
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ---------------------- UPDATE THIS INFORMATION ----------------------


// Don't touch code below
var autofill_json = JSON.parse(autofill);

function populateDateLocation(jsonpath, id_name){
    for (let i = 0; i < (jsonpath.dates).length; i++) {
        var list_item = document.createElement("li");
        var text_node = document.createTextNode(jsonpath.dates[i]);
        list_item.appendChild(text_node);
        var parent_element = document.getElementById(id_name);
        parent_element.appendChild(list_item);
    }
    
    var list_item = document.createElement("li");
    var text_node = document.createTextNode("Location: " + jsonpath.location);
    list_item.appendChild(text_node);
    var parent_element = document.getElementById(id_name);
    parent_element.appendChild(list_item);
}

// Populating project_meetings
if (document.getElementById("project_meetings")){
    populateDateLocation(autofill_json.meetings_and_events.project_meetings, "project_meetings");
}

// Populating general_meetings
if (document.getElementById("general_meetings")){
    populateDateLocation(autofill_json.meetings_and_events.general_meetings, "general_meetings");
}

// Populating upcoming_launches
if (document.getElementById("upcoming_launches")){
    populateDateLocation(autofill_json.meetings_and_events.upcoming_launches, "upcoming_launches");
}

//  ---------------------- Contact Page ----------------------

var email_tag = document.getElementById('email_address');
email_tag.href = "mailto:" + autofill_json.contact.email.url
var text_node = document.createTextNode(autofill_json.contact.email.url)
email_tag.appendChild(text_node)

var ig_tag = document.getElementById('instagram_icon_link');
ig_tag.href = autofill_json.contact.instagram.url

var fb_tag = document.getElementById('facebook_icon_link');
fb_tag.href = autofill_json.contact.facebook.url

var yt_tag = document.getElementById('youtube_icon_link');
yt_tag.href = autofill_json.contact.youtube.url
