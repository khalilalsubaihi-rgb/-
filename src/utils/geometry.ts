import { Point } from '@/hooks/use-editor-store';

/**
 * Calculates the Euclidean distance between two points.
 * @param p1 The first point {x, y}
 * @param p2 The second point {x, y}
 * @returns The distance between p1 and p2
 */
export const calculateDistance = (p1: Point, p2: Point): number => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Calculates the angle between two points in radians.
 * @param p1 The starting point
 * @param p2 The ending point
 * @returns The angle in radians
 */
export const calculateAngle = (p1: Point, p2: Point): number => {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};

/**
 * Calculates the area of a non-self-intersecting polygon using the Shoelace formula.
 * @param points An array of vertices representing the polygon.
 * @returns The area of the polygon. Returns 0 if there are fewer than 3 points.
 */
export const calculatePolygonArea = (points: Point[]): number => {
  if (points.length < 3) return 0;

  let area = 0;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += points[i].x * points[j].y;
    area -= points[j].x * points[i].y;
  }

  return Math.abs(area) / 2.0;
};
