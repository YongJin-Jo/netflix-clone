import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient } from 'react-query';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { Input, Svg, Wrapper } from './styled.css';

export const SearchForm = () => {
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, setValue } = useForm<IForm>();
  const navigate = useNavigate();
  const onClick = () => {
    setToggle(prev => !prev);
  };

  interface IForm {
    keyward: string;
  }

  const onValid = (data: IForm) => {
    setValue('keyward', '');
    setSearchParams(createSearchParams({ keyward: data.keyward }));
    navigate(`/search?keyward=${data.keyward}`);
  };
  return (
    <Wrapper onSubmit={handleSubmit(onValid)}>
      <Svg
        animate={{ x: toggle ? -200 : 0 }}
        transition={{ duration: 0.23 }}
        onClick={onClick}
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
        animate={{ scaleX: toggle ? 1 : 0 }}
        type="text"
        placeholder="Search for movie or tv show..."
      />
    </Wrapper>
  );
};
