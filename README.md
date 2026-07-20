# Climate Drivers of Kenyan Coffee Yield

**A data science investigation using 35 years of climate and agricultural data.**

[![Python](https://img.shields.io/badge/Python-3.11-blue)]()
[![Analysis](https://img.shields.io/badge/Method-OLS%20Regression-orange)]()
[![Status](https://img.shields.io/badge/Status-Phase%201%20Complete-brightgreen)]()

> How much does climate explain Kenya's 23% decline in coffee yield since 1990? **Short answer: It explains about half.**

**→ [Notebooks](./notebooks) · [Figures](./reports)**

---

## Project Overview

Built an end-to-end data science pipeline analyzing 35 years of Kenyan coffee production and NASA climate data to quantify how much climate explains declining coffee yields.

This project draws on thirty-five years of merged climate and agricultural data, spanning 1990 to 2024, across eight of Kenya's major coffee-growing regions, which together account for approximately ninety-five percent of national production. Climate variables were aggregated using production-weighted regional averages, ensuring that higher-producing regions are represented proportionally in the resulting national figures. The analysis proceeds through a progression of five regression models, each tested against a full battery of diagnostic assumptions, and further validated through leave-one-out and lag-sensitivity robustness checks. The complete pipeline, from raw data through final results, is documented in fully reproducible notebooks.

---

## Key Findings

| Finding | Result |
|---|---|
| Yield decline (1990–2024) | **↓ 23%** |
| Strongest climate predictor | **Temperature** (hotter years → lower yield) |
| Rainfall's effect on yield | **Not statistically significant** — in any model tested |
| Best model performance | **51% of yield variance explained** |

---

## Why This Project

Growing up in Kenya with family ties to smallholder coffee farming, I had heard climate change cited for years as the main reason behind the country's declining coffee yields. I wanted to know how much of that story actually holds up against the data, and to open up the possibility that other factors are at play as well.

## Data Pipeline

```
FAOSTAT (yield, production, export value)
        │
        ▼
   Data Cleaning
        │
        ▼
NASA POWER Climate Data (8 regions, monthly)
        │
        ▼
Production-Weighted Regional Aggregation
        │
        ▼
   Merged Dataset (35 years)
        │
        ▼
Exploratory Data Analysis
        │
        ▼
   Regression Modeling (OLS → Lagged → AR)
        │
        ▼
   Assumption Diagnostics
        │
        ▼
   Robustness Checks
```

---

## Repository Structure

```
├── data/              raw and processed datasets
├── notebooks/         data processing + full regression analysis
├── reports/           generated charts and diagnostic plots
├── research/          resources used to understand the question
├── website/           ...
└── README.md          you are here
```

---

## Methods

- Data cleaning & merging (FAOSTAT + NASA POWER)
- Production-weighted feature engineering across 8 regions
- Exploratory data analysis & correlation testing
- OLS regression, progressively refined across 5 specifications
- Lagged and autoregressive modeling
- Full 5-assumption OLS diagnostic testing (linearity, multicollinearity, normality,
  homoscedasticity, autocorrelation)
- Leave-one-out and multi-lag robustness checks

---

## Results

**Yield fell while rainfall and humidity rose** which is the opposite of the "hotter and drier"
narrative usually assumed:

![Yield decline over time](reports/02_yield_timeseries.png)
![Climate trends over time](reports/02_climate_timeseries.png)

**Model progression**: each version was built to fix a specific weakness in the last:

| Model | Specification | R² |
|---|---|---|
| 1 | Temperature only | 0.165 |
| 2 | Full climate model | 0.376 |
| 3 | Climate + year, HAC-corrected | 0.402 |
| 4 | First-differences | 0.029 |
| **5** | **Climate + 1-year lagged yield** | **0.513** |

Model 5 passed all five OLS diagnostic tests and held up under leave-one-out and
lag-sensitivity robustness checks.

---

## What Surprised Me

Coffee is often described as following a **biennial bearing** cycle, where a heavy harvest year depletes the tree, producing a lighter one the next year. If that were driving Kenya's numbers, last year's yield should *negatively* predict this year's. Instead, last year's yield **positively** and significantly predicted this year's yield (p = 0.001), even after controlling for climate. Instead of the expected biennial bearing
pattern, previous-year yield consistently predicted future yield positively. A strong harvest probably means a farm had the labor, fertilizer, and capital to properly maintain its trees. Well-resourced farms likely stay well-resourced; under-resourced ones likely stay under-resourced.

---

## Limitations

- **Small sample size** (n = 34–35 annual observations). The analysis window begins in 1990, following the July 1989 collapse of the International Coffee Agreement (ICA), the body that had regulated global coffee export quotas and stabilized prices for decades. Starting the sample after this collapse avoids mixing two  different market regimes, but it also caps the dataset at 35 years.
- National-level annual aggregation may obscure regional and within-season variation
- There is no economic, market, disease, or farm-management data included 
- The results of this study establish association, not causation

---

## Future Work

The current model accounts for roughly half of the variation in yield, which suggests that the climate signal itself could still be sharpened. The most immediate opportunity lies in timing, since this analysis relies on annual climate averages even though coffee yield is most sensitive during specific flowering windows, roughly February through April and again from August through October. Monthly climate data capable of testing this more precisely has already been collected as part of this project and is ready to be incorporated in a future iteration of the analysis.

Similarly, because of the persistence finding that points toward economic and management-related factors rather than purely biological ones, two extensions follow naturally: incorporating coffee price data alongside the effects of the 1989 market liberalization, and eventually accounting for disease pressure and farm-level investment, neither of which is captured in the current dataset.

Moving from a national average toward region-specific analysis would help determine whether these climate relationships hold consistently across Kenya's coffee-growing regions even though matching regional yield data has not yet been collected.
---

## Data Sources

- Coffee yield, production, and export value: [FAOSTAT](https://www.fao.org/faostat/)
- Climate data (temperature, precipitation, humidity, solar radiation):
  [NASA POWER](https://power.larc.nasa.gov/)

---

*Questions or feedback? I'd love to hear them. Open an issue.*