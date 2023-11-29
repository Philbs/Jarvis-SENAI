function changeIcon() {
    const button = document.getElementById("capture");
    button.innerHTML = "<i class='fas fa-volume-up'></i>";
  }
  
  document.getElementById("capture").addEventListener("click", changeIcon);
  
  function changeIconBack() {
    const button = document.getElementById("capture");
    button.innerHTML = "<i class='fas fa-microphone'></i>";
  }
  
  setTimeout(changeIconBack, 2000);
    
