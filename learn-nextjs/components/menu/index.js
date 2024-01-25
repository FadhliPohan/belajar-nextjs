import Link from "next/link";

const Menu=()=>{
    return <div>
       <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profil</Link></li>
        <li><Link href="/user">User</Link></li>
        <li><Link href="/user/detail">User Detail</Link></li>
       </ul>
    </div>
}
export default Menu;