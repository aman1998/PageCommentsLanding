"use client";

const VideoDemo = () => {
  return (
    <div className="relative w-full aspect-video bg-slate-950">
      <video
        className="h-full w-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        // poster="/screens/es/screen-1.png"
        // controls
        // controlsList="nodownload noplaybackrate"
        // disablePictureInPicture
        aria-label="Product demo video"
      >
        <source src="/video/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoDemo;
