/**
 * Lazy HLS loader — dynamically imports hls.js only when needed,
 * keeping the initial bundle small for fast first paint on free-tier hosting.
 */
const HLS_URL = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export async function attachHls(video: HTMLVideoElement): Promise<void> {
  // Safari supports HLS natively — no library needed
  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = HLS_URL;
    video.play().catch(() => {});
    return;
  }

  // Dynamically import hls.js (508KB saved from initial bundle)
  const { default: Hls } = await import("hls.js");

  if (Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true,
      maxBufferLength: 10,
      maxMaxBufferLength: 30,
      startLevel: -1,
    });
    hls.loadSource(HLS_URL);
    hls.attachMedia(video);

    // CRITICAL: Must wait for manifest to parse, then trigger play
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(() => {});
    });
  }
}
