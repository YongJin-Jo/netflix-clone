import { useQuery } from 'react-query';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../../api/movies';
import { IGetMoviesResult } from '../../../type/movieDefind';
import { createImgPath } from '../../../util/imgPath';
import { Loder } from '../../atoms/loder/Loder';
import {
  BigTitle,
  Box,
  Container,
  Item,
  ItemList,
  Wrapper,
} from './styled.css';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyward = searchParams.get('keyward');
  const movieId = searchParams.get('movieId');
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ['movies', 'serchMovies'],
    async () => {
      const data = await fetchSearchMovies(keyward);
      return data;
    }
  );

  const onClick = (movieId: string) => {
    setSearchParams(
      createSearchParams({
        keyward: keyward as string,
        movieId: movieId,
      })
    );
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loder />
      ) : (
        <Container>
          <BigTitle>SearchList:{keyward}</BigTitle>
          <ItemList>
            {data?.results.map(item => (
              <Item
                layoutId={movieId as string}
                key={item.id}
                onClick={() => {
                  onClick(item.id.toString());
                }}
              >
                <Box bgpoto={createImgPath(item.backdrop_path, 'w500')}>
                  {item.title}
                </Box>
              </Item>
            ))}
          </ItemList>
        </Container>
      )}
    </Wrapper>
  );
};
