import { Key, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { fetchSearchMoviesList, fetchSearchTvList } from '.';
import { client } from '../../..';
import { fetchMovieById } from '../../../api/movies';
import { Loder } from '../../atoms/loder/Loder';
import { SliderListItem } from '../../atoms/sliderListItem/SliderListItem';
import { VideoListDetail } from '../../moleules/videoListDetail/VideoListDetail';
import {
  BigTitle,
  Container,
  FromWrapper,
  Input,
  ItemList,
  SearchFrom,
  Svg,
  Wrapper,
} from './styled.css';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const keyward = searchParams.get('keyward');
  const videoId = searchParams.get('videoId');
  const searchMoviesList = fetchSearchMoviesList(keyward);
  const searchTvList = fetchSearchTvList(keyward);

  useEffect(() => {
    return;
  }, [keyward]);

  const onClick = (videoId: string) => {
    setSearchParams(
      createSearchParams({
        keyward: keyward as string,
        videoId: videoId,
      })
    );
  };

  interface IForm {
    keyward: string;
  }

  const onValid = (data: IForm) => {
    setValue('keyward', '');
    setSearchParams(createSearchParams({ keyward: data.keyward }));
    navigate(`/search?keyward=${data.keyward}`);
    searchMoviesList.refetch();
    searchTvList.refetch();
  };
  return (
    <Wrapper>
      {searchMoviesList.isLoading ? (
        <Loder />
      ) : (
        <Container>
          <FromWrapper>
            <SearchFrom onSubmit={handleSubmit(onValid)}>
              <Svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </Svg>
              <Input
                {...register('keyward', { required: true, minLength: 2 })}
                type="text"
              />
            </SearchFrom>
          </FromWrapper>

          <BigTitle>{keyward}</BigTitle>
          {searchMoviesList.isLoading ? null : (
            <ItemList>
              {searchMoviesList.data.results.map(
                (item: { id: Key | null | undefined }) => (
                  <SliderListItem key={item.id} itemInfo={item} />
                )
              )}
            </ItemList>
          )}
          {searchTvList.isLoading ? null : (
            <ItemList>
              {searchTvList.data.results.map(
                (item: { id: Key | null | undefined }) => (
                  <SliderListItem key={item.id} itemInfo={item} />
                )
              )}
            </ItemList>
          )}

          {videoId ? (
            <VideoListDetail
              videoId={videoId}
              keyward={keyward}
              fetchFuntion={fetchMovieById}
            />
          ) : null}
        </Container>
      )}
    </Wrapper>
  );
};
