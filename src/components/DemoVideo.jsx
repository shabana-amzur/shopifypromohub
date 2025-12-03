
function DemoVideo() {
  return (
    <section className="demo-video" style={{background: '#fff', padding: '40px 0', textAlign: 'center'}}>
      <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#ff9800', marginBottom: 24}}>See It In Action</h2>
      <div style={{maxWidth: 720, margin: '0 auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(67,234,109,0.08)'}}>
        <iframe
          width="100%"
          height="405"
          src="https://www.youtube.com/embed/0ZAAQGUqua0"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default DemoVideo;
