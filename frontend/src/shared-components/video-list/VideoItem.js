import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 20rem;
  background: lime;

  #video-image {
    width: 100%;
    height: 80%;
    background: blue;
  }

  #video-details {
    width: 100%;
    height: 20%;
    background: blue;

    p {
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
`;

const VideoItem = ({
  videoUuid,
  videoTitle,
  videoURL,
  postedBy,
  createdAt,
  onVideoSelect
}) => {
  return (
    <Container id={videoUuid} onClick={() => onVideoSelect(videoUuid)}>
      <img src={`https://img.youtube.com/vi/${videoURL}/0.jpg`} />
     <div id="video-details">
      <p>{videoTitle}</p>
      <p>{videoURL}</p>
      <p>{postedBy}</p>
      <p>{createdAt}</p>
    </div>
    </Container>
  );
};

export default VideoItem;
