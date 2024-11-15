# FAU StudOn Video Downloader Extension 🎓

A simple browser extension that adds a **Download Video** button to lecture videos on the FAU StudOn portal. This button enables you to download lecture videos directly to your computer with the correct lecture title for easy offline viewing.

## Features
- Adds a "Download Video" button to the video section on the FAU StudOn portal.
- Downloads the video with the lecture title as the filename for organized storage.

## Installation
1. Clone or download this repository to your local machine.
2. Open **Chrome** or **Edge** and go to `chrome://extensions/` (or `edge://extensions/` in Edge).
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the folder containing this extension’s files.

## Usage
1. Log in to the FAU StudOn portal and navigate to a lecture video.
2. You should see a **Download Video** button over the video section.
3. Click the button to download the video with the lecture title as the filename.

## File Structure
- `manifest.json`: Configures the extension and required permissions.
- `content.js`: Injected into the FAU StudOn portal to add the download button and handle video URL and title retrieval.
- `background.js`: Handles the video download request using the Chrome downloads API.

## Permissions
- `downloads`: To download the video to your local machine.
- `activeTab`: To interact with the content on the FAU StudOn video page.

## Notes
- Ensure you have access to the FAU StudOn portal and are logged in to view lecture videos.
- This extension is intended for personal use to allow offline access to lecture materials.

## License
This project is licensed under the MIT License.
