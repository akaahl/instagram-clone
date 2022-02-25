import faker from '@faker-js/faker';
import React, { useEffect, useState } from 'react';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return <div>Suggestions</div>;
};

export default Suggestions;
