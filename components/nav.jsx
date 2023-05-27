import Image from "next/image"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={"/"} className="flex gap-2 flex-center">
                <Image
                    src={"/assets/images/logo.svg"}
                    width={30}
                    height={30}
                    className="objective-contain"
                />
                <p className="logo-text">Duong</p>
            </Link>
            <Link href={"/about"} className="flex gap-2 flex-center">
                {/* <Image
                    src={"/assets/images/logo.svg"}
                    width={30}
                    height={30}
                    className="objective-contain"
                /> */}
                <p className="logo-text">About</p>
            </Link>
        </nav>
    )
}

export default Nav