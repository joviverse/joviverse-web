import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string
}

const YouTubeViewer = ({ id }: Props) => {
  return (
    <YouTubeIframeWrapper>
      <YouTubeIframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </YouTubeIframeWrapper>
  )
}

export default YouTubeViewer

const YouTubeIframeWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding-top: 56.25%;
  position: relative;
`
const YouTubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
