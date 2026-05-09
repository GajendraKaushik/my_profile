import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const VIEWER_TYPES = {
  recruiter: 'recruiter',
  developer: 'developer',
};

export const COLOR_MODES = {
  dark: 'dark',
  light: 'light',
};

const RECRUITER_ACCENT = '#f2c078';
const DEVELOPER_ACCENT = '#22d3ee';

const RECRUITER_ACCENT_LIGHT = '#b45309';
const DEVELOPER_ACCENT_LIGHT = '#0891b2';

const getAccent = (viewerType, colorMode) => {
  const isRecruiter = viewerType === VIEWER_TYPES.recruiter;
  const isLight = colorMode === COLOR_MODES.light;
  if (isRecruiter) return isLight ? RECRUITER_ACCENT_LIGHT : RECRUITER_ACCENT;
  return isLight ? DEVELOPER_ACCENT_LIGHT : DEVELOPER_ACCENT;
};

const ViewerContext = createContext({
  ready: false,
  viewerType: VIEWER_TYPES.recruiter,
  colorMode: COLOR_MODES.dark,
  accent: RECRUITER_ACCENT,
  setViewerType: () => {},
  toggleViewerType: () => {},
  setColorMode: () => {},
});

const syncViewerTypeToURL = (viewerType) => {
  const url = new URL(window.location.href);
  url.searchParams.set('mode', viewerType);
  window.history.replaceState({}, '', url.toString());
};

const applyColorMode = (colorMode) => {
  document.documentElement.setAttribute('data-theme', colorMode);
  try {
    localStorage.setItem('hy_color_mode', colorMode);
  } catch {
    // Not needed for now
  }
};

export function ViewerProvider({ children }) {
  const [viewerType, setViewerTypeState] = useState(VIEWER_TYPES.recruiter);
  const [colorMode, setColorModeState] = useState(COLOR_MODES.dark);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    if (mode === VIEWER_TYPES.recruiter || mode === VIEWER_TYPES.developer) {
      setViewerTypeState(mode);
    }

    try {
      const saved = localStorage.getItem('hy_color_mode');
      if (saved === COLOR_MODES.dark || saved === COLOR_MODES.light) {
        setColorModeState(saved);
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch {
      // Not needed for now 
    }

    setReady(true);
  }, []);

  const setViewerType = useCallback((nextType) => {
    setViewerTypeState(nextType);
    syncViewerTypeToURL(nextType);
  }, []);

  const toggleViewerType = useCallback(() => {
    setViewerTypeState((prev) => {
      const next = prev === VIEWER_TYPES.recruiter ? VIEWER_TYPES.developer : VIEWER_TYPES.recruiter;
      syncViewerTypeToURL(next);
      return next;
    });
  }, []);

  const setColorMode = useCallback((nextMode) => {
    setColorModeState(nextMode);
    applyColorMode(nextMode);
  }, []);

  const accent = useMemo(() => getAccent(viewerType, colorMode), [viewerType, colorMode]);

  const value = useMemo(
    () => ({
      ready,
      viewerType,
      colorMode,
      accent,
      setViewerType,
      toggleViewerType,
      setColorMode,
    }),
    [ready, viewerType, colorMode, accent, setViewerType, toggleViewerType, setColorMode],
  );

  return <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>;
}

export function useViewer() {
  return useContext(ViewerContext);
}

