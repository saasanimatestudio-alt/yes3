'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle: string;
  category: string;
  className?: string;
}

export function VideoCard({ videoId, title, subtitle, category, className }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-bg-2 border border-border group cursor-pointer', className)}>
      {isPlaying ? (
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={title}
          />
        </div>
      ) : (
        <div
          className="aspect-video relative overflow-hidden"
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
            onError={(e) => {
              // Fallback to hq thumbnail if maxres unavailable
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          {/* Category badge */}
          <div className="absolute top-5 left-5">
            <span className="text-[11px] tracking-widest uppercase text-accent font-semibold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-accent/30">
              {category}
            </span>
          </div>

          {/* Play button */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-accent flex items-center justify-center shadow-[0_0_0_8px_rgba(184,255,62,0.15),0_10px_40px_rgba(184,255,62,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_12px_rgba(184,255,62,0.2),0_10px_50px_rgba(184,255,62,0.5)]"
            aria-label={`Play ${title}`}
          >
            <Play className="w-6 h-6 text-[#0a0a0a] ml-1" fill="currentColor" />
          </button>

          {/* Info bar */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-serif text-xl font-normal leading-tight mb-1">{title}</h3>
            <p className="text-fg-dim text-sm">{subtitle}</p>
          </div>
        </div>
      )}

      {/* Title below when playing */}
      {isPlaying && (
        <div className="px-5 py-4 border-t border-border flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] tracking-widest uppercase text-accent font-semibold mb-1">{category}</div>
            <h3 className="font-serif text-lg font-normal">{title}</h3>
            <p className="text-fg-muted text-sm">{subtitle}</p>
          </div>
          <button
            onClick={() => setIsPlaying(false)}
            className="text-fg-muted text-xs hover:text-accent transition-colors flex-shrink-0 px-3 py-1.5 border border-border rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
