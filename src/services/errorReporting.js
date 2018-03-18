import { isProd, ravenUrl } from '../constants.js';

export function reportActionFailure(action) {
  if (isProd && ravenUrl) {
    window.Raven.captureException(action.error, {
      extra: action,
    });
  }
  console.error(action);
}

export function reportRenderError(error, info) {
  if (isProd && ravenUrl) {
    window.Raven.captureException(error, {
      extra: info,
    });
  }
  console.error(error);
  console.error(info);
}
