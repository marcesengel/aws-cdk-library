/**
 * The engine the cache uses.
 */
export enum Engine {
  /**
   * Redis
   */
  REDIS = 'redis',
  /**
   * Valkey
   */
  VALKEY = 'valkey',
  /**
   * Memcached
   */
  MEMCACHED = 'memcached',
}

/**
 * The engine the user group belongs to.
 */
export enum UserGroupEngine {
  /**
   * Redis
   */
  REDIS = 'redis',
  /**
   * Valkey
   */
  VALKEY = 'valkey',
}

/**
 * The engine the user belongs to.
 */
export enum UserEngine {
  /**
   * Redis
   */
  REDIS = 'redis',
  /**
   * Valkey
   */
  VALKEY = 'valkey',
}

