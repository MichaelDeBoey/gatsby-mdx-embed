import React from "react"
import PropTypes from "prop-types"

export const Spotify = ({ spotifyLink, width, height }) => (
  <iframe
    title={`spotify-${spotifyLink}`}
    src={`https://open.spotify.com/embed/${spotifyLink}`}
    width={width}
    height={height}
    frameBorder="0"
    allowtransparency="true"
    allow="encrypted-media"
  />
)

Spotify.propTypes = {
  /**
   * Spotify link
   */
  spotifyLink: PropTypes.string.isRequired,
  /**
   * Width for the iFrame
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Height for the iFrame
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Spotify.defaultProps = {
  width: 320,
  height: 380,
}
