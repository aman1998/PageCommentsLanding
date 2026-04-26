import { ArrowRight, Globe, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SITE_CONFIG } from "@/config/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoEmbedUrl = useMemo(() => {
    const matchedId = SITE_CONFIG.videoUrl.match(
      /(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    )?.[1];
    if (!matchedId) return "";
    return `https://www.youtube-nocookie.com/embed/${matchedId}?autoplay=1&rel=0`;
  }, []);
  const handlePlayDemo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden px-6 pb-24 pt-14 lg:pb-28 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_62%)]" />
      <div className="pointer-events-none absolute -left-12 top-32 hidden h-56 w-56 rounded-full bg-emerald-300/25 blur-3xl lg:block" />
      <div className="pointer-events-none absolute right-8 top-24 hidden h-56 w-56 rounded-full bg-sky-300/25 blur-3xl lg:block" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="max-w-2xl">
              <Badge className="mb-7 border-sky-200 bg-sky-50/70 text-sky-700">
                Chrome extension for website reviews
              </Badge>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 lg:text-7xl">
                Review websites directly on the page.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:text-xl">
                Pin comments to real page elements, add screenshots, and export
                a clean PDF report without switching tools.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  onClick={() => window.open(SITE_CONFIG.appUrl, "_blank")}
                  size="lg"
                  className="h-12 rounded-full px-6 text-base shadow-lg shadow-emerald-500/30"
                >
                  <Globe size={18} />
                  Add to Chrome
                </Button>
                {/* <Button
                  onClick={() => router.push("/#demo")}
                  variant="ghost"
                  size="lg"
                  className="h-12 rounded-full px-4 text-slate-700"
                >
                  Watch demo
                  <ArrowRight size={18} />
                </Button> */}
              </div>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Works on localhost, staging, internal tools, and live websites.
              </p>
            </div>

            <div className="relative min-w-0 w-full">
              <div className="absolute -left-10 top-16 hidden h-40 w-40 rounded-full bg-emerald-200/35 blur-3xl lg:block" />
              <div className="absolute -bottom-8 right-6 hidden h-52 w-52 rounded-full bg-sky-200/45 blur-3xl lg:block" />

              <div className="relative mx-auto w-full max-w-[640px] overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 p-2 shadow-2xl shadow-slate-950/10 backdrop-blur sm:rounded-[36px] sm:p-3">
                <div className="group relative w-full overflow-hidden rounded-[22px] border border-slate-200 bg-slate-950 sm:rounded-[30px]">
                  <div className="relative w-full aspect-video sm:aspect-[4/3] sm:min-h-[320px] lg:min-h-[420px]">
                    {isVideoPlaying && videoEmbedUrl ? (
                      <iframe
                        className="h-full w-full"
                        src={videoEmbedUrl}
                        title="PageComments product demo"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <Image
                          src="/screen2.png"
                          alt="Product demo preview"
                          fill
                          sizes="(min-width: 1024px) 46vw, 100vw"
                          className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.015]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/22 to-slate-950/62" />
                        <button
                          type="button"
                          onClick={handlePlayDemo}
                          aria-label="Play product demo inside preview"
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-white/12 text-white shadow-xl shadow-black/25 backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:h-[72px] sm:w-[72px]">
                            <Play
                              size={22}
                              className="ml-0.5 sm:h-[26px] sm:w-[26px]"
                            />
                          </span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-10 bottom-4 h-16 rounded-full bg-white/35 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
