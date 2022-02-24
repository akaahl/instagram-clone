import React from 'react';
import Stories from './Stories';

function Feed() {
  return (
    <main className="mx-auto mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
      </section>

      <section>
        <div>right</div>
      </section>
    </main>
  );
}

export default Feed;
