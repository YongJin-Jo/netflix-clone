import { AnimatePresence, useViewportScroll } from 'framer-motion';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { fetchMovieDetail } from '../../../api/movies';
import { animationStroe } from '../../../store/stroe';
import { MoiveDetail } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import { Cover, MovieInfo, Overlay, Overview, Title } from './styled.css';

interface IProps {
  movieId: string | null;
  keyward: string | null;
}

export const MovieListDetail = ({ movieId, keyward }: IProps) => {
  const animationState = useRecoilValue(animationStroe);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const { isLoading, data } = useQuery<MoiveDetail>(
    ['movies', 'oneMovie'],
    async () => {
      const data = await fetchMovieDetail(movieId);
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
            layoutId={movieId as string}
            style={{
              top: 80,
            }}
          >
            {isLoading ? (
              <Loder></Loder>
            ) : (
              <>
                <Cover bgphoto={createImgPath(data?.backdrop_path)}>
                  <Title>{data?.title}</Title>
                </Cover>
                <Overview>{data?.overview}</Overview>
              </>
            )}

            <Overview>d</Overview>
          </MovieInfo>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
