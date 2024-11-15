const videoElement = document.querySelector("video");

if (videoElement) {
  const videoUrl = videoElement.getAttribute("src");

  // Locate the video title
  const titleElement = document.querySelector("h1.media-heading");
  const videoTitle = titleElement ? titleElement.innerText.trim() : "lecture_video";

  // Create a "Download" button
  const downloadButton = document.createElement("button");
  downloadButton.innerText = "Download Video";
  downloadButton.style.position = "absolute";
  downloadButton.style.top = "10px";
  downloadButton.style.right = "10px";
  downloadButton.style.padding = "10px 20px";
  downloadButton.style.backgroundColor = "#ff4500";
  downloadButton.style.color = "white";
  downloadButton.style.border = "none";
  downloadButton.style.borderRadius = "5px";
  downloadButton.style.cursor = "pointer";
  downloadButton.style.zIndex = "1000";

  // Add a click event listener to the button
  downloadButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({url: videoUrl, title: videoTitle}, (response) => {
      console.log("Download response:", response);
    });
  });

  // Insert the button into the video's parent container
  const videoContainer = document.querySelector(".ilInteractiveVideoPlayerContainer");
  videoContainer.style.position = "relative"; 
  videoContainer.appendChild(downloadButton);
} 
else {
  console.warn("No video element found on this page.");
}
