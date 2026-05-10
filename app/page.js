import { SiteHeader } from "@/components/SiteHeader";
import { TagStrip } from "@/components/TagStrip";
import { HeroBand } from "@/components/sections/HeroBand";
import { RootsSection } from "@/components/sections/RootsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ArtifactsSection } from "@/components/sections/ArtifactsSection";
import { NowSection } from "@/components/sections/NowSection";
import { VlogSection } from "@/components/sections/VlogSection";
import site from "@/data/site.json";
import roots from "@/data/roots.json";
import journey from "@/data/journey.json";
import artifacts from "@/data/artifacts.json";
import now from "@/data/now.json";
import vlog from "@/data/vlog.json";

export default function HomePage() {
  return (
    <>
      <SiteHeader title={site.title} tagline={site.tagline} />
      <main>
        <HeroBand hero={site.hero} />
        <TagStrip tags={site.tags} />
        <RootsSection data={roots} />
        <JourneySection data={journey} />
        <ArtifactsSection data={artifacts} />
        <NowSection data={now} />
        <VlogSection data={vlog} />
      </main>
      <footer className="border-t border-border/80 bg-muted/40 py-12 text-center">
        <p className="font-serif text-sm text-foreground">
          Ayane&apos;s Digital Archive
        </p>
        <p className="mt-2 font-mono text-[11px] text-muted-foreground">
          コンテンツは /data の JSON から読み込み
        </p>
      </footer>
    </>
  );
}
