import Link from "next/link";

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center p-6 antialiased">
      <section className="text-3xl text-center">
        <p>Coffee Is Energy</p>
        <p>Coffee Is Social</p>
        <p>Coffee Is Peace</p>
        <p>Coffee Is Slow Down</p>
        <p>Coffee Is Hobby</p>
        <p>Coffee Is Having Friends </p>
        <p>Coffee Is Awesome!</p>
        <p>Coffee Is SimpleBean</p>
        <p>Coffee Is Joy</p>
        <p>Coffee Is Flavour</p>
        <p>Coffee Is Power</p>
        <p>Coffee Is Health</p>
      </section>
      <section className="absolute bottom-0 flex justify-between items-center p-6 w-full text-base">
        <Link href="/store">Store</Link>
        <Link href="/account">Account</Link>
      </section>
    </main>
  );
}
