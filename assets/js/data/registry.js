/* =============================================================================
   STATE REGISTRY — single source of truth for which states/tools appear in
   the dashboard switcher and how the shared engine mounts each one. Adding a
   state means: write assets/js/data/<state>.js (see kerala.js for the fullest
   schema example), add one entry here, add one <script src> tag in
   index.html. Nothing else changes.
   ============================================================================= */
window.STATE_REGISTRY = [
  { key: 'kerala', name: 'Kerala', region: 'South', live: true },
  { key: 'central', name: 'Central Government', region: 'National', live: true },
  { key: 'tamilnadu', name: 'Tamil Nadu', region: 'South', live: true },
  { key: 'karnataka', name: 'Karnataka', region: 'South', live: true },
  { key: 'maharashtra', name: 'Maharashtra', region: 'West & Central', live: true },
  { key: 'andhrapradesh', name: 'Andhra Pradesh', region: 'South', live: true },
  { key: 'telangana', name: 'Telangana', region: 'South', live: true },
  { key: 'goa', name: 'Goa', region: 'West & Central', live: true },
  { key: 'gujarat', name: 'Gujarat', region: 'West & Central', live: true },
  { key: 'madhyapradesh', name: 'Madhya Pradesh', region: 'West & Central', live: true },
  { key: 'chhattisgarh', name: 'Chhattisgarh', region: 'West & Central', live: true },
  { key: 'rajasthan', name: 'Rajasthan', region: 'North', live: true },
  { key: 'uttarpradesh', name: 'Uttar Pradesh', region: 'North', live: true },
  { key: 'haryana', name: 'Haryana', region: 'North', live: true },
  { key: 'punjab', name: 'Punjab', region: 'North', live: true },
  { key: 'himachalpradesh', name: 'Himachal Pradesh', region: 'North', live: true },
  { key: 'uttarakhand', name: 'Uttarakhand', region: 'North', live: true },
  { key: 'bihar', name: 'Bihar', region: 'East', live: true },
  { key: 'jharkhand', name: 'Jharkhand', region: 'East', live: true },
  { key: 'odisha', name: 'Odisha', region: 'East', live: true },
  { key: 'westbengal', name: 'West Bengal', region: 'East', live: true },
  { key: 'arunachalpradesh', name: 'Arunachal Pradesh', region: 'Northeast', live: true },
  { key: 'assam', name: 'Assam', region: 'Northeast', live: true },
  { key: 'manipur', name: 'Manipur', region: 'Northeast', live: true },
  { key: 'meghalaya', name: 'Meghalaya', region: 'Northeast', live: true },
  { key: 'mizoram', name: 'Mizoram', region: 'Northeast', live: true },
  { key: 'nagaland', name: 'Nagaland', region: 'Northeast', live: true },
  { key: 'sikkim', name: 'Sikkim', region: 'Northeast', live: true },
  { key: 'tripura', name: 'Tripura', region: 'Northeast', live: true },
  { key: 'andamannicobar', name: 'Andaman & Nicobar Islands', region: 'Union Territory', live: true },
  { key: 'chandigarh', name: 'Chandigarh', region: 'Union Territory', live: true },
  { key: 'dadranagarhaveliandamandiu', name: 'Dadra & Nagar Haveli and Daman & Diu', region: 'Union Territory', live: true },
  { key: 'delhi', name: 'Delhi (NCT)', region: 'Union Territory', live: true },
  { key: 'jammukashmir', name: 'Jammu & Kashmir', region: 'Union Territory', live: true },
  { key: 'ladakh', name: 'Ladakh', region: 'Union Territory', live: true },
  { key: 'lakshadweep', name: 'Lakshadweep', region: 'Union Territory', live: true },
  { key: 'puducherry', name: 'Puducherry', region: 'Union Territory', live: true },
];
