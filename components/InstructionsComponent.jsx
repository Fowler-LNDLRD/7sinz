import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					<span>-Coming Soon</span>
				</h1>
				<p>
				</p>
			</header>				
				
			</div>
			<div className={styles.footer}>
				
				<div className={styles.icons_container}>

					<div>
						<a
							href="https://twitter.com/7SinzToken"
							target={"_blank"}
						>
							Follow us on Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
