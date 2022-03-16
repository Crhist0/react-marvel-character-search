import { FlexWrapper } from '../../components/FlexWrapper/FlexWrapper';

import { useDispatch } from 'react-redux';

import RecipeReviewCard from '../../components/HeroCard/HeroCard';
import SearchAppBar from '../../components/Appbar';

export const Landing = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SearchAppBar
        title="Search for a character name"
        placeholder="Spider..."
      />
      <FlexWrapper id="container" direction="column">
        <RecipeReviewCard />
      </FlexWrapper>
    </>
  );
};
