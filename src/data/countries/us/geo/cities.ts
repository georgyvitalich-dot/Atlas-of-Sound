import type { City } from '../../../types';

/**
 * Cities that artists are musically tied to (CONTENT_GUIDELINES.md §3).
 * id = `<regionId>-<slug>`, coords = [lon, lat] — the validator checks the
 * point lies inside the state. Grouped by state, alphabetical within a state.
 */
export const US_CITIES: City[] = [
  // Alabama
  { id: 'us-al-athens', regionId: 'us-al', name: 'Athens', coords: [-86.9717, 34.8026] },
  { id: 'us-al-fort-payne', regionId: 'us-al', name: 'Fort Payne', coords: [-85.7197, 34.4443] },
  { id: 'us-al-muscle-shoals', regionId: 'us-al', name: 'Muscle Shoals', coords: [-87.6675, 34.7448] },
  { id: 'us-al-tuskegee', regionId: 'us-al', name: 'Tuskegee', coords: [-85.7077, 32.4302] },

  // Alaska
  { id: 'us-ak-homer', regionId: 'us-ak', name: 'Homer', coords: [-151.5483, 59.6425] },

  // Arizona
  { id: 'us-az-mesa', regionId: 'us-az', name: 'Mesa', coords: [-111.8315, 33.4152] },
  { id: 'us-az-phoenix', regionId: 'us-az', name: 'Phoenix', coords: [-112.074, 33.4484] },
  { id: 'us-az-tempe', regionId: 'us-az', name: 'Tempe', coords: [-111.94, 33.4255] },
  { id: 'us-az-tucson', regionId: 'us-az', name: 'Tucson', coords: [-110.9747, 32.2226] },

  // Arkansas
  { id: 'us-ar-helena', regionId: 'us-ar', name: 'Helena', coords: [-90.5918, 34.5295] },
  { id: 'us-ar-little-rock', regionId: 'us-ar', name: 'Little Rock', coords: [-92.2896, 34.7465] },
  { id: 'us-ar-mountain-view', regionId: 'us-ar', name: 'Mountain View', coords: [-92.1176, 35.8684] },

  // California
  { id: 'us-ca-berkeley', regionId: 'us-ca', name: 'Berkeley', coords: [-122.273, 37.8715] },
  { id: 'us-ca-compton', regionId: 'us-ca', name: 'Compton', coords: [-118.2201, 33.8958] },
  { id: 'us-ca-el-cerrito', regionId: 'us-ca', name: 'El Cerrito', coords: [-122.3108, 37.9161] },
  { id: 'us-ca-long-beach', regionId: 'us-ca', name: 'Long Beach', coords: [-118.1937, 33.7701] },
  { id: 'us-ca-los-angeles', regionId: 'us-ca', name: 'Los Angeles', coords: [-118.2437, 34.0522] },
  { id: 'us-ca-oakland', regionId: 'us-ca', name: 'Oakland', coords: [-122.2712, 37.8044] },
  { id: 'us-ca-san-francisco', regionId: 'us-ca', name: 'San Francisco', coords: [-122.4194, 37.7749] },

  // Colorado
  { id: 'us-co-aspen', regionId: 'us-co', name: 'Aspen', coords: [-106.8175, 39.1911] },
  { id: 'us-co-denver', regionId: 'us-co', name: 'Denver', coords: [-104.9903, 39.7392] },

  // Connecticut
  { id: 'us-ct-bridgeport', regionId: 'us-ct', name: 'Bridgeport', coords: [-73.1952, 41.1865] },

  // Delaware
  { id: 'us-de-wilmington', regionId: 'us-de', name: 'Wilmington', coords: [-75.5484, 39.7447] },

  // Florida
  { id: 'us-fl-jacksonville', regionId: 'us-fl', name: 'Jacksonville', coords: [-81.6557, 30.3322] },
  { id: 'us-fl-miami', regionId: 'us-fl', name: 'Miami', coords: [-80.1918, 25.7617] },
  { id: 'us-fl-orlando', regionId: 'us-fl', name: 'Orlando', coords: [-81.3792, 28.5383] },

  // Georgia
  { id: 'us-ga-albany', regionId: 'us-ga', name: 'Albany', coords: [-84.1557, 31.5785] },
  { id: 'us-ga-athens', regionId: 'us-ga', name: 'Athens', coords: [-83.3576, 33.9519] },
  { id: 'us-ga-atlanta', regionId: 'us-ga', name: 'Atlanta', coords: [-84.388, 33.749] },
  { id: 'us-ga-augusta', regionId: 'us-ga', name: 'Augusta', coords: [-82.0105, 33.4735] },
  { id: 'us-ga-macon', regionId: 'us-ga', name: 'Macon', coords: [-83.6324, 32.8407] },

  // Hawaii
  { id: 'us-hi-haleiwa', regionId: 'us-hi', name: 'Haleiwa', coords: [-158.1034, 21.5928] },
  { id: 'us-hi-honolulu', regionId: 'us-hi', name: 'Honolulu', coords: [-157.8583, 21.3069] },

  // Idaho
  { id: 'us-id-boise', regionId: 'us-id', name: 'Boise', coords: [-116.2023, 43.615] },

  // Illinois
  { id: 'us-il-chicago', regionId: 'us-il', name: 'Chicago', coords: [-87.6298, 41.8781] },

  // Indiana
  { id: 'us-in-gary', regionId: 'us-in', name: 'Gary', coords: [-87.3464, 41.5934] },
  { id: 'us-in-indianapolis', regionId: 'us-in', name: 'Indianapolis', coords: [-86.1581, 39.7684] },
  { id: 'us-in-seymour', regionId: 'us-in', name: 'Seymour', coords: [-85.8903, 38.9592] },

  // Iowa
  { id: 'us-ia-des-moines', regionId: 'us-ia', name: 'Des Moines', coords: [-93.625, 41.5868] },

  // Kansas
  { id: 'us-ks-topeka', regionId: 'us-ks', name: 'Topeka', coords: [-95.6752, 39.0473] },

  // Kentucky
  { id: 'us-ky-louisville', regionId: 'us-ky', name: 'Louisville', coords: [-85.7585, 38.2527] },
  { id: 'us-ky-rosine', regionId: 'us-ky', name: 'Rosine', coords: [-86.7458, 37.4506] },
  { id: 'us-ky-van-lear', regionId: 'us-ky', name: 'Van Lear', coords: [-82.7579, 37.7717] },

  // Louisiana
  { id: 'us-la-new-orleans', regionId: 'us-la', name: 'New Orleans', coords: [-90.0715, 29.9511] },

  // Maine
  { id: 'us-me-fort-fairfield', regionId: 'us-me', name: 'Fort Fairfield', coords: [-67.8339, 46.7723] },

  // Maryland
  { id: 'us-md-baltimore', regionId: 'us-md', name: 'Baltimore', coords: [-76.6122, 39.2904] },
  { id: 'us-md-waldorf', regionId: 'us-md', name: 'Waldorf', coords: [-76.9391, 38.6246] },

  // Massachusetts
  { id: 'us-ma-boston', regionId: 'us-ma', name: 'Boston', coords: [-71.0589, 42.3601] },
  { id: 'us-ma-cambridge', regionId: 'us-ma', name: 'Cambridge', coords: [-71.1097, 42.3736] },

  // Michigan
  { id: 'us-mi-ann-arbor', regionId: 'us-mi', name: 'Ann Arbor', coords: [-83.743, 42.2808] },
  { id: 'us-mi-detroit', regionId: 'us-mi', name: 'Detroit', coords: [-83.0458, 42.3314] },

  // Minnesota
  { id: 'us-mn-minneapolis', regionId: 'us-mn', name: 'Minneapolis', coords: [-93.265, 44.9778] },
  { id: 'us-mn-saint-paul', regionId: 'us-mn', name: 'Saint Paul', coords: [-93.09, 44.9537] },

  // Mississippi
  { id: 'us-ms-clarksdale', regionId: 'us-ms', name: 'Clarksdale', coords: [-90.5709, 34.2001] },
  { id: 'us-ms-escatawpa', regionId: 'us-ms', name: 'Escatawpa', coords: [-88.5436, 30.4402] },
  { id: 'us-ms-greenwood', regionId: 'us-ms', name: 'Greenwood', coords: [-90.1795, 33.5162] },
  { id: 'us-ms-holly-springs', regionId: 'us-ms', name: 'Holly Springs', coords: [-89.4487, 34.7676] },
  { id: 'us-ms-meridian', regionId: 'us-ms', name: 'Meridian', coords: [-88.7037, 32.3643] },

  // Missouri
  { id: 'us-mo-kansas-city', regionId: 'us-mo', name: 'Kansas City', coords: [-94.5786, 39.0997] },
  { id: 'us-mo-st-louis', regionId: 'us-mo', name: 'St. Louis', coords: [-90.1994, 38.627] },

  // Nebraska
  { id: 'us-ne-omaha', regionId: 'us-ne', name: 'Omaha', coords: [-95.9345, 41.2565] },

  // Nevada
  { id: 'us-nv-las-vegas', regionId: 'us-nv', name: 'Las Vegas', coords: [-115.1398, 36.1699] },

  // New Jersey
  { id: 'us-nj-asbury-park', regionId: 'us-nj', name: 'Asbury Park', coords: [-74.0121, 40.2204] },
  { id: 'us-nj-englewood', regionId: 'us-nj', name: 'Englewood', coords: [-73.9726, 40.8929] },
  { id: 'us-nj-hoboken', regionId: 'us-nj', name: 'Hoboken', coords: [-74.0324, 40.744] },
  { id: 'us-nj-jersey-city', regionId: 'us-nj', name: 'Jersey City', coords: [-74.0431, 40.7178] },
  { id: 'us-nj-newark', regionId: 'us-nj', name: 'Newark', coords: [-74.1724, 40.7357] },
  { id: 'us-nj-sayreville', regionId: 'us-nj', name: 'Sayreville', coords: [-74.361, 40.4593] },

  // New Mexico
  { id: 'us-nm-albuquerque', regionId: 'us-nm', name: 'Albuquerque', coords: [-106.6504, 35.0844] },

  // New York
  { id: 'us-ny-nyc', regionId: 'us-ny', name: 'New York City', coords: [-74.006, 40.7128] },

  // North Carolina
  { id: 'us-nc-carrboro', regionId: 'us-nc', name: 'Carrboro', coords: [-79.0753, 35.9101] },
  { id: 'us-nc-chapel-hill', regionId: 'us-nc', name: 'Chapel Hill', coords: [-79.0558, 35.9132] },
  { id: 'us-nc-concord', regionId: 'us-nc', name: 'Concord', coords: [-80.5795, 35.4088] },
  { id: 'us-nc-deep-gap', regionId: 'us-nc', name: 'Deep Gap', coords: [-81.5245, 36.2335] },
  { id: 'us-nc-durham', regionId: 'us-nc', name: 'Durham', coords: [-78.8986, 35.994] },
  { id: 'us-nc-fayetteville', regionId: 'us-nc', name: 'Fayetteville', coords: [-78.8784, 35.0527] },

  // North Dakota
  { id: 'us-nd-fargo', regionId: 'us-nd', name: 'Fargo', coords: [-96.7898, 46.8772] },

  // Ohio
  { id: 'us-oh-akron', regionId: 'us-oh', name: 'Akron', coords: [-81.519, 41.0814] },
  { id: 'us-oh-canton', regionId: 'us-oh', name: 'Canton', coords: [-81.3784, 40.7989] },
  { id: 'us-oh-cincinnati', regionId: 'us-oh', name: 'Cincinnati', coords: [-84.512, 39.1031] },
  { id: 'us-oh-cleveland', regionId: 'us-oh', name: 'Cleveland', coords: [-81.6944, 41.4993] },
  { id: 'us-oh-columbus', regionId: 'us-oh', name: 'Columbus', coords: [-82.9988, 39.9612] },
  { id: 'us-oh-dayton', regionId: 'us-oh', name: 'Dayton', coords: [-84.1916, 39.7589] },

  // Oklahoma
  { id: 'us-ok-mcalester', regionId: 'us-ok', name: 'McAlester', coords: [-95.7697, 34.9334] },
  { id: 'us-ok-okemah', regionId: 'us-ok', name: 'Okemah', coords: [-96.305, 35.4326] },
  { id: 'us-ok-oklahoma-city', regionId: 'us-ok', name: 'Oklahoma City', coords: [-97.5164, 35.4676] },
  { id: 'us-ok-tulsa', regionId: 'us-ok', name: 'Tulsa', coords: [-95.9928, 36.154] },

  // Oregon
  { id: 'us-or-portland', regionId: 'us-or', name: 'Portland', coords: [-122.6784, 45.5152] },

  // Pennsylvania
  { id: 'us-pa-philadelphia', regionId: 'us-pa', name: 'Philadelphia', coords: [-75.1652, 39.9526] },
  { id: 'us-pa-pittsburgh', regionId: 'us-pa', name: 'Pittsburgh', coords: [-79.9959, 40.4406] },

  // South Carolina
  { id: 'us-sc-columbia', regionId: 'us-sc', name: 'Columbia', coords: [-81.0348, 34.0007] },
  { id: 'us-sc-spartanburg', regionId: 'us-sc', name: 'Spartanburg', coords: [-81.932, 34.9496] },

  // Tennessee
  { id: 'us-tn-brownsville', regionId: 'us-tn', name: 'Brownsville', coords: [-89.262, 35.5937] },
  { id: 'us-tn-memphis', regionId: 'us-tn', name: 'Memphis', coords: [-90.049, 35.1495] },
  { id: 'us-tn-nashville', regionId: 'us-tn', name: 'Nashville', coords: [-86.7816, 36.1627] },

  // Texas
  { id: 'us-tx-austin', regionId: 'us-tx', name: 'Austin', coords: [-97.7431, 30.2672] },
  { id: 'us-tx-corpus-christi', regionId: 'us-tx', name: 'Corpus Christi', coords: [-97.3964, 27.8006] },
  { id: 'us-tx-houston', regionId: 'us-tx', name: 'Houston', coords: [-95.3698, 29.7604] },
  { id: 'us-tx-lubbock', regionId: 'us-tx', name: 'Lubbock', coords: [-101.8552, 33.5779] },
  { id: 'us-tx-port-arthur', regionId: 'us-tx', name: 'Port Arthur', coords: [-93.9399, 29.885] },

  // Utah
  { id: 'us-ut-ogden', regionId: 'us-ut', name: 'Ogden', coords: [-111.9738, 41.223] },
  { id: 'us-ut-orem', regionId: 'us-ut', name: 'Orem', coords: [-111.6946, 40.2969] },

  // Vermont
  { id: 'us-vt-burlington', regionId: 'us-vt', name: 'Burlington', coords: [-73.2121, 44.4759] },

  // Virginia
  { id: 'us-va-charlottesville', regionId: 'us-va', name: 'Charlottesville', coords: [-78.4767, 38.0293] },
  { id: 'us-va-norfolk', regionId: 'us-va', name: 'Norfolk', coords: [-76.2859, 36.8508] },
  { id: 'us-va-portsmouth', regionId: 'us-va', name: 'Portsmouth', coords: [-76.2983, 36.8354] },
  { id: 'us-va-virginia-beach', regionId: 'us-va', name: 'Virginia Beach', coords: [-75.978, 36.8529] },
  { id: 'us-va-winchester', regionId: 'us-va', name: 'Winchester', coords: [-78.1633, 39.1857] },

  // Washington
  { id: 'us-wa-aberdeen', regionId: 'us-wa', name: 'Aberdeen', coords: [-123.8157, 46.9754] },
  { id: 'us-wa-bellingham', regionId: 'us-wa', name: 'Bellingham', coords: [-122.4787, 48.7519] },
  { id: 'us-wa-olympia', regionId: 'us-wa', name: 'Olympia', coords: [-122.9007, 47.0379] },
  { id: 'us-wa-seattle', regionId: 'us-wa', name: 'Seattle', coords: [-122.3321, 47.6062] },
  { id: 'us-wa-tacoma', regionId: 'us-wa', name: 'Tacoma', coords: [-122.4443, 47.2529] },

  // West Virginia
  { id: 'us-wv-beckley', regionId: 'us-wv', name: 'Beckley', coords: [-81.1882, 37.7782] },
  { id: 'us-wv-wheeling', regionId: 'us-wv', name: 'Wheeling', coords: [-80.7209, 40.064] },

  // Wisconsin
  { id: 'us-wi-eau-claire', regionId: 'us-wi', name: 'Eau Claire', coords: [-91.4985, 44.8113] },
  { id: 'us-wi-madison', regionId: 'us-wi', name: 'Madison', coords: [-89.4012, 43.0731] },
  { id: 'us-wi-milwaukee', regionId: 'us-wi', name: 'Milwaukee', coords: [-87.9065, 43.0389] },

  // Wyoming
  { id: 'us-wy-kaycee', regionId: 'us-wy', name: 'Kaycee', coords: [-106.6378, 43.7108] },
];
