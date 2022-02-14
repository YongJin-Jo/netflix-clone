import { useEffect, useState } from 'react';
import { fetchMovieList } from '.';
import { Movies } from '../../../type/movieDefind';

import { createImgPath } from '../../../util/imgPath';
import { MovieListDetail } from '../../moleules/movieListDetail/MovieListDetail';
import { Slider } from '../../moleules/slider/Slider';
import { Banner, Overview, Title, Wrapper } from './styled.css';

export const Home = () => {
  const [movieBanner, setMovieBanner] = useState<any>({});
  const result = fetchMovieList();
  useEffect(() => {
    return setMovieBanner({ ...result[0].data.results[0] });
  }, [movieBanner]);

  return (
    <Wrapper>
      <Banner bgPhoto={createImgPath(movieBanner.backdrop_path)}>
        <Title>{movieBanner.title}</Title>
        <Overview>{movieBanner.overview}</Overview>
      </Banner>
      {result.map((item, index) => (
        <>
          <Slider key={index} data={item.data} />
        </>
      ))}
      <MovieListDetail data={undefined} />
    </Wrapper>
  );
};
