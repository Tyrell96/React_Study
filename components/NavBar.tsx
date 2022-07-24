import Link from 'next/link';
// import { Router, useRouter } from 'next/router';
import { useRouter } from 'next/router';
// import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    return (
    <nav>
        <Link href="/test">
            <a className={router.pathname === "/" ? "active" :""}>Home</a>
        </Link>
        <Link href="/about">
            <a>about</a>
        </Link>
        <style jsx>{`
            .active{
                color :tomato;
            }
        `}</style>
        
    </nav>);
}