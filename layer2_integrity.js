(() => {
    const data = window.records;

    if (!data) {
        console.log("No dataset found");
        return;
    }

    console.log("[Layer 2] Integrity Verification");

    const invalid = data.filter(r =>
        !r.endpoint || !r.method || r.status_code == null
    );

    console.log("Total Records:", data.length);
    console.log("Invalid Records:", invalid.length);

    const statusMap = data.reduce((acc, r) => {
        acc[r.status_code] = (acc[r.status_code] || 0) + 1;
        return acc;
    }, {});

    console.table(statusMap);
})();