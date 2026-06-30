// Copies the equivalent YouTube URL to clipboard after redirect to Invidious
const params = new URLSearchParams(window.location.search);
const videoId = params.get('v');
if (videoId) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
  navigator.clipboard.writeText(youtubeUrl).catch(err => {
    console.error('Failed to copy YouTube URL to clipboard:', err);
  });
}
