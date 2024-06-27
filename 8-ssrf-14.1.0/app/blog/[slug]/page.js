import Link from 'next/link'

export default function Page({ params }) {
    return (
        <>
            <div>
                My Post: {params.slug}
            </div>
            <Link href="/">Back to home page</Link>
        </>
        );
  }