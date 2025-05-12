import books from "./shared/data/bookData"
import { Book } from "./shared/interfaces/common.interface"
import SectionHeader from "./components/section-header";
import CustomCard from "./components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookTrack | Discover, Read, and Track Your Favorite Books",
  description: "Read books, track your progress, and acknowledge your completion.",
}

const Home = () => {
  return (
    <main className="container mx-auto py-10">
      <SectionHeader title="BookTrack" description="Read books, track your progress, and acknowledge your completion." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book: Book) => (
          <CustomCard key={book.id} data={book} />
        ))}
      </div>
    </main>
  )
}

export default Home;