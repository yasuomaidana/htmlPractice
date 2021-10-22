function onHover(element){
    let _class = element.className;
    _class=_class.replace("beige","gray")
    element.className=_class;
}
function onLeave(element){
    let _class = element.className;
    _class=_class.replace("gray","beige");
    element.className=_class;
    let img = element.getElementsByTagName("div").item(0).getElementsByTagName("img").item(0);
    if(img!=null) img.remove();
}
function imgOn(element){
    let link = element.getAttribute("src");
    replace(link);
}
function replace(imageurl){
    var container = document.getElementById("shower").getElementsByTagName("div").item(0);
    let notcontains = container.getElementsByTagName("img").length==0;
    var img = (notcontains) ? document.createElement("img"):container.getElementsByTagName("img").item(0);
    img.src = imageurl;
    if(notcontains) container.append(img);
}