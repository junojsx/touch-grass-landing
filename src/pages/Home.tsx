export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h1>Touch Grass</h1>
        <p className="hero__tagline">
          Task-based app shielding for iOS. Stay focused, then step outside.
        </p>
        <p className="hero__desc">
          Touch Grass helps you complete meaningful tasks before unlocking distracting apps.
          Set a goal, get it done, then enjoy your screen time—or better yet, go touch grass.
        </p>
        <div className="hero__cta">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      <section className="features">
        <h2>How it works</h2>
        <ul>
          <li><strong>Set tasks</strong> — Define what you need to do before using selected apps.</li>
          <li><strong>App shielding</strong> — Block access until your tasks are completed.</li>
          <li><strong>Earn access</strong> — Unlock your apps only after you’ve made progress.</li>
        </ul>
      </section>
    </div>
  );
}
