window.addEventListener("DOMContentLoaded", () => {


  const btn = document.querySelector("#button");
  const lorem = document.querySelector("#content");

  btn.addEventListener("click", () => {
   if(lorem.classList.toggle("content-hidden")){
     btn.textContent = "Закрить блок"
   }else{
     btn.textContent = "Открить блок";
   }
    
    
   
  });
});
