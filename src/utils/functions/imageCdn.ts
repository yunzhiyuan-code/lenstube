import { IMAGE_CDN_URL } from '@utils/constants'

import { sanitizeIpfsUrl } from './sanitizeIpfsUrl'

const imageCdn = (
  url: string,
  type?: 'thumbnail' | 'avatar' | 'avatar_lg' | 'square' | 'thumbnail_v'
): string => {
  if (!url) return url
  return type
    ? `${IMAGE_CDN_URL}/tr:n-${type}/${sanitizeIpfsUrl(url)}`
    : `${IMAGE_CDN_URL}/${sanitizeIpfsUrl(url)}`
}

export default imageCdn
