const { useState } = React;

function PortfolioRating() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#e2f5ec', borderRadius: '12px', margin: '40px auto', maxWidth: '600px', border: '1px solid #b7e4c7' }}>
        <h3 style={{ color: '#2d6a4f', margin: '0 0 10px 0', fontSize: '1.8rem' }}>Thank you! 🎉</h3>
        <p style={{ color: '#40916c', margin: 0, fontSize: '1.1rem' }}>
          You rated this portfolio {rating} out of 5 stars. I appreciate the feedback!
        </p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f8f9fa', borderRadius: '12px', margin: '40px auto', maxWidth: '600px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <h3 style={{ fontSize: '1.8rem', margin: '0 0 10px 0', color: '#212529' }}>Enjoying my portfolio?</h3>
      <p style={{ color: '#6c757d', margin: '0 0 20px 0', fontSize: '1.1rem' }}>Let me know how I did! Your feedback helps me improve.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button 
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2.5rem',
              cursor: 'pointer',
              color: star <= (hoveredRating || rating) ? '#FFD700' : '#dee2e6',
              transition: 'all 0.2s ease',
              padding: '0',
            }}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<PortfolioRating />);
