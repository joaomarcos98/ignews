import { signIn, useSession } from "next-auth/client";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
    priceId: string
}

export function SubcribeButton({ priceId }: SubscribeButtonProps) {

    const [session] = useSession();

    function handleSubcribe() {

        if (!session) {
            signIn("github")
            return;
        }

    }
    return (
        <button
            type="button"
            className={styles.subcribeButton}
            onClick={handleSubcribe}
        >
            Subscribe now
        </button>
    )
}