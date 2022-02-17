import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { animationStroe } from '../../../store/stroe';
import { MoiveDetail } from '../../../type/movieDefind';
import { TvDtail } from '../../../type/tvDefind';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import { Cover, MovieInfo, Overlay, Overview, Title } from './styled.css';

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
                  <Title>{data?.title || data?.name}</Title>
                </Cover>
                <Overview>{data?.overview}</Overview>
              </>
            )}
          </MovieInfo>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
