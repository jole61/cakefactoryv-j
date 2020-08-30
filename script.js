
document.getElementById("btnScroll").addEventListener("click", function () {
   document.getElementById('onama').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
});
