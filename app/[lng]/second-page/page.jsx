import Link from 'next/link'

const Page = ({ params: { lng } }) => {
    return (
        <>
            <h1>Hi from second page!</h1>
            <Link href={`/${lng}`}>
                back
            </Link>
        </>
    )
}

export default Page;