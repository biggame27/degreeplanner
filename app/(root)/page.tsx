import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="bg-maroon text-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Texas A&M Computer Science Degree Planner</h1>
        <p className="mt-4 text-xl">Plan your path to a degree in Computer Science with ease!</p>
      </header>

      <main className="mt-10 space-y-12">
        {/* Get Started Section */}
        <section className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-maroon">Get Started</h2>
          <p className="mt-4 text-lg">
            Use this tool to map out your courses, stay on track, and graduate on time.
          </p>
          <Link href="/planner">
            <button className="mt-6 px-6 py-3 bg-maroon text-white rounded-lg font-medium hover:bg-maroon-dark">
              Start Planning
            </button>
          </Link>
        </section>

        {/* Resources Section */}
        <section className="bg-card p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-maroon">Resources</h2>
          <ul className="mt-6 space-y-4 text-lg">
            <li><Link href="/catalog" className="text-primary hover:underline">Course Catalog</Link></li>
            <li><Link href="/degree-requirements" className="text-primary hover:underline">Degree Requirements</Link></li>
            <li><Link href="/advising" className="text-primary hover:underline">Advising Contacts</Link></li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 text-center text-muted-foreground">
        <p>&copy; 2024 Texas A&M University. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
