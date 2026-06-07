(async () => {

    console.log("[Layer 4] Submission Phase");

    const API_KEY = "sa_f553c1414240d24b271cca89aa4d8ad3e4d393a18d32e0874f00ffec89af9a90";
    const BASE_URL = "https://ca-seassessment-api-dev.happywater-190f264d.northcentralus.azurecontainerapps.io";

    const payload = {
        layer: 4,
        status: "completed",
        metadata: {
            anomalies_detected: true,
            dataset_type: "synthetic_telemetry"
        },
        answer: "REPLACE_WITH_FINAL_RESULT"
    };

    const res = await fetch(`${BASE_URL}/api/v1/submit`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    console.log("Response Status:", res.status);
    console.log(await res.text());

})();