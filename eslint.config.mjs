import tsBaseConfig from '@map-colonies/eslint-config/ts-base';
import { defineConfig } from 'eslint/config';
import vitestConfig from '@map-colonies/eslint-config/vitest';

export default defineConfig(vitestConfig, tsBaseConfig, { ignores: ['vitest.config.mts'] });
