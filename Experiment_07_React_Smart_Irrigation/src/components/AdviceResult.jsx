function AdviceResult({ advice, soilMoisture, temperature }) {
 const status = soilMoisture < 30 ? 'Irrigation may be needed' : soilMoisture <= 65 ? 'Moisture level looks moderate' : 'Soil moisture is high';
 return <section className="result-card" aria-live="polite"><div className="result-topline"><span className="status-dot"/> ADVISORY RESULT</div><h2>{advice.title}</h2><p>{advice.description}</p><div className="result-metrics"><div><span>Soil moisture</span><strong>{soilMoisture}%</strong></div><div><span>Temperature</span><strong>{temperature}°C</strong></div></div><div className="recommendation"><span>✦</span><div><strong>{status}</strong><p>{advice.action}</p></div></div></section>;
}
export default AdviceResult;