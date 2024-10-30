const spinnerAnimation = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const Spinner = () => {
  return (
    <>
      <style>{spinnerAnimation}</style> {/* Inject the CSS animation */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}>
        <div style={{ 
          display: 'inline-block', 
          width: '80px', 
          height: '80px', 
          border: '10px solid rgba(0, 0, 0, 0.1)', 
          borderTop: '10px solid #3498db', 
          borderRadius: '50%', 
          animation: 'spin 5s linear infinite' 
        }} />
      </div>
    </>
  );
};

export default Spinner;