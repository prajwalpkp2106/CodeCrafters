function showscheme(){
  var scheme = document.getElementById("scheme-list");
  var loan = document.getElementById("loan-list");
  var news = document.getElementById("news-list");
  if(scheme.style.display==="none"){
    scheme.style.display = "flex";
    news.style.display="none";
    loan.style.display="none";
  }
  else{
    scheme.style.display="flex";
    news.style.display="none";
    loan.style.display="none";
  }
}

function shownews(){
  var scheme = document.getElementById("scheme-list");
  var loan = document.getElementById("loan-list");
  var news = document.getElementById("news-list");
  if(news.style.display==="none"){
    news.style.display = "flex";
    scheme.style.display="none";
    loan.style.display="none";
  }
  else{
    news.style.display="flex";
    scheme.style.display="none";
    loan.style.display="none";
  }
}

function showloan(){
  var scheme = document.getElementById("scheme-list");
  var loan = document.getElementById("loan-list");
  var news = document.getElementById("news-list");
  if(loan.style.display==="none"){
    loan.style.display = "flex";
    scheme.style.display="none";
    news.style.display="none";
  }
  else{
    loan.style.display="flex";
    scheme.style.display="none";
    news.style.display="none";
  }
}