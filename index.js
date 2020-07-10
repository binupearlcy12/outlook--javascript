deleteDiv2 = () => {
    var e = document.getElementById("section-delete2");
    e.remove();
    secThree();
}
deleteDiv = () => {
    var e = document.getElementById("section-content");
    if (e.style.display === "block") { e.style.display = "none"; }
    elsee.style.display = "block"

}
deleteDiv3 = () => {
    var e = document.getElementById("section-delete3");
    e.remove();
    secfour();
}
deleteDiv4 = () => {
    var e = document.getElementById("section-delete4");
    e.remove();
    secfive();
}
deleteDiv5 = () => {
    var e = document.getElementById("section-delete5");
    e.remove();
    secsix();
}
deleteDiv6 = () => {
    var e = document.getElementById("section-delete6");
    e.remove();
    secseven();
}
deleteDiv7 = () => {
    var e = document.getElementById("section-delete7");
    e.remove();
    seceight();
}
deleteDiv8 = () => {
    var e = document.getElementById("section-delete8");
    e.remove();
    secnine();

}
deleteDiv9 = () => {
    var e = document.getElementById("section-delete9");
    e.remove();
}
dropdown = () => {
    var t = document.getElementById("header-dropdown");
    if (t.style.visibility === "visible") {
        t.style.visibility = "hidden";
    } else t.style.visibility = "visible";
}
allfolder = () => {
    document.getElementById("replace").innerHTML = document.getElementById("all-folder").innerHTML;
}
senditems = () => {
    document.getElementById("replace").innerHTML = document.getElementById("send-items").innerHTML;
}
inbox = () => {
    document.getElementById("replace").innerHTML = document.getElementById("inbox").innerHTML;
}
drafts = () => {
    document.getElementById("replace").innerHTML = document.getElementById("drafts").innerHTML;
}
deleteditems = () => {
    document.getElementById("replace").innerHTML = document.getElementById("deleted-items").innerHTML;
}
archive = () => {
    document.getElementById("replace").innerHTML = document.getElementById("archive").innerHTML;
}
addFavorite = () => {
    document.getElementById("aside-addfavorite").style.visibility = "hidden";
    var a = document.createElement("INPUT");
    a.setAttribute("type", "text");
    a.setAttribute("value", "Search");
    a.setAttribute("style", "padding:10px");
    document.getElementById("aside-addfavorite-wrapper").appendChild(a);

}
favorite = () => {
    var x, i;
    x = document.querySelectorAll(".sub-favorite");
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else x[i].style.display = "none";

    }
}
folder = () => {
    var x, i;
    x = document.querySelectorAll(".sub-folder");
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else x[i].style.display = "none";

    }
}
appLauncher = () => {
    var f = document.getElementById("header-apps-launcher");
    if (f.style.display === "inline-block") { f.style.display = "none" } else f.style.display = "inline-block"
}
inputToggle = () => {
    var a = document.getElementById("header-button-left");
    var b = document.getElementById("header-button-right");
    var c = document.getElementById("header-input");
    var t = document.getElementById("header-search-filter");
    if (a.style.display === "inline-block" && b.style.display === "inline-block") {
        a.style.display = "none";
        b.style.display = "none";
        c.style.backgroundColor = "#B3B3B3";
        t.style.visibility = "hidden";
    } else {
        a.style.display = "inline-block";
        b.style.display = "inline-block";
        c.style.backgroundColor = "white";
        t.style.visibility = "visible";
    }


}

