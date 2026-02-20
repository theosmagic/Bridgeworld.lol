import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('world', 'routes/world.tsx'),
  route('legions', 'routes/legions.tsx'),
  route('gameplay', 'routes/gameplay.tsx'),
  route('lore', 'routes/lore.tsx'),
  route('ecosystem', 'routes/ecosystem.tsx'),
  route('connect', 'routes/connect.tsx'),
] satisfies RouteConfig;
