import { render, screen } from '@testing-library/react';
import RoomReviews from './room-reviews';
import { makeMockReviews } from 'src/utils/mock-review';
import { RoomReview } from 'src/consts/consts';

const REVIEW_TEST_ID = 'offer-review-item';
const MOCK_OFFER_ID = 1;
const reviews = makeMockReviews(RoomReview.PerOfferMaxCount + 1);

describe('Component: <RoomReviews>', () => {
  it('renders component when user is authorized', () => {
    const isUserLoggedIn = true;

    render(
      <RoomReviews
        offerId={MOCK_OFFER_ID}
        isUserLoggedIn={isUserLoggedIn}
        reviews={reviews}
      />
    );

    expect(screen.getAllByTestId(REVIEW_TEST_ID).length)
      .toBeLessThanOrEqual(RoomReview.PerOfferMaxCount);

    expect(screen.getByRole('textbox'))
      .toHaveAccessibleName('Your review');
  });

  it('renders component when user is not authorized', () => {
    const isUserLoggedIn = false;

    render(
      <RoomReviews
        offerId={MOCK_OFFER_ID}
        isUserLoggedIn={isUserLoggedIn}
        reviews={reviews}
      />
    );

    expect(screen.getAllByTestId(REVIEW_TEST_ID).length)
      .toBeLessThanOrEqual(RoomReview.PerOfferMaxCount);

    expect(screen.queryByRole('textbox'))
      .not.toBeInTheDocument();
  });
});