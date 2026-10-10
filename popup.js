// popup.js
document.getElementById('findVideos').addEventListener('click', () => {
  chrome.storage.local.get('videoUrls', (data) => {
      const videoList = document.getElementById('videoList');
      videoList.innerHTML = ''; // Clear previous results

      if (data.videoUrls && data.videoUrls.length > 0) {
          data.videoUrls.forEach(video => {
              const li = document.createElement('li');
              li.textContent = video;
              videoList.appendChild(li);
          });
      } else {
          videoList.innerHTML = '<li>No videos found.</li>';
      }
  });
});

document.getElementById('clearVideos').addEventListener('click', () => {
  // Clear the stored video URLs
  chrome.storage.local.set({ videoUrls: [] }, () => {
      const videoList = document.getElementById('videoList');
      videoList.innerHTML = '<li>All videos cleared.</li>'; // Update the UI
  });
});