import Image from "next/image"
import Logo from "@/public/images/Logo.png"
export default function Header() {
  return (
    <header className='w-full flex'>
      <div className='w-2/5'>
      </div>
      <div className='w-3/5'>
        <Image src={Logo} alt="SimpleBean Logo" width={96} />
      </div>
    </header>
  )
}
