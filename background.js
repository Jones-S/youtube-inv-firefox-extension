console.log('🪦 — Never see youtube ads again!');
// YouTube to inv.nadeko.net redirector
// This script intercepts YouTube URLs and redirects them to Invidious

// Function to extract video ID from various YouTube URL formats
function extractVideoId(url) {
  try {
    const urlObj = new URL(url);
    
    // Standard youtube.com/watch?v=VIDEO_ID
    if (urlObj.hostname.includes('youtube.com') && urlObj.pathname === '/watch') {
      return urlObj.searchParams.get('v');
    }
    
    // Short format youtu.be/VIDEO_ID
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1).split('?')[0];
    }
    
    // Embedded format youtube.com/embed/VIDEO_ID
    if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.startsWith('/embed/')) {
      return urlObj.pathname.split('/')[2].split('?')[0];
    }
    
    // Shorts format youtube.com/shorts/VIDEO_ID
    if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.startsWith('/shorts/')) {
      return urlObj.pathname.split('/')[2].split('?')[0];
    }
    
    return null;
  } catch (e) {
    console.error('Error parsing URL:', e);
    return null;
  }
}

// Listen for web requests to YouTube
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const videoId = extractVideoId(details.url);
    
    if (videoId) {
      // Redirect to inv.nadeko.net with the video ID
      const invidiousUrl = `https://inv.nadeko.net/watch?v=${videoId}`;
      console.log(`Redirecting ${details.url} to ${invidiousUrl}`);
      return { redirectUrl: invidiousUrl };
    }
    
    // If no video ID found, allow the request to proceed normally
    return {};
  },
  {
    urls: [
      "*://*.youtube.com/watch?*",
      "*://*.youtube.com/embed/*",
      "*://*.youtube.com/shorts/*",
      "*://youtu.be/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);

console.log('YouTube to Invidious redirector loaded');