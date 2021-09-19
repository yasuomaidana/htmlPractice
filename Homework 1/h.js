$(document).ready(()=>{
    loadLinks();
});
loadLinks=()=>{
    let links="";
    for(let i=1;i<=4;i++){
        links+=`<a href="https://www.google.com/search?q=link+${i}" target="_blank">Link ${i}</a>&nbsp;`;
    }
    $("header nav").html(links);
}