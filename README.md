# Multi-Layer API Telemetry Analysis

## Overview

This project analyzes a real API telemetry dataset to identify patterns, anomalies, and possible hidden signals across multiple layers of processing.

The dataset was processed step-by-step using browser-based JavaScript analysis.

---

## What was done

### 1. Dataset Loading
The full telemetry dataset was loaded into the browser environment for inspection.

### 2. Data Inspection
Checked structure, validated records, and confirmed consistent schema across all entries.

### 3. Pattern Analysis
Analyzed:
- API endpoints
- HTTP methods
- status codes
- latency values
- request sizes
- user segments

### 4. Anomaly Detection
Focused on identifying unusual or repeating patterns in the dataset.

### 5. Extraction Attempts
Multiple techniques were applied to find hidden or encoded patterns:
- sorting by timestamp
- latency-based ranking
- request size ordering
- endpoint + method grouping
- modulo-based transformations
- positional and sequential analysis
- unique tuple extraction

---

## Result

The dataset shows **strong statistical balance**, but contains a few notable anomalies:

- Repeated PATCH + 401 failures
- Rate limit (429) concentrated in partner user segment

No clear hidden plaintext or direct encoded message was found from the applied extraction methods.

---

## Files

- layer1.js → dataset loading
- layer2.js → integrity & structure checks
- layer3.js → pattern + anomaly analysis
- layer4.js → submission script