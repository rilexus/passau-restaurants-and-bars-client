import React, { useMemo } from "react";
import {
  Description,
  Name,
  PriceRange,
  StarRating,
  Restaurant as RestaurantType,
  ServesCuisine,
  Address,
  PaymentAccepted,
} from "libs/schema-org/Restaurant";
import { RatingValue } from "libs/schema-org/Rating";
import { StreetAddress } from "libs/schema-org/PostalAddress";
import { HorizontalSet } from "ui/HorizontalSet";
import { Spacer } from "ui/Spacer";

const Restaurant = ({
  description,
  name,
  ratingValue,
  priceRange,
  cuisine,
}) => {
  const ratingString = useMemo(() => {
    return Array.from({ length: ratingValue })
      .map(() => "*")
      .join("");
  }, [ratingValue]);
  return (
    <RestaurantType>
      <div>
        <Name as={"h2"}>{name}</Name>
        <Description>{description}</Description>
      </div>
      <Spacer top={"1rem"} />
      <HorizontalSet>
        <div>
          <StarRating>
            <RatingValue rating={ratingValue}>{ratingString}</RatingValue>
          </StarRating>
        </div>
        <div>
          <ServesCuisine>{cuisine}</ServesCuisine>
        </div>
        <div>
          <Address>
            <StreetAddress>Inn-Strasse 9</StreetAddress>
          </Address>
        </div>
        <PriceRange>
          {priceRange[0]} - {priceRange[1]}
        </PriceRange>
        <div>
          <PaymentAccepted>Cash</PaymentAccepted>
        </div>
      </HorizontalSet>
    </RestaurantType>
  );
};

export default Restaurant;
