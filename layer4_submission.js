(async () => {

    

    const API_KEY = "sa_f553c1414240d24b271cca89aa4d8ad3e4d393a18d32e0874f00ffec89af9a90";

    const BASE_URL = "https://ca-seassessment-api-dev.happywater-190f264d.northcentralus.azurecontainerapps.io/";

    const payload = {
        type: "repo",
        value: "https://github.com/Meghanaganji/Engineering-assessment-Meridian",
        notes: "Complete assessment submission with all 4 layers and documentation"
    };

    try {
        const res = await fetch(`${BASE_URL}/api/v1/submit`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const text = await res.text();

        console.log(" Status:", res.status);
        console.log(" Response:", text);

    } catch (err) {
        console.error("Submission failed:", err);
    }

})();