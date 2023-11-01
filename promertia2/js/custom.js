const titles = [
    "Designing 🎨🖌️",
    "Marketing 💰💸",
    "Managment 📈📞",
    "Production 📽️🎬",
    "Development 🛠️🧑‍💻",
    "Promertia",
    // Add more titles as needed
  ];
  
  let titleIndex = 0;
  let intervalId; // To store the interval ID
  
  function rotateTitles() {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
  }
  
  function startTitleRotation() {
    intervalId = setInterval(rotateTitles, 2500); // Change titles every 3 seconds
  }
  
  function stopTitleRotation() {
    clearInterval(intervalId);
  }
  
  // Check page visibility
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Tab is not active, start title rotation
      startTitleRotation();
    } else {
      // Tab is active, stop title rotation and reset to default title
      stopTitleRotation();
      document.title = "Promertia";
    }
  });
  
  // Initial call to check the page visibility
  if (document.hidden) {
    startTitleRotation();
  }
       
  


//cursor js

  document.addEventListener("mousemove", (e) => {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
}); 