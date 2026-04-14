import { useHayc } from '../hayc/config-context';

export default function HomeVideosSection() {
  const { config } = useHayc();
  const sources = config.homePageConfig.videos.sources;

  return (
    <section className="padding-small">
      <div className="container-md">
        <div className="row g-4 justify-content-center">
          {sources.map((src) => (
            <div key={src} className="col-12 col-sm-6 col-lg-4">
              <div className="video-box">
                <video controls playsInline>
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
