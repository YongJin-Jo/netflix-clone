import { motion, useViewportScroll } from 'framer-motion';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { IGetMoviesResult, Movies } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';
import { Cover, MovieInfo, Overlay, Overview, Title } from './styled.css';

interface IProps {
  data: IGetMoviesResult | undefined;
}

export const MovieListDetail = ({ data }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollY } = useViewportScroll();

  const onClick = () => {
    if (keyward != null) {
      navigate(`${location.pathname}?keyward=${keyward}`);
    }
    navigate(`${location.pathname}`);
  };

  const movieDetailData = (movieId &&
    data?.results.find(movie => movie.id.toString() === movieId)) as Movies;

  return (
    <Overlay animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick}>
      <MovieInfo
        layoutId={movieId as string}
        style={{
          top: scrollY.get(),
        }}
      >
        <Cover
          bgphoto={createImgPath(
            movieDetailData ? movieDetailData.backdrop_path : '',
            'w500'
          )}
        >
          <Title>{movieDetailData ? movieDetailData.title : ''}</Title>
        </Cover>

        <Overview>{movieDetailData ? movieDetailData.overview : ''}</Overview>
      </MovieInfo>
    </Overlay>
  );
};
