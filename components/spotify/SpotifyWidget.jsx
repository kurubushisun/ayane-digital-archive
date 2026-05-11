"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

/**
 * Spotify Embed Widget
 * now.json の spotify.embeds 配列に Spotify URL を追加すると iframe で埋め込まれます。
 * API 認証不要で、プレイリスト・アルバム・トラックを表示・再生できます。
 */
export default function SpotifyWidget({ profileUrl, embeds = [] }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Spotify プロフィールリンク */}
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-[#1DB954]/30 bg-[#1DB954]/10 px-4 py-3 transition-all hover:bg-[#1DB954]/20 hover:shadow-md hover:shadow-[#1DB954]/10"
      >
        <svg viewBox="0 0 24 24" className="size-6 shrink-0 fill-[#1DB954]">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <div className="min-w-0">
          <p className="text-sm font-medium text-[#1DB954]">My Spotify</p>
          <p className="truncate text-[10px] text-muted-foreground">
            フォローしてね ♪
          </p>
        </div>
        <ExternalLink className="ml-auto size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </a>

      {/* Spotify 埋め込みプレーヤー */}
      {embeds.map((embed, i) => (
        <motion.div
          key={embed.url}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.35 }}
          className="overflow-hidden rounded-xl"
        >
          {embed.label && (
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {embed.label}
            </p>
          )}
          <iframe
            src={toEmbedUrl(embed.url, embed.theme)}
            width="100%"
            height={embed.height || (embed.type === "track" ? 152 : 352)}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
            title={embed.label || "Spotify Player"}
          />
        </motion.div>
      ))}

      {embeds.length === 0 && (
        <p className="text-xs text-muted-foreground">
          now.json の spotify.embeds にプレイリストやトラックの URL を追加すると、
          ここに埋め込みプレーヤーが表示されます。
        </p>
      )}
    </div>
  );
}

/**
 * Spotify の通常 URL → Embed URL に変換
 * 例: https://open.spotify.com/playlist/xxxxx → https://open.spotify.com/embed/playlist/xxxxx
 */
function toEmbedUrl(url, theme = "0") {
  try {
    const u = new URL(url);
    // 既に embed URL ならそのまま
    if (u.pathname.startsWith("/embed/")) {
      return url;
    }
    // /playlist/xxx, /track/xxx, /album/xxx → /embed/playlist/xxx ...
    const embedPath = "/embed" + u.pathname;
    return `https://open.spotify.com${embedPath}?utm_source=generator&theme=${theme}`;
  } catch {
    return url;
  }
}
