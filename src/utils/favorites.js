const FAVORITES_STORAGE_KEY = 'favorite';
let memoryFavoriteIds = [];
let useMemoryFallback = false;

function getStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function parseFavoriteIds(value) {
  if (typeof value !== 'string') {
    return [];
  }

  return [...new Set(value.split(',').map((id) => id.trim()).filter((id) => /^\d+$/.test(id)))];
}

export function getFavoriteIds() {
  if (useMemoryFallback) {
    return [...memoryFavoriteIds];
  }

  try {
    const storage = getStorage();
    if (!storage) {
      useMemoryFallback = true;
      return [...memoryFavoriteIds];
    }

    memoryFavoriteIds = parseFavoriteIds(storage.getItem(FAVORITES_STORAGE_KEY));
    return [...memoryFavoriteIds];
  } catch {
    useMemoryFallback = true;
    return [...memoryFavoriteIds];
  }
}

export function hasFavoriteId(id) {
  return getFavoriteIds().includes(String(id));
}

export function toggleFavoriteId(id) {
  const favoriteId = String(id);
  const favoriteIds = getFavoriteIds();
  const nextFavoriteIds = favoriteIds.includes(favoriteId)
    ? favoriteIds.filter((storedId) => storedId !== favoriteId)
    : [...favoriteIds, favoriteId];

  memoryFavoriteIds = nextFavoriteIds;

  try {
    const storage = getStorage();
    if (storage) {
      storage.setItem(FAVORITES_STORAGE_KEY, nextFavoriteIds.join(','));
    } else {
      useMemoryFallback = true;
    }
  } catch {
    useMemoryFallback = true;
  }

  return nextFavoriteIds.includes(favoriteId);
}
