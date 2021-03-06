
export const MapLayouts = [
  // concentric circles
  {
    maxX: 24,
    maxY: 18,
    nodePositions: [
      { x: 2,  y: 9 },
      { x: 6,  y: 5 },
      { x: 6,  y: 13 },

      { x: 12, y: 2 },
      { x: 12, y: 16 },

      { x: 18, y: 13 },
      { x: 18, y: 5 },
      { x: 22, y: 9 },

      { x: 10, y: 7 },
      { x: 10, y: 11 },
      { x: 14, y: 7 },
      { x: 14, y: 11 },
    ],
    validNodeConnections: [
      { path: "0-1",   blocks: [] },
      { path: "0-2",   blocks: [] },
      { path: "0-7",   blocks: ["1-2", "5-6", "3-4", "8-9", "10-11", "8-11", "9-10", "1-9", "2-8", "6-11", "5-10"] },
      { path: "0-8",   blocks: ["1-2", "1-9"] },
      { path: "0-9",   blocks: ["1-2", "2-8"] },

      { path: "1-2",   blocks: ["0-8", "0-9", "0-7"] },
      { path: "1-3",   blocks: [] },
      { path: "1-6",   blocks: ["3-8", "3-10", "3-4"] },
      { path: "1-8",   blocks: [] },
      { path: "1-9",   blocks: ["0-8", "2-8", "0-7"] },

      { path: "2-4",   blocks: [] },
      { path: "2-5",   blocks: ["4-9", "4-11", "3-4"] },
      { path: "2-8",   blocks: ["0-9", "1-9", "0-7"] },
      { path: "2-9",   blocks: [] },

      { path: "3-4",   blocks: ["2-5", "1-6", "8-11", "9-10", "8-10", "9-11", "0-7"] },
      { path: "3-6",   blocks: [] },
      { path: "3-8",   blocks: ["1-6"] },
      { path: "3-10",  blocks: ["1-6"] },

      { path: "4-5",   blocks: [] },
      { path: "4-9",   blocks: ["2-5"] },
      { path: "4-11",  blocks: ["2-5"] },

      { path: "5-6",   blocks: ["7-10", "7-11", "0-7"] },
      { path: "5-7",   blocks: [] },
      { path: "5-11",  blocks: [] },
      { path: "5-10",  blocks: ["6-11", "7-11", "0-7"] },

      { path: "6-7",   blocks: [] },
      { path: "6-10",  blocks: [] },
      { path: "6-11",  blocks: ["7-10", "5-10", "0-7"] },

      { path: "7-10",  blocks: ["5-6", "6-11"] },
      { path: "7-11",  blocks: ["5-6", "5-10"] },

      { path: "8-9",   blocks: ["0-7"] },
      { path: "8-10",  blocks: ["3-4"] },
      { path: "8-11",  blocks: ["9-10", "3-4", "0-7"] },

      { path: "9-10",  blocks: ["8-11", "3-4", "0-7"] },
      { path: "9-11",  blocks: ["3-4"] },

      { path: "10-11",  blocks: ["0-7"] },
    ],
  },

  // spider web
  {
    maxX: 24,
    maxY: 18,
    nodePositions: [
      { x: 3, y: 3 },
      { x: 2, y: 8 },
      { x: 4, y: 12 },

      { x: 10, y: 5 },
      { x: 7,  y: 8 },
      { x: 10, y: 11 },

      { x: 16, y: 4 },
      { x: 13, y: 8 },
      { x: 14, y: 16 },

      { x: 19, y: 2 },
      { x: 22, y: 8 },
      { x: 20, y: 14 },
    ],
    validNodeConnections: [
      { path: "0-1",   blocks: [] },
      { path: "0-4",   blocks: ["1-3"] },
      { path: "0-9",   blocks: [] },
      { path: "0-6",   blocks: [] },
      { path: "0-3",   blocks: [] },
      { path: "0-2",   blocks: ["1-3", "1-4", "1-5", "1-8"] },

      { path: "1-2",   blocks: [] },
      { path: "1-3",   blocks: ["0-2", "0-4"] },
      { path: "1-4",   blocks: ["0-2", "2-4"] },
      // { path: "1-5",   blocks: ["0-2", "2-4", "2-6"] },
      { path: "1-8",   blocks: ["0-2", "2-4", "2-5", "2-6"] },

      { path: "2-4",   blocks: ["1-8", "1-5"] },
      { path: "2-5",   blocks: ["1-8"] },
      { path: "2-8",   blocks: [] },
      { path: "2-6",   blocks: ["4-6", "3-7", "3-5", "4-5", "4-7", "1-8", "1-5", "3-10"] },

      { path: "3-6",   blocks: [] },
      { path: "3-4",   blocks: [] },
      { path: "3-5",   blocks: ["2-6", "4-7"] },
      { path: "3-7",   blocks: ["2-6"] },
      { path: "3-10",  blocks: ["6-7", "6-8", "6-11", "9-8", "9-11", "2-6"] },

      { path: "4-5",   blocks: ["2-6"] },
      { path: "4-7",   blocks: ["2-6", "3-5"] },

      { path: "5-8",   blocks: ["2-11"] },
      { path: "5-7",   blocks: [] },
      { path: "5-11",  blocks: ["7-8", "6-8", "8-9", "8-10"] },

      { path: "6-7",   blocks: ["3-10"] },
      { path: "6-8",   blocks: ["7-10", "7-11", "3-10", "5-11"] },
      { path: "6-9",   blocks: [] },
      { path: "6-10",  blocks: ["9-8", "9-11"] },

      { path: "7-8",   blocks: ["5-11"] },
      { path: "7-10",  blocks: ["6-8", "6-11", "9-8", "9-11"] },
      { path: "7-11",  blocks: ["6-8", "9-8", "8-10"] },

      { path: "8-9",   blocks: ["6-10", "6-11", "7-11", "5-11", "7-10", "3-10"] },
      { path: "8-10",  blocks: ["5-11", "7-11", "6-11", "9-11"] },
      { path: "8-11",  blocks: [] },

      { path: "9-10",  blocks: [] },
      { path: "9-11",  blocks: ["6-10", "8-10", "7-10", "3-10"] },

      { path: "10-11", blocks: [] },
    ],
  },
];
