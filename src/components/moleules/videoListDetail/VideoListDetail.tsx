import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { animationStroe } from '../../../store/stroe';
import { MoiveDetail } from '../../../type/movieDefind';
import { TvDtail } from '../../../type/tvDefind';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import {
  BookmarkButton,
  ButtonWrapper,
  Cover,
  DetailWrapper,
  DounButton,
  Genres,
  GenresWrapper,
  MovieInfo,
  Overlay,
  Overview,
  PlayButton,
  PositionWrapper,
  ReleaseDate,
  Title,
  UpButton,
  VideoHistoryWrapper,
} from './styled.css';

interface IProps {
  videoId: string | null;
  keyward: string | null;
  fetchFuntion: (id: string | null) => Promise<any>;
}

export const VideoListDetail = ({ videoId, keyward, fetchFuntion }: IProps) => {
  const animationState = useRecoilValue(animationStroe);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, data } = useQuery<MoiveDetail & TvDtail>(
    ['video-work', 'video-work-info'],
    async () => {
      const data = await fetchFuntion(videoId);
      return data;
    }
  );

  const onClick = () => {
    if (keyward != null) {
      return navigate(`${location.pathname}?keyward=${keyward}`);
    }
    return navigate(`${location.pathname}`);
  };

  return (
    <AnimatePresence>
      {!animationState[0].isDragging && (
        <Overlay
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClick}
        >
          <MovieInfo
            layoutId={videoId as string}
            style={{
              top: 80,
            }}
          >
            {isLoading ? (
              <Loder></Loder>
            ) : (
              <>
                <Cover bgphoto={createImgPath(data?.backdrop_path)}>
                  <PositionWrapper>
                    <Title>{data?.title || data?.name}</Title>
                    <ButtonWrapper>
                      <PlayButton>Play</PlayButton>
                      <BookmarkButton>+</BookmarkButton>
                      <UpButton>Up</UpButton>
                      <DounButton>Doun</DounButton>
                    </ButtonWrapper>
                  </PositionWrapper>
                </Cover>
                <DetailWrapper>
                  <VideoHistoryWrapper>
                    <ReleaseDate>
                      {data?.release_date || data?.first_air_date}
                    </ReleaseDate>
                  </VideoHistoryWrapper>
                  <GenresWrapper>
                    <h3>Genres</h3>
                    {data?.genres.map(item => (
                      <Genres key={item.id}> {item.name}</Genres>
                    ))}
                  </GenresWrapper>

                  <Overview>{data?.overview}</Overview>
                </DetailWrapper>
              </>
            )}
          </MovieInfo>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
