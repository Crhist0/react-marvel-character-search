import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getHero, getHeroes } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, setAll } from '../../store/HeroesSlice';
import useDebouncedEffect from '../../utils/useDebounceEffect';
import { updateState } from '../../store/HeroSlice';

export default function ComboBox(props) {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();
  const heroesRedux = useSelector(selectAll);

  function fetchHero(e) {
    if (e.key === 'Enter') {
      setValue(inputValue);
    }
  }

  React.useEffect(() => {
    if (heroesRedux.length && value) {
      getHero(heroesRedux.filter((hero) => hero.name === value)[0].id)
        .then((hero) => {
          const Hero = hero.data.results[0];
          dispatch(
            updateState({
              id: Hero.id,
              name: Hero.name,
              description: Hero.description,
              comics: Hero.comics.available,
              series: Hero.series.available,
              stories: Hero.stories.available,
              thumb: Hero.thumbnail.path + '.' + Hero.thumbnail.extension,
              urls: Hero.urls,
            })
          );
        })
        .catch((err) => console.log(err));
    }
  }, [value]);

  useDebouncedEffect(
    () => {
      getHeroes(inputValue)
        .then((res) => {
          dispatch(setAll(res.data.results));
        })
        .catch((err) => {
          console.log(err); // dispatch(updateState(err));
        });
    },
    [inputValue],
    150
  );

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onKeyPress={fetchHero}
      id="controllable-states-demo"
      options={heroesRedux.map((hero) => hero.name)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
