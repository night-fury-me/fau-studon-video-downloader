chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const videoUrl = request.url;
    const videoTitle = request.title;
    // console.log(videoTitle, videoUrl)
    chrome.downloads.download({
      url: videoUrl,
      filename: `${videoTitle}.mp4`,
      saveAs: true
    }, downloadId => {
      if (chrome.runtime.lastError) {
        console.error("Download failed:", chrome.runtime.lastError);
        sendResponse("Download failed.");
      } else {
        console.log("Download started with ID:", downloadId);
        sendResponse("Download initiated.");
      }
    });
  
    return true; 
  });
  