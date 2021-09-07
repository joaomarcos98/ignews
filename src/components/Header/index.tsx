import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import { signIn } from "next-auth/client";


export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a >Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}