navMessage = () => {
    document.getElementById("section-content").style.display = "none";
    document.getElementById("new-message").style.display = "inline-block";

}
secContent = () => {
    document.getElementById("section-content").style.display = "block";
    document.getElementById("nav-functions").style.visibility = "visible";
}
secTwo = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-winner").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject1").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content1").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-winner-time").innerHTML;

}
secThree = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-plural-sight").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject2").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content2").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-plural-time").innerHTML;

}
secfour = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-listen").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject3").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content3").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-listen-time").innerHTML;

}
secfive = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-data").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject4").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content4").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-data-time").innerHTML;
}
secsix = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-security").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject5").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content5").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-security-time").innerHTML;

}
secseven = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-curry").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject6").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content6").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-curry-time").innerHTML;

}
seceight = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-engage").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject7").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content7").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-engage1-time").innerHTML;
}
secnine = () => {
    secContent ``;
    document.getElementById("new-message").style.display = "none";
    document.getElementById("section=content-head").innerHTML = document.getElementById("heade-engagee").innerHTML;
    document.getElementById("section-header").innerHTML = document.getElementById("subject8").innerHTML;
    document.getElementById("msg-content").innerHTML = document.getElementById("content8").innerHTML;
    document.getElementById("section-content-time").innerHTML = document.getElementById("section-engage2-time").innerHTML;
}
shortContent = () => {
    document.getElementById("short-section").style.display = "block";

    document.getElementById("section-content-detail-wrapper").style.display = "none";
    document.getElementById("header-reduce-section").innerHTML = document.getElementById("section=content-head").innerHTML;
    document.getElementById("section-sub-content").innerHTML = document.getElementById("msg-content").innerHTML;
    document.getElementById("section-time").innerHTML = document.getElementById("section-content-time").innerHTML;
}
relargeSection = () => {
    document.getElementById("short-section").style.display = "none";
    document.getElementById("section-content-detail-wrapper").style.display = "block";
}
navMenu = () => {
    var p = document.getElementById("aside-menu");
    var q = document.getElementById("aside-menu-icons");
    var x = document.getElementById("aside-menu-content");
    if (p.style.width === "15%") {
        p.style.width = "5%";
        q.style.display = "block";
        x.style.display = "none";
    } else {
        p.style.width = "15%";
        q.style.display = "flex";
        x.style.display = "block";
    }
}
crossExit = () => {
    document.getElementById("profile-info").style.visibility = "hidden ";
    document.getElementById("header-profile-info").style.visibility = "hidden";
    document.getElementById("section-content").style.width = "70% ";
}
headerIcon = () => {
    document.getElementById("profile-info").style.visibility = "visible";
    var h = document.getElementById("section-content");
    var y = document.getElementById("profile-info");

    if (y.style.display === "block") {
        y.style.display = "none";
        h.style.width = "75%";
    } else {
        h.style.width = "48%";
        y.style.display = "block";

    }
}
filter = () => {
    var f = document.getElementById("filter-section");
    if (f.style.visibility === "visible") { f.style.visibility = "hidden"; } else
        f.style.visibility = "visible"
}
Calender = () => {
    document.getElementById("header-profile").innerHTML = "Calender ";

    document.getElementById("header-profile-info").innerHTML = "aaa";
    headerIcon ``;
}
Setting = () => {
    document.getElementById("header-profile").innerHTML = "Setting ";
    headerIcon ``;
}
Question = () => {
    document.getElementById("header-profile").innerHTML = "Help ";
    headerIcon ``;
}
Whatsnew = () => {
    document.getElementById("header-profile").innerHTML = "Whats New ";
    document.getElementById("header-profile-info").innerHTML = "bbbb";
    headerIcon ` `;
}
Bell = () => {
    document.getElementById("header-profile").innerHTML = "Notification ";
    document.getElementById("header-profile-info").innerHTML = "bbbb";
    headerIcon ``;
}
Profile = () => {
    document.getElementById("header-profile").innerHTML = "My account ";
    document.getElementById("header-profile-info").style.visibility = "visible";
    headerIcon ``;
}
inboxAside = () => {
    var f = document.getElementById("section-message");
    var g = document.getElementById("section-del-msg");
    var h = document.getElementById("section-send-msg");
    var i = document.getElementById("section-draft-msg");
    var j = document.getElementById("section-junk-msg");
    var k = document.getElementById("section-archive-msg");
    if (f.style.display === "none") {
        f.style.display = "block";
        g.style.display = "none";
        h.style.display = "none";
        i.style.display = "none";
        j.style.display = "none";
        k.style.display = "none";
    } else {
        f.style.display = "none";
    }
}
delAside = () => {
    document.getElementById("section-message").style.display = "none";
    document.getElementById("section-send-msg").style.display = "none";
    document.getElementById("section-del-msg").style.display = "inline-block";
    document.getElementById("section-draft-msg").style.display = "none";
    document.getElementById("section-junk-msg").style.display = "none";
    document.getElementById("section-archive-msg").style.display = "none";
}
sendAside = () => {
    document.getElementById("section-message").style.display = "none";
    document.getElementById("section-del-msg").style.display = "none";
    document.getElementById("section-send-msg").style.display = "inline-block";
    document.getElementById("section-draft-msg").style.display = "none";
    document.getElementById("section-junk-msg").style.display = "none";
    document.getElementById("section-archive-msg").style.display = "none";
}
draftAside = () => {
    document.getElementById("section-message").style.display = "none";
    document.getElementById("section-del-msg").style.display = "none";
    document.getElementById("section-send-msg").style.display = "none";
    document.getElementById("section-draft-msg").style.display = "inline-block";
    document.getElementById("section-junk-msg").style.display = "none";
    document.getElementById("section-archive-msg").style.display = "none";
}
junkAside = () => {
    document.getElementById("section-message").style.display = "none";
    document.getElementById("section-del-msg").style.display = "none";
    document.getElementById("section-send-msg").style.display = "none";
    document.getElementById("section-draft-msg").style.display = "none";
    document.getElementById("section-junk-msg").style.display = "inline-block";
    document.getElementById("section-archive-msg").style.display = "none";
}
archiveAside = () => {
    document.getElementById("section-message").style.display = "none";
    document.getElementById("section-del-msg").style.display = "none";
    document.getElementById("section-send-msg").style.display = "none";
    document.getElementById("section-draft-msg").style.display = "none";
    document.getElementById("section-archive-msg").style.display = "inline-block";
    document.getElementById("section-junk-msg").style.display = "none";
}