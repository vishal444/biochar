import type { CSSProperties } from 'react';

export default function BiocharPage() {
  const styles: { [key: string]: CSSProperties } = {
    // Full-width container with gradient background
    container: {
  width: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(to bottom, #d0f0c0, #e0f5d9, #d0f0c0)',
  boxSizing: 'border-box',
  padding: '40px 20px', // padding on left/right ensures no overflow
},
    // Wrapper to center content and constrain width
    contentWrapper: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
    },
    section: { marginBottom: 40, textAlign: 'center' },
    cardSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 32,
      marginBottom: 40,
    },
    card: {
      background: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: 16,
      padding: 24,
      boxSizing: 'border-box',
    },
    h1: { fontSize: 48, fontWeight: 800, color: '#047857', marginBottom: 16 },
    h2: { fontSize: 32, fontWeight: 600, color: '#047857', marginBottom: 12 },
    h3: { fontSize: 24, fontWeight: 500, color: '#065f46', marginBottom: 8 },
    p: { fontSize: 16, color: '#374151' },
    ul: { listStyleType: 'disc', paddingLeft: 20, textAlign: 'left', color: '#374151' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Hero Section */}
        <section style={styles.section}>
          <h1 style={styles.h1}>Biochar: Transforming Soil & Climate</h1>
          <p style={styles.p}>
            Biochar is a sustainable, carbon-rich material improving soil health, increasing crop yields, and helping reduce climate impact.
          </p>
        </section>

        {/* Info Cards */}
        <section style={styles.cardSection}>
          <div style={styles.card}>
            <h2 style={styles.h2}>What Is Biochar?</h2>
            <p style={styles.p}>
              Biochar is produced through pyrolysis—heating organic material in low oxygen. Its porous structure and high surface area make it excellent for soil enhancement and long-term carbon storage.
            </p>
          </div>
          <div style={styles.card}>
            <h2 style={styles.h2}>How Biochar Is Made</h2>
            <ul style={styles.ul}>
              <li>Biomass feedstock preparation</li>
              <li>Low-oxygen pyrolysis heating</li>
              <li>Gas and vapor release</li>
              <li>Carbon-rich char formation</li>
              <li>Cooling and activation</li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={styles.cardSection}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Benefits of Biochar</h2>
            <div>
              <h3 style={styles.h3}>Agricultural</h3>
              <ul style={styles.ul}>
                <li>Improves fertility</li>
                <li>Boosts water retention</li>
                <li>Enhances nutrient uptake</li>
                <li>Supports soil microbes</li>
              </ul>
              <h3 style={styles.h3}>Environmental</h3>
              <ul style={styles.ul}>
                <li>Long-term carbon sequestration</li>
                <li>Reduces greenhouse gas emissions</li>
                <li>Recycles organic waste</li>
              </ul>
              <h3 style={styles.h3}>Economic</h3>
              <ul style={styles.ul}>
                <li>Lower fertilizer costs</li>
                <li>Higher crop yields</li>
                <li>Supports green job growth</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Applications & Usage */}
        <section style={styles.cardSection}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Applications of Biochar</h2>
            <ul style={styles.ul}>
              <li>Agriculture: Soil amendment, compost enhancer</li>
              <li>Urban: Landscaping, green roofs</li>
              <li>Industrial: Filtration, construction additives</li>
              <li>Livestock: Bedding & odor reduction</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h2 style={styles.h2}>How to Use Biochar</h2>
            <ul style={styles.ul}>
              <li><strong>Soil:</strong> Mix 5–10% with compost</li>
              <li><strong>Gardens:</strong> 1 cup per sq. ft</li>
              <li><strong>Compost:</strong> Add 10–15% for odor control & microbe activity</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section style={styles.section}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Contact Us</h2>
            <p style={styles.p}>Have questions or need support regarding biochar products?</p>
            <p style={{ ...styles.p, fontWeight: 500, color: '#065f46' }}>info@biochar.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
