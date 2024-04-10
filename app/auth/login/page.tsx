import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import Link from "next/link";
import Icon from "@/app/ui/Icon";
import FacebookIcon from "@/public/icons/facebook.svg";
import GoogleIcon from "@/public/icons/google.svg";
import AppleIcon from "@/public/icons/apple.svg";

export default function Login() {
    return (
        <main className="px-6 py-2">
            <header className="w-full flex justify-center items-center">
                <Link href={"/"}>
                    <Image src={Logo} alt="Simple Bean Logo" width={96} />
                </Link>
            </header>
            <h5 className="uppercase text-2xl text-center mt-20">Login</h5>
            <form method="POST" action={"#"} className="mt-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="relative w-4/5">
                        <input
                            type="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/30 appearance-none dark:text-white dark:border-accentColor dark:focus:border-accentColor/500 focus:outline-none focus:ring-0 focus:border-accentColor/60 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accentColor/60 peer-focus:dark:text-accentColor/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative w-4/5 mt-10">
                        <input
                            type="password"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-softBlack bg-transparent border-0 border-b-2 border-softBlack/30 appearance-none dark:text-white dark:border-accentColor dark:focus:border-accentColor/500 focus:outline-none focus:ring-0 focus:border-accentColor/60 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-softBlack/50 dark:text-softBlack/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accentColor/60 peer-focus:dark:text-accentColor/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >
                            Password
                        </label>
                        <div className="text-sm mt-2 text-gray-600 text-right">
                            <span>
                                Forgot your{" "}
                                <Link href={"auth/reset"}>Password?</Link>{" "}
                            </span>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-4/5 bg-accentColor/70 mt-12 text-offWhite px-6 py-3 rounded text-sm"
                    >
                        Login
                    </button>
                </div>
            </form>
            <section className="text-center text-gray-600 text-base mt-20">
                <p className="text-sm">Or Continue With</p>
                <section className="flex justify-center items-center mt-10">
                    <div className="flex gap-4 flex-col w-4/5">
                        <Link
                            href={"#"}
                            className="w-full flex items-center gap-4 justify-center px-6 py-2  border border-solid border-gray-300 rounded-md hover:bg-accentColor/10 hover:duration-150"
                        >
                            <Icon
                                src={FacebookIcon}
                                alt={"Facebook Icon"}
                                width={36}
                            />
                            <p className="text-sm text-gray-600">Facebook</p>
                        </Link>
                        <Link
                            href={"#"}
                            className="w-full flex items-center gap-4 justify-center px-6 py-2  border border-solid border-gray-300 rounded-md hover:bg-accentColor/10 hover:duration-150"
                        >
                            <Icon
                                src={GoogleIcon}
                                alt={"Google Icon"}
                                width={36}
                            />
                            <p className="text-sm text-gray-600">Google</p>
                        </Link>
                        <Link
                            href={"#"}
                            className="w-full flex items-center gap-4 justify-center px-6 py-2  border border-solid border-gray-300 rounded-md hover:bg-accentColor/10 hover:duration-150"
                        >
                            <Icon
                                src={AppleIcon}
                                alt={"Apple Icon"}
                                width={36}
                            />
                            <p className="text-sm text-gray-600">Github</p>
                        </Link>
                    </div>
                </section>
            </section>
            <section className="my-12">
                <p className="text-sm text-center">
                    You don't have an account yet?
                    <Link
                        href={"/auth/signup"}
                        className="text-accentColor font-semibold"
                    >
                        Sign Up
                    </Link>
                </p>
            </section>
        </main>
    );
}
