import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Layout>
				{" "}
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
