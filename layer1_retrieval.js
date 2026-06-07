(() => {
    console.log("[Layer 1] Dataset Retrieval");

    async function loadData(url) {
        const res = await fetch(url);
        const data = await res.json();

        window.records = data;
        console.log("Dataset loaded:", data.length, "records");
    }

    console.log("Use: loadData('full_dataset.json')");
    window.loadData = loadData;
})();