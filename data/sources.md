# Data Sources Documentation
## Kenya Coffee Research Project

**Project:** Predicting Coffee Yield Variation in Kenya Using Climate Data  
**Period:** 1990-2024 (35 years)  
**Last Updated:** 15 June 2026

---

## 1. Coffee Production Data

### **Source:** FAOSTAT (Food and Agriculture Organization)
FAO. (2024). Coffee yield data (1990-2024). FAOSTAT Crops and Livestock Products. Retrieved [Month Day, Year you accessed it], from https://www.fao.org/faostat/en/#data/QCL

- **Database:** Production > Crops and livestock products
- **URL:** https://www.fao.org/faostat/en/#data/QCL
- **Access Date:** 15 June 2026
- **License:** Creative Commons (Open Data)

### **Variables Collected:**
1. **Area harvested** 
   - Unit: Hectares (ha)
   - Description: Total area under coffee cultivation
   
2. **Production Quantity**
   - Unit: Tonnes
   - Description: Total green coffee production
   
3. **Yield**
   - Unit: Kilograms per hectare (kg/ha)
   - Description: Coffee productivity (Production/Area)

### **Spatial Coverage:** Kenya (National level)
### **Temporal Coverage:** 1990-2024 (35 years)
### **Data Quality:** 
- Flag: "A" (Estimated value by FAO)
- Official statistics from Government of Kenya

### **File Location:**
- Raw: `data/raw/coffee_yields_1990_2024.csv`
- Processed: `data/processed/yields_clean_extended.csv`

---

## 2. Coffee Value Data

### **Source:** FAOSTAT
- **Database:** Value of Agricultural Production
- **URL:** https://www.fao.org/faostat/en/#data/QV
- **Access Date:** 15 June 2026

### **Variable:**
- **Gross Production Value**
  - Unit: Constant 2014-2016 thousand US$
  - Description: Economic value of coffee production, inflation-adjusted
  - Base period: 2014-2016 = 100

### **Spatial Coverage:** Kenya (National level)
### **Temporal Coverage:** 1990-2024 (35 years)

### **File Location:**
- Raw: `data/raw/coffee_value_1990_2024.csv`
- Processed: `data/processed/value_clean_extended.csv`

---

## 3. Climate Data

### **Source:** NASA POWER Project
NASA. (2024). POWER Project Data. NASA Prediction of Worldwide Energy Resources. Retrieved 15 June 2026, from https://power.larc.nasa.gov/

- **Full Name:** Prediction of Worldwide Energy Resources
- **URL:** https://power.larc.nasa.gov/
- **API Documentation:** https://power.larc.nasa.gov/docs/
- **Access Date:** 15 June 2026
- **License:** Public Domain (NASA data)

### **Climate Variables Collected:**

**Source:** NASA POWER (Prediction of Worldwide Energy Resources)
**Temporal Coverage:** January 1990 - December 2024  
**Extraction Method:** Data extracted via NASA POWER API for specific coordinates, monthly temporal resolution aggregated to annual means for analysis.

1. **T2M** - Temperature at 2 Meters
   - Unit: Degrees Celsius (°C)
   
2. **PRECTOTCORR** - Precipitation Corrected
   - Unit: Millimeters per day (mm/day)
   - Note: Bias-corrected
   
3. **QV2M** - Specific Humidity at 2 Meters
   - Unit: Grams per kilogram (g/kg)
   
4. **ALLSKY_SFC_SW_DWN** - All Sky Surface Shortwave Downward Irradiance
   - Unit: Megajoules per square meter per day (MJ/m²/day)
   - Description: Solar radiation reaching the surface

5. **GWETROOT** - Root Zone Soil Wetness
   - Unit: Fraction (0-1)

6. **GWETTOP** - Surface Soil Wetness
   - Unit: Fraction (0-1)

7. **WS2M** - Wind Speed at 2 Meters
   - Unit: Meters per second (m/s)

8. **TS** - Earth Skin Temperature
   - Unit: Degrees Celsius (°C)

### **Spatial Coverage:** 
8 representative locations in Kenya's coffee-growing regions:

| Region | County | Coordinates | Production Share | Justification |
|--------|--------|-------------|------------------|---------------|
| Nyeri | Nyeri | -0.4197°, 36.9519° | 15% | Central Highlands, premium AA coffee zone |
| Kirinyaga | Kirinyaga | -0.6599°, 37.3830° | 12% | Southern Mt. Kenya slopes |
| Murang'a | Murang'a | -0.7211°, 37.1526° | 10% | Kandara-Kigumo coffee belt |
| Kiambu | Kiambu | -1.1714°, 36.8356° | 3% | Near Nairobi, historical coffee area |
| Embu | Embu | -0.5310°, 37.4574° | 15% | Eastern Mt. Kenya slopes |
| Meru | Meru | 0.0469°, 37.6506° | 15% | Northern Mt. Kenya region |
| Kisii | Kisii | -0.6817°, 34.7680° | 15% | Western Highlands, different microclimate |
| Nakuru | Nakuru | -0.3031°, 36.0800° | 10% | Rift Valley Highlands |

**Total Coverage:** 95% of Kenya's coffee production