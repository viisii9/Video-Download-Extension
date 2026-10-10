let videoUrls = [];

// Function to check if a URL is a video
function isVideoUrl(url) {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.m3u8', '.mov', '.avi', '.mpd'];
    
    // Check for file extensions
    const hasVideoExtension = videoExtensions.some(ext => url.includes("mpd"));
    
    // Check for specific path (e.g., '/video/')
    const hasVideoPath = url.includes('/video/');

    return hasVideoExtension || hasVideoPath;
}

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const url = details.url;

        if (isVideoUrl(url)) {
            videoUrls.push(url);
            chrome.storage.local.set({ videoUrls });
        }
    },
    { urls: ["<all_urls>"] }
);