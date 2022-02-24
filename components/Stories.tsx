import React, { useEffect } from 'react';
import faker from '@faker-js/faker';

const Stories = () => {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
    }));

    console.log(suggestions);
  }, []);

  return <div>Stories</div>;
};

export default Stories;
