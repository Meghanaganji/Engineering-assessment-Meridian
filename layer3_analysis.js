(() => {
    const data = window.records;

    console.log("[Layer 3] Decryption + Analysis Pipeline");

    const processed = data.map(r => ({
        endpoint: r.endpoint,
        method: r.method,
        status: r.status_code,
        latency: r.latency || 0,
        bytes: r.bytes || 0,
        score: (r.latency || 0) + (r.bytes || 0)
    }));

    const anomalies = processed.filter(r => r.status === 401);

    console.log("401 anomaly count:", anomalies.length);

    const freq = {};
    processed.forEach(r => {
        const key = `${r.method}_${r.status}`;
        freq[key] = (freq[key] || 0) + 1;
    });

    console.table(freq);

    // ranking
    const ranked = processed.sort((a, b) => b.score - a.score);

    console.log("Top 10 ranked records:");
    console.table(ranked.slice(0, 10));
})